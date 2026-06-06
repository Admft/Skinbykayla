import { formatDuration, formatMoney, services, type Service } from './business';

export type AddOn = {
  slug: string;
  name: string;
  price: number;
  durationMinutes: number;
  summary: string;
};

export type BookingExtra = {
  slug: string;
  name: string;
  price: number;
  durationMinutes: number;
  summary: string;
  kind: 'addon' | 'service';
};

export type ServiceAddOnPairing = {
  hint: string;
  slugs: Array<{ kind: 'addon' | 'service'; slug: string }>;
};

export const addOnIntro =
  'Want to personalize your appointment? These gentle add-ons are available to help soothe, smooth, or complete your service. No pressure — choose only what feels right for you.';

export const addOnPageIntro =
  'Sometimes the smallest details make the appointment feel complete. SkinByKaylaa offers optional add-ons designed to soothe freshly waxed skin, refresh your glow, define your brows, or help with smoother maintenance between visits. Not sure what to choose? Kaylaa can always help recommend what fits your skin, your comfort level, and your appointment.';

export const makeItYoursCopy =
  'Every appointment is different. Before checkout, you will have the option to add small comfort-focused upgrades like a cooling mask, post-wax calming care, brow tinting, or a quick glow facial. Add-ons are completely optional and can help your visit feel more personalized.';

export const addOns: AddOn[] = [
  {
    slug: 'calming-post-wax',
    name: 'Calming Post-Wax Treatment',
    price: 12,
    durationMinutes: 10,
    summary: 'A quick soothing finish after waxing to help calm the skin and reduce that freshly-waxed feeling.'
  },
  {
    slug: 'cooling-jelly-mask',
    name: 'Cooling Jelly Mask',
    price: 15,
    durationMinutes: 10,
    summary: 'A soothing mask added after waxing or facial care to help calm the skin and leave the area feeling cool and comfortable.'
  },
  {
    slug: 'ingrown-hair-care',
    name: 'Ingrown Hair Care Add-On',
    price: 18,
    durationMinutes: 10,
    summary: 'Gentle cleansing, skin-smoothing care, and aftercare guidance for areas prone to bumps or ingrown hairs.'
  },
  {
    slug: 'gentle-exfoliation',
    name: 'Gentle Exfoliation Add-On',
    price: 20,
    durationMinutes: 15,
    summary: 'A soft exfoliating treatment to help smooth texture and prep the skin for a cleaner, fresher finish.'
  },
  {
    slug: 'mini-glow-facial',
    name: 'Mini Glow Facial Add-On',
    price: 35,
    durationMinutes: 25,
    summary: 'A quick refresh with cleanse, light exfoliation, soothing mask, and finishing products for soft, calm, fresh skin.'
  },
  {
    slug: 'brow-tint-addon',
    name: 'Brow Tint Add-On',
    price: 15,
    durationMinutes: 15,
    summary: 'Add soft color and definition to your brows for a fuller, more polished look without daily makeup.'
  },
  {
    slug: 'brow-mapping',
    name: 'Brow Mapping Add-On',
    price: 10,
    durationMinutes: 10,
    summary: 'A detailed brow-shaping guide based on your natural features for a balanced, flattering shape.'
  },
  {
    slug: 'brow-conditioning',
    name: 'Brow Conditioning Finish',
    price: 8,
    durationMinutes: 5,
    summary: 'A nourishing brow finish to help your brows look soft, polished, and healthy after shaping or tinting.'
  },
  {
    slug: 'lash-conditioning',
    name: 'Lash Conditioning Treatment',
    price: 10,
    durationMinutes: 5,
    summary: 'A nourishing finish added after lash services to help lashes feel soft and cared for.'
  },
  {
    slug: 'lip-wax-addon',
    name: 'Lip Wax Add-On',
    price: 10,
    durationMinutes: 10,
    summary: 'A quick upper-lip wax for a smooth, clean finish.'
  },
  {
    slug: 'chin-wax-addon',
    name: 'Chin Wax Add-On',
    price: 10,
    durationMinutes: 10,
    summary: 'A quick chin clean-up that pairs well with other facial waxing services.'
  },
  {
    slug: 'happy-trail',
    name: 'Happy Trail Add-On',
    price: 10,
    durationMinutes: 10,
    summary: 'A quick clean-up for the lower stomach area.'
  },
  {
    slug: 'inner-thigh',
    name: 'Inner Thigh Add-On',
    price: 15,
    durationMinutes: 10,
    summary: 'A small-area clean-up to create a smoother finish around the bikini or Brazilian wax area.'
  },
  {
    slug: 'underarm-brightening',
    name: 'Brightening Underarm Treatment',
    price: 20,
    durationMinutes: 15,
    summary: 'A gentle underarm care add-on focused on smoothing, refreshing, and supporting a more even-looking underarm area.'
  },
  {
    slug: 'hand-foot-wax',
    name: 'Hand or Foot Wax Add-On',
    price: 12,
    durationMinutes: 10,
    summary: 'A quick detail wax for the tops of the hands or feet.'
  },
  {
    slug: 'neck-cleanup',
    name: 'Neck Clean-Up Add-On',
    price: 12,
    durationMinutes: 10,
    summary: 'Removes unwanted hair around the neck area for a clean, polished finish.'
  }
];

const addOnMap = new Map(addOns.map((item) => [item.slug, item]));
const serviceMap = new Map(services.map((item) => [item.slug, item]));

const pairings: Record<string, ServiceAddOnPairing> = {
  'brow-wax': {
    hint: 'Complete the look with a soft tint, a little facial clean-up, or a calming finish.',
    slugs: [
      { kind: 'addon', slug: 'brow-tint-addon' },
      { kind: 'addon', slug: 'brow-mapping' },
      { kind: 'addon', slug: 'lip-wax-addon' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  'brow-wax-tint': {
    hint: 'You are already getting polished brows — these small add-ons help finish the look.',
    slugs: [
      { kind: 'addon', slug: 'brow-conditioning' },
      { kind: 'addon', slug: 'lip-wax-addon' },
      { kind: 'addon', slug: 'chin-wax-addon' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  'brow-shaping': {
    hint: 'A few gentle extras can help your brows feel more defined and polished.',
    slugs: [
      { kind: 'addon', slug: 'brow-tint-addon' },
      { kind: 'addon', slug: 'brow-mapping' },
      { kind: 'addon', slug: 'brow-conditioning' },
      { kind: 'addon', slug: 'lip-wax-addon' }
    ]
  },
  'brow-tint': {
    hint: 'Optional extras to help your brows look softer and more finished.',
    slugs: [
      { kind: 'addon', slug: 'brow-mapping' },
      { kind: 'addon', slug: 'brow-conditioning' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  'lash-lift-tint': {
    hint: 'Pair your lifted lashes with brows or a quick skin refresh for a low-maintenance glow.',
    slugs: [
      { kind: 'addon', slug: 'lash-conditioning' },
      { kind: 'service', slug: 'brow-wax' },
      { kind: 'addon', slug: 'brow-tint-addon' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  'brazilian-wax': {
    hint: 'Add a little extra comfort or detail work to leave feeling smoother and more cared for.',
    slugs: [
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'ingrown-hair-care' },
      { kind: 'addon', slug: 'happy-trail' },
      { kind: 'addon', slug: 'inner-thigh' }
    ]
  },
  'bikini-wax': {
    hint: 'Add a little extra comfort or detail work to leave feeling smoother and more cared for.',
    slugs: [
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'ingrown-hair-care' },
      { kind: 'addon', slug: 'happy-trail' },
      { kind: 'addon', slug: 'inner-thigh' }
    ]
  },
  'underarm-wax': {
    hint: 'A few quick options to help underarms feel calm, smooth, and refreshed.',
    slugs: [
      { kind: 'addon', slug: 'underarm-brightening' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'ingrown-hair-care' }
    ]
  },
  'full-leg-wax': {
    hint: 'Finish your smooth-skin appointment with a little polish or extra comfort.',
    slugs: [
      { kind: 'addon', slug: 'gentle-exfoliation' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'hand-foot-wax' },
      { kind: 'service', slug: 'bikini-wax' },
      { kind: 'service', slug: 'underarm-wax' }
    ]
  },
  'half-leg-wax': {
    hint: 'Finish your smooth-skin appointment with a little polish or extra comfort.',
    slugs: [
      { kind: 'addon', slug: 'gentle-exfoliation' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'hand-foot-wax' },
      { kind: 'service', slug: 'underarm-wax' }
    ]
  },
  'full-arm-wax': {
    hint: 'A few gentle extras can help your arms feel smoother and more refreshed.',
    slugs: [
      { kind: 'addon', slug: 'gentle-exfoliation' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'hand-foot-wax' },
      { kind: 'service', slug: 'underarm-wax' }
    ]
  },
  'half-arm-wax': {
    hint: 'A few gentle extras can help your arms feel smoother and more refreshed.',
    slugs: [
      { kind: 'addon', slug: 'gentle-exfoliation' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'hand-foot-wax' },
      { kind: 'service', slug: 'underarm-wax' }
    ]
  },
  'back-waxing': {
    hint: 'Optional detail work or soothing care to help your appointment feel more complete.',
    slugs: [
      { kind: 'addon', slug: 'gentle-exfoliation' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'neck-cleanup' },
      { kind: 'service', slug: 'stomach-waxing' }
    ]
  },
  'full-face-wax': {
    hint: 'Add a soothing finish or a quick glow treatment after your facial waxing service.',
    slugs: [
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'mini-glow-facial' },
      { kind: 'addon', slug: 'brow-tint-addon' }
    ]
  },
  'stomach-waxing': {
    hint: 'Optional soothing care to help your skin feel calm and comfortable after waxing.',
    slugs: [
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'happy-trail' }
    ]
  }
};

const categoryFallbacks: Record<Service['category'], ServiceAddOnPairing> = {
  Brows: {
    hint: 'A few gentle extras can help personalize your brow appointment.',
    slugs: [
      { kind: 'addon', slug: 'brow-mapping' },
      { kind: 'addon', slug: 'brow-conditioning' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  Lashes: {
    hint: 'Pair your lash service with a quick refresh or brow polish.',
    slugs: [
      { kind: 'addon', slug: 'lash-conditioning' },
      { kind: 'addon', slug: 'brow-tint-addon' },
      { kind: 'addon', slug: 'mini-glow-facial' }
    ]
  },
  Waxing: {
    hint: 'Optional comfort-focused extras for a calmer, smoother finish.',
    slugs: [
      { kind: 'addon', slug: 'calming-post-wax' },
      { kind: 'addon', slug: 'cooling-jelly-mask' },
      { kind: 'addon', slug: 'ingrown-hair-care' }
    ]
  }
};

function resolveExtra(ref: { kind: 'addon' | 'service'; slug: string }): BookingExtra | null {
  if (ref.kind === 'addon') {
    const addOn = addOnMap.get(ref.slug);
    if (!addOn) return null;
    return { ...addOn, kind: 'addon' };
  }

  const service = serviceMap.get(ref.slug);
  if (!service) return null;
  return {
    slug: service.slug,
    name: service.name,
    price: service.price,
    durationMinutes: service.durationMinutes,
    summary: service.summary,
    kind: 'service'
  };
}

export function getExtrasForService(serviceSlug: string): { hint: string; items: BookingExtra[] } {
  const service = serviceMap.get(serviceSlug);
  const pairing = pairings[serviceSlug] ?? (service ? categoryFallbacks[service.category] : null);

  if (!pairing) {
    return { hint: '', items: [] };
  }

  const items = pairing.slugs
    .map(resolveExtra)
    .filter((item): item is BookingExtra => item !== null)
    .slice(0, 5);

  return { hint: pairing.hint, items };
}

export function getClientPairingData() {
  return Object.fromEntries(
    services.map((service) => {
      const { hint, items } = getExtrasForService(service.slug);
      return [
        service.slug,
        {
          hint,
          serviceName: service.name,
          items: items.map((item) => ({
            slug: item.slug,
            kind: item.kind,
            name: item.name,
            price: item.price,
            priceLabel: formatMoney(item.price),
            durationLabel: formatDuration(item.durationMinutes),
            summary: item.summary
          }))
        }
      ];
    })
  );
}
