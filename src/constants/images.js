/**
 * Single source of truth for static image URLs (served from /public/images).
 */

const base = '/images'

export const BRAND = {
  /** Full-color logo for light backgrounds (mobile menu, print) */
  logoHeader: `${base}/brand/epx-courier-services.webp`,
  /** Light/white logo mark for dark backgrounds (nav, footer, loader) */
  logoOnDark: `${base}/brand/epx-logo.webp`,
  logoFooter: `${base}/brand/epx-logo.webp`,
}

export const HERO = {
  background: `${base}/hero/hero-fleet.webp`,
  backgroundMobile: `${base}/hero/hero-fleet-mobile.webp`,
}

export const SERVICES = {
  parcelDelivery: `${base}/services/parcel-delivery.webp`,
  bulkFreight: `${base}/services/bulk-freight.webp`,
  operationsHub: `${base}/services/operations-hub.webp`,
}

export const FEATURES = {
  linehaul: `${base}/features/linehaul-network.webp`,
  managedFleet: `${base}/features/managed-fleet.webp`,
  tracking: `${base}/features/tracking-technology.webp`,
  warehousing: `${base}/features/warehousing-hub.webp`,
}

export const WHY = {
  freightTruck: `${base}/why/freight-truck.webp`,
}

export const PORTFOLIO = {
  case13: `${base}/portfolio/case-13.webp`,
  case115: `${base}/portfolio/case-115.webp`,
  operations11: `${base}/portfolio/operations-11.webp`,
}

export const GALLERY = [
  { src: `${base}/gallery/depot-operations.webp`, label: 'Depot Operations', caption: 'FLEET OPS', aspect: 'portrait' },
  { src: `${base}/gallery/team-collaboration.webp`, label: 'Team Collaboration', caption: 'LAST-MILE', aspect: 'portrait' },
  { src: `${base}/gallery/sorting-center.webp`, label: 'Sorting Center', caption: 'SORTATION', aspect: 'landscape' },
  { src: `${base}/gallery/customer-service.webp`, label: 'Customer Service', caption: 'HUB OPS', aspect: 'portrait' },
  { src: `${base}/gallery/loading-dock.webp`, label: 'Loading Dock', caption: 'COLLECTION', aspect: 'portrait' },
]

export const COVERAGE = {
  map: `${base}/coverage/south-africa-map.webp`,
}
