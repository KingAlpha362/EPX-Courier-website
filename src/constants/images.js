/**
 * Single source of truth for static image URLs (served from /public/images).
 */

const base = '/images'

export const BRAND = {
  /** Full-color logo for light backgrounds (mobile menu, print) */
  logoHeader: `${base}/brand/epx-courier-services.png`,
  /** Light/white logo mark for dark backgrounds (nav, footer, loader) */
  logoOnDark: `${base}/brand/epx-logo.png`,
  logoFooter: `${base}/brand/epx-logo.png`,
}

export const HERO = {
  background: `${base}/hero/hero-fleet.jpg`,
}

export const SERVICES = {
  parcelDelivery: `${base}/services/parcel-delivery.jpeg`,
  bulkFreight: `${base}/services/bulk-freight.jpeg`,
  operationsHub: `${base}/services/operations-hub.jpeg`,
}

export const FEATURES = {
  linehaul: `${base}/features/linehaul-network.jpg`,
  managedFleet: `${base}/features/managed-fleet.jpeg`,
  tracking: `${base}/features/tracking-technology.jpeg`,
  warehousing: `${base}/features/warehousing-hub.jpg`,
}

export const WHY = {
  freightTruck: `${base}/why/freight-truck.jpeg`,
}

export const PORTFOLIO = {
  case13: `${base}/portfolio/case-13.jpg`,
  case115: `${base}/portfolio/case-115.jpg`,
  operations11: `${base}/portfolio/operations-11.jpg`,
}

export const GALLERY = [
  { src: `${base}/gallery/depot-operations.jpg`, label: 'Depot Operations', caption: 'FLEET OPS', aspect: 'portrait' },
  { src: `${base}/gallery/team-collaboration.jpg`, label: 'Team Collaboration', caption: 'LAST-MILE', aspect: 'portrait' },
  { src: `${base}/gallery/sorting-center.jpg`, label: 'Sorting Center', caption: 'SORTATION', aspect: 'landscape' },
  { src: `${base}/gallery/customer-service.jpg`, label: 'Customer Service', caption: 'HUB OPS', aspect: 'portrait' },
  { src: `${base}/gallery/loading-dock.jpg`, label: 'Loading Dock', caption: 'COLLECTION', aspect: 'portrait' },
]

export const COVERAGE = {
  map: `${base}/coverage/south-africa-map.png`,
}
