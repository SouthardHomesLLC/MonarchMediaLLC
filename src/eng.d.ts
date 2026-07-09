// src/env.d.ts
interface Window {
    goatcounter?: {
        count: (options?: { path?: string; title?: string; referrer?: string }) => void;
        allow_local?: boolean;
    };
}