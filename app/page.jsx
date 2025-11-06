"use client";

import InstallPrompt from "../components/InstallPrompt";

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      padding: '24px',
      background: 'linear-gradient(135deg, #0ea5e9 0%, #22c55e 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: 24,
        width: 'min(680px, 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>Agentic Mobile App</h1>
        <p style={{ color: '#334155', lineHeight: 1.6 }}>
          Install this app on Android or iOS for a native-like experience. Works offline and runs fullscreen.
        </p>
        <InstallPrompt />
        <div style={{ marginTop: 16, color: '#475569' }}>
          <strong>iOS:</strong> Open in Safari ? Share ? Add to Home Screen.
        </div>
      </div>
      <footer style={{ color: 'white', opacity: 0.9 }}>
        v1.0 ? PWA-ready ? Offline support
      </footer>
    </main>
  );
}
