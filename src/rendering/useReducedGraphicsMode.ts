import { useEffect, useState } from 'react';
import { canUseDOM, getNavigatorSaveData, prefersReducedMotion } from '../superanimation/featureSupport';
import type {
    GraphicsPerformanceTier,
    ReducedGraphicsReason,
    ReducedGraphicsState,
} from './renderingTypes';

function resolveReason(tier?: GraphicsPerformanceTier): ReducedGraphicsReason {
    if (prefersReducedMotion()) return 'prefers-reduced-motion';
    if (getNavigatorSaveData()) return 'save-data';
    if (tier === 'low') return 'low-tier';

    return 'none';
}

function readState(tier?: GraphicsPerformanceTier): ReducedGraphicsState {
    const reason = resolveReason(tier);
    const reducedMotion = prefersReducedMotion();
    const saveData = getNavigatorSaveData();

    return {
        reducedGraphics: reason !== 'none',
        reason,
        prefersReducedMotion: reducedMotion,
        saveData,
    };
}

export function useReducedGraphicsMode(tier?: GraphicsPerformanceTier): ReducedGraphicsState {
    const [state, setState] = useState<ReducedGraphicsState>(() => readState(tier));

    useEffect(() => {
        if (!canUseDOM) {
            setState(readState(tier));
            return undefined;
        }

        const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');

        const update = () => {
            setState(readState(tier));
        };

        update();

        mediaQuery?.addEventListener?.('change', update);

        return () => {
            mediaQuery?.removeEventListener?.('change', update);
        };
    }, [tier]);

    return state;
}