import Link from 'next/link';

interface SiloNavProps {
  items: { id: string; nameAr: string }[];
  currentId: string;
  basePath: string;
  label: string;
}

/**
 * SiloNav — Intra-silo contextual links for pSEO pages.
 * Connects sibling pages within the same silo (districts or cities)
 * to distribute PageRank and signal topical authority to crawlers.
 */
export default function SiloNav({ items, currentId, basePath, label }: SiloNavProps) {
  const siblings = items.filter(item => item.id !== currentId);
  if (siblings.length === 0) return null;

  return (
    <nav
      aria-label={label}
      data-nosnippet
      style={{
        padding: 'var(--space-6)',
        margin: 'var(--space-4) auto',
        maxWidth: 'var(--max-width)',
      }}
    >
      <p style={{
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text-muted)',
        marginBottom: 'var(--space-3)',
        textAlign: 'center',
      }}>
        {label}
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'var(--space-2)',
      }}>
        {siblings.map(item => (
          <Link
            key={item.id}
            href={`${basePath}/${item.id}`}
            style={{
              padding: 'var(--space-2) var(--space-4)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {item.nameAr}
          </Link>
        ))}
      </div>
    </nav>
  );
}
