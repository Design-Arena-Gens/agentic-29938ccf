"use client";

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream);

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const onInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    try {
      await deferredPrompt.userChoice;
    } finally {
      setDeferredPrompt(null);
      setCanInstall(false);
    }
  };

  if (isIOS) {
    return (
      <div style={{
        background: '#f1f5f9',
        padding: 12,
        borderRadius: 12,
        color: '#0f172a'
      }}>
        Open in Safari, tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.
      </div>
    );
  }

  if (!canInstall) {
    return (
      <div style={{ color: '#334155' }}>
        If supported, an install prompt will appear shortly.
      </div>
    );
  }

  return (
    <button onClick={onInstall}>
      Install app
    </button>
  );
}
