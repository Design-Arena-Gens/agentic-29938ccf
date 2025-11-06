export default function OfflinePage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: '#0ea5e9'
    }}>
      <div style={{ background: 'white', borderRadius: 16, padding: 24, width: 'min(680px, 100%)' }}>
        <h1 style={{ marginTop: 0 }}>You are offline</h1>
        <p style={{ color: '#334155' }}>No internet connection detected. You can continue using the app; changes will sync when you are back online.</p>
      </div>
    </main>
  );
}
