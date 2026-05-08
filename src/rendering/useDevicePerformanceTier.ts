import { useEffect, useState } from 'react';
import {
    canUseDOM,
    getCappedDevicePixelRatio,
    getNavigatorDeviceMemory,
    getNavigatorHardwareConcurrency,
    getNavigatorSaveData,
} from '../superanimation/featureSupport';
import type { DevicePerformanceProfile, GraphicsPerformanceTier } from './renderingTypes';

function detectMobileLike(): boolean {
    if (!canUseDOM) return false;

    const coarsePointer = window.matchMedia?.('(pointer: coarse)').matches === true;
    const narrowViewport = window.innerWidth < 768;

    return coarsePointer || narrowViewport;
}

function computeTier(): GraphicsPerformanceTier {
    if (!canUseDOM) return 'medium';

    const cores = getNavigatorHardwareConcurrency();
    const memoryGb = getNavigatorDeviceMemory();
    const saveData = getNavigatorSaveData();
    const isMobileLike = detectMobileLike();
    const dpr = window.devicePixelRatio || 1;

    if (saveData) return 'low';
    if (cores <= 2) return 'low';
    if (memoryGb !== null && memoryGb <= 2) return 'low';
    if (isMobileLike && dpr >= 2.5) return 'low';
    if (isMobileLike) return 'medium';
    if (cores >= 8 && (memoryGb === null || memoryGb >= 8)) return 'high';

    return 'medium';
}

function readProfile(): DevicePerformanceProfile {
    const tier = computeTier();

    return {
        tier,
        dpr: canUseDOM ? window.devicePixelRatio || 1 : 1,
        cappedDpr: getCappedDevicePixelRatio(tier),
        cores: getNavigatorHardwareConcurrency(),
        memoryGb: getNavigatorDeviceMemory(),
        isMobileLike: detectMobileLike(),
        saveData: getNavigatorSaveData(),
    };
}

export function useDevicePerformanceTier(): DevicePerformanceProfile {
    const [profile, setProfile] = useState<DevicePerformanceProfile>(() => readProfile());

    useEffect(() => {
        if (!canUseDOM) return undefined;

        let frameId: number | null = null;

        const update = () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }

            frameId = window.requestAnimationFrame(() => {
                setProfile(readProfile());
                frameId = null;
            });
        };

        window.addEventListener('resize', update, { passive: true });
        window.addEventListener('orientationchange', update, { passive: true });

        return () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }

            window.removeEventListener('resize', update);
            window.removeEventListener('orientationchange', update);
        };
    }, []);

    return profile;
}