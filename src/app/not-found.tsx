import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--space-8)',
    }}>
      <h1 style={{
        fontSize: 'var(--text-8xl)',
        fontWeight: 800,
        fontFamily: 'var(--font-en)',
        background: 'linear-gradient(135deg, var(--primary-light), var(--secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: 'var(--space-4)',
      }}>
        404
      </h1>
      <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
        الصفحة غير موجودة
      </h2>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: 500 }}>
        الصفحة اللي تبحث عنها ممكن تكون انحذفت أو الرابط غلط.
      </p>
      <Link href="/" style={{
        padding: 'var(--space-4) var(--space-8)',
        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
        color: 'white',
        borderRadius: 'var(--radius-lg)',
        fontWeight: 700,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}>
        ← ارجع للرئيسية
      </Link>
    </main>
  );
}
