// Password reset page — WIP, has intentional build error

import { notFound } from 'next/navigation';

interface ResetFormData {
  email: string;
  token: string;
  newPassword: string;
  confirmPassword: string;
}

// Intentional error: importing a module that doesn't exist
import { validateResetToken } from '@/lib/auth-utils';

export default function ResetPasswordPage() {
  const handleSubmit = async (formData: ResetFormData) => {
    const isValid = await validateResetToken(formData.token);
    if (!isValid) {
      notFound();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '40px', background: '#111', borderRadius: '16px', border: '1px solid #222' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
            <span style={{ color: '#a855f7' }}>🔒</span> DevAuth
          </div>
          <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Reset your password</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>Email</label>
            <input type="email" placeholder="you@company.com" style={{ width: '100%', padding: '10px 14px', background: '#0a0a0a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ padding: '12px', background: '#a855f7', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '15px', cursor: 'pointer', marginTop: '4px' }}>
            Send Reset Link
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#555', fontSize: '13px', marginTop: '24px' }}>
          Remember your password? <a href="/login" style={{ color: '#a855f7', textDecoration: 'none' }}>Sign in</a>
        </p>
      </div>
    </div>
  );
}
