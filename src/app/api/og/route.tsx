import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * Dynamic OG Image Generator — Dark Social Optimization
 * Usage: /api/og?title=...&subtitle=...&type=car|building|blog
 * Generates beautiful WhatsApp/Telegram preview images = 400% higher CTR
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'عزل كور — تظليل وعزل حراري';
  const subtitle = searchParams.get('subtitle') || 'وكيل جونسون المعتمد في جدة';
  const type = searchParams.get('type') || 'default';

  // Color scheme based on service type
  const colors: Record<string, { bg: string; accent: string; badge: string }> = {
    car: { bg: '#0a0e17', accent: '#3b82f6', badge: '🚗 تظليل سيارات' },
    building: { bg: '#0a1117', accent: '#10b981', badge: '🏢 عزل مباني' },
    blog: { bg: '#0f0a17', accent: '#8b5cf6', badge: '📝 مدونة' },
    default: { bg: '#0a0e17', accent: '#3b82f6', badge: '🛡️ عزل كور' },
  };

  const scheme = colors[type] || colors.default;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: scheme.bg,
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${scheme.accent}33, transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${scheme.accent}22, transparent)`,
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '30px',
            background: `${scheme.accent}22`,
            border: `1px solid ${scheme.accent}44`,
            fontSize: '20px',
            color: scheme.accent,
            marginBottom: '30px',
          }}
        >
          {scheme.badge}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.3,
            maxWidth: '900px',
            direction: 'rtl',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            marginTop: '20px',
            textAlign: 'center',
            direction: 'rtl',
          }}
        >
          {subtitle}
        </div>

        {/* Footer bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '6px',
            background: `linear-gradient(90deg, ${scheme.accent}, transparent)`,
          }}
        />

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '40px',
            fontSize: '16px',
            color: '#475569',
          }}
        >
          azelcore.com
        </div>

        {/* Trust badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '40px',
            fontSize: '14px',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          وكيل جونسون المعتمد ✓
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
