// Patch window.fetch for React 19 in environments where it has only a getter
if (typeof window !== 'undefined') {
  const originalFetch = window.fetch;
  try {
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get() {
        return originalFetch;
      },
      set(val) {
        Object.defineProperty(window, 'fetch', {
          value: val,
          configurable: true,
          enumerable: true,
          writable: true
        });
      }
    });
  } catch (e) {
    console.error('Could not patch window.fetch', e);
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
