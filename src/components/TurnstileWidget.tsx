import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  onVerify: (token: string) => void;
  siteKey?: string;
}

export const TurnstileWidget: React.FC<TurnstileProps> = ({ onVerify, siteKey }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);

  // Keep the latest callback reference without triggering re-effects
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  const actualSiteKey = siteKey || import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (window.turnstile && containerRef.current && isMounted) {
        // Clear previous widget instance if any exists
        if (widgetIdRef.current) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch (e) {
            // Ignore reset errors during unmount/remount
          }
        }

        containerRef.current.innerHTML = ''; // Clear container DOM

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: actualSiteKey,
          callback: (token: string) => {
            if (onVerifyRef.current) {
              onVerifyRef.current(token);
            }
          },
        });
      }
    };

    // Auto-inject script if not already present on window
    if (!window.turnstile) {
      const scriptId = 'cf-turnstile-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      script.onload = () => {
        renderWidget();
      };
    } else {
      renderWidget();
    }

    return () => {
      isMounted = false;
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch (e) {
          // Ignore reset errors during cleanup
        }
      }
    };
  }, [actualSiteKey]);

  return (
    <div className="my-4">
      <div ref={containerRef} className="cf-turnstile"></div>
      {!import.meta.env.VITE_TURNSTILE_SITE_KEY && (
        <p className="text-[11px] text-gray-500 mt-1">
          * Cloudflare Turnstile operating in development mode.
        </p>
      )}
    </div>
  );
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}