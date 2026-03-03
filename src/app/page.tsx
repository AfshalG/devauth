export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#a855f7' }}>🔒</span> DevAuth
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</a>
        </div>
        <a href="/login" style={{ padding: '8px 20px', fontSize: '14px', background: '#a855f7', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Sign In</a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '120px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 24px' }}>
          Auth for developers,<br />by developers
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 40px' }}>
          Add Google, GitHub, and email authentication to any app in under 5 minutes. No complexity, no vendor lock-in.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="/login" style={{ padding: '12px 28px', background: '#a855f7', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Try It Now</a>
          <a href="#" style={{ padding: '12px 28px', background: '#1a1a1a', color: '#ccc', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, border: '1px solid #333' }}>View Docs</a>
        </div>
      </section>

      {/* Provider logos */}
      <section style={{ textAlign: 'center', padding: '40px 24px 80px' }}>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '2px' }}>Supported Providers</p>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', fontSize: '16px', color: '#666' }}>
          <span>🌐 Google</span>
          <span>🐙 GitHub</span>
          <span>📧 Email/Password</span>
          <span>🎭 SAML SSO</span>
          <span>🔑 API Keys</span>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 DevAuth. Authentication made simple.
      </footer>
    </div>
  );
}
