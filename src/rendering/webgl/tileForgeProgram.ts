import type { TileForgeGL } from './webglSupport';
import {
    TILE_FORGE_FRAGMENT_SHADER,
    TILE_FORGE_VERTEX_SHADER,
} from './tileForgeShaders';

export type TileForgeProgram = {
    program: WebGLProgram;
    positionBuffer: WebGLBuffer;
    attributeLocations: {
        position: number;
        local: number;
        kind: number;
        color: number;
        opacity: number;
        radius: number;
        softness: number;
    };
    uniformLocations: {
        resolution: WebGLUniformLocation | null;
    };
    dispose: () => void;
};

function compileShader(
    gl: TileForgeGL,
    type: number,
    source: string,
): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS) === true;

    if (!ok) {
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function linkProgram(
    gl: TileForgeGL,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader,
): WebGLProgram | null {
    const program = gl.createProgram();
    if (!program) return null;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const ok = gl.getProgramParameter(program, gl.LINK_STATUS) === true;

    if (!ok) {
        gl.deleteProgram(program);
        return null;
    }

    return program;
}

export function createTileForgeProgram(gl: TileForgeGL): TileForgeProgram | null {
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, TILE_FORGE_VERTEX_SHADER);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, TILE_FORGE_FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        return null;
    }

    const program = linkProgram(gl, vertexShader, fragmentShader);

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    if (!program) return null;

    const positionBuffer = gl.createBuffer();

    if (!positionBuffer) {
        gl.deleteProgram(program);
        return null;
    }

    const tileProgram: TileForgeProgram = {
        program,
        positionBuffer,
        attributeLocations: {
            position: gl.getAttribLocation(program, 'a_position'),
            local: gl.getAttribLocation(program, 'a_local'),
            kind: gl.getAttribLocation(program, 'a_kind'),
            color: gl.getAttribLocation(program, 'a_color'),
            opacity: gl.getAttribLocation(program, 'a_opacity'),
            radius: gl.getAttribLocation(program, 'a_radius'),
            softness: gl.getAttribLocation(program, 'a_softness'),
        },
        uniformLocations: {
            resolution: gl.getUniformLocation(program, 'u_resolution'),
        },
        dispose: () => {
            gl.deleteBuffer(positionBuffer);
            gl.deleteProgram(program);
        },
    };

    const requiredAttributes = Object.values(tileProgram.attributeLocations);
    const hasInvalidAttribute = requiredAttributes.some((location) => location < 0);

    if (hasInvalidAttribute) {
        tileProgram.dispose();
        return null;
    }

    return tileProgram;
}

export function uploadTileForgeVertices(
    gl: TileForgeGL,
    tileProgram: TileForgeProgram,
    vertices: Float32Array,
): void {
    const stride = 14 * Float32Array.BYTES_PER_ELEMENT;

    gl.useProgram(tileProgram.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, tileProgram.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);

    gl.enableVertexAttribArray(tileProgram.attributeLocations.position);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.position,
        2,
        gl.FLOAT,
        false,
        stride,
        0,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.local);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.local,
        2,
        gl.FLOAT,
        false,
        stride,
        2 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.kind);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.kind,
        1,
        gl.FLOAT,
        false,
        stride,
        4 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.color);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.color,
        4,
        gl.FLOAT,
        false,
        stride,
        5 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.opacity);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.opacity,
        1,
        gl.FLOAT,
        false,
        stride,
        9 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.radius);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.radius,
        1,
        gl.FLOAT,
        false,
        stride,
        10 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(tileProgram.attributeLocations.softness);
    gl.vertexAttribPointer(
        tileProgram.attributeLocations.softness,
        1,
        gl.FLOAT,
        false,
        stride,
        11 * Float32Array.BYTES_PER_ELEMENT,
    );
}