import type { SuperAnimationCleanup } from './types';
import { canUseDOM } from './featureSupport';

function reconcileIndices(parent: Element): void {
    const children = parent.children;
    const total = children.length;
    const totalText = String(total);

    for (let i = 0; i < total; i += 1) {
        const child = children[i] as HTMLElement;
        const indexText = String(i + 1);

        if (child.style.getPropertyValue('--index') !== indexText) {
            child.style.setProperty('--index', indexText);
        }

        if (child.style.getPropertyValue('--count') !== totalText) {
            child.style.setProperty('--count', totalText);
        }
    }
}

export function enableReactiveIndexing(selector = '[data-sa-stagger-list]'): SuperAnimationCleanup {
    if (!canUseDOM) return () => { };

    const containers = Array.from(document.querySelectorAll(selector));
    const observer = new MutationObserver((records) => {
        const dirtyParents = new Set<Element>();

        records.forEach((record) => {
            if (record.type === 'childList' && record.target instanceof Element) {
                dirtyParents.add(record.target);
            }
        });

        dirtyParents.forEach(reconcileIndices);
    });

    containers.forEach((container) => {
        reconcileIndices(container);

        observer.observe(container, {
            childList: true,
            subtree: false,
        });
    });

    return () => observer.disconnect();
}

export const ReactiveIndexer = {
    enableReactiveIndexing,
};