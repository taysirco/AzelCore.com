/**
 * fetchGoogleReviews — ISR-compatible Google Places API fetcher
 * 
 * Fetches reviews from Google Places API with 24h ISR revalidation.
 * Falls back to hardcoded testimonials if API key is not configured.
 * 
 * Environment: GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID
 */

export interface GoogleReview {
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription: string;
  profilePhotoUrl: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
  source: 'google-api' | 'fallback';
}

// Fallback testimonials (real data from GBP)
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: 'عبدالله الشهري',
    rating: 5,
    text: 'تظليل نانو سيراميك ممتاز — الحرارة انخفضت بشكل واضح. فريق محترف وسعر معقول.',
    relativeTimeDescription: 'قبل شهر',
    profilePhotoUrl: '',
  },
  {
    authorName: 'سلطان الحربي',
    rating: 5,
    text: 'عزلنا واجهات الفلة بالكامل — فاتورة الكهرباء نزلت 35%. شغل نظيف وضمان 15 سنة.',
    relativeTimeDescription: 'قبل أسبوعين',
    profilePhotoUrl: '',
  },
  {
    authorName: 'فيصل العمري',
    rating: 5,
    text: 'وكيل جونسون و 3M المعتمد في جدة. جربت محلات كثير قبلهم — الفرق واضح في الجودة.',
    relativeTimeDescription: 'قبل 3 أسابيع',
    profilePhotoUrl: '',
  },
  {
    authorName: 'خالد المالكي',
    rating: 4,
    text: 'شغل ممتاز وأسعار منافسة. الموعد كان دقيق والتركيب احترافي.',
    relativeTimeDescription: 'قبل شهرين',
    profilePhotoUrl: '',
  },
  {
    authorName: 'أحمد الزهراني',
    rating: 5,
    text: 'ظللت سيارتي 3M كريستلاين — الرؤية الليلية ممتازة والحرارة اختفت تقريباً.',
    relativeTimeDescription: 'قبل شهر',
    profilePhotoUrl: '',
  },
];

export async function fetchGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If API credentials not set, use fallback
  if (!apiKey || !placeId) {
    const avg = FALLBACK_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / FALLBACK_REVIEWS.length;
    return {
      reviews: FALLBACK_REVIEWS,
      averageRating: Math.round(avg * 10) / 10,
      totalReviews: 127, // Known GBP count
      source: 'fallback',
    };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=ar&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // ISR: revalidate every 24 hours
    });

    if (!res.ok) throw new Error(`Places API HTTP ${res.status}`);

    const data = await res.json();
    const result = data.result;

    if (!result?.reviews) throw new Error('No reviews in response');

    const reviews: GoogleReview[] = result.reviews.map((r: Record<string, unknown>) => ({
      authorName: r.author_name as string,
      rating: r.rating as number,
      text: r.text as string,
      relativeTimeDescription: r.relative_time_description as string,
      profilePhotoUrl: (r.profile_photo_url as string) || '',
    }));

    return {
      reviews,
      averageRating: result.rating || 4.9,
      totalReviews: result.user_ratings_total || 127,
      source: 'google-api',
    };
  } catch (error) {
    console.error('[fetchGoogleReviews] Failed, using fallback:', error);
    const avg = FALLBACK_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / FALLBACK_REVIEWS.length;
    return {
      reviews: FALLBACK_REVIEWS,
      averageRating: Math.round(avg * 10) / 10,
      totalReviews: 127,
      source: 'fallback',
    };
  }
}
