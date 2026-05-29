/**
 * Hub + linehaul-route geometry for the interactive coverage map.
 * Coordinates are calibrated to the 890×762 SA map image
 * (public/images/coverage/south-africa-map.webp) and used as the SVG viewBox,
 * so an overlay at the image's rendered size aligns 1:1.
 */

export const MAP_VIEWBOX = { w: 890, h: 762 };

/** Central linehaul origin all primary routes radiate from. */
export const HUB_ORIGIN = { x: 618, y: 247 };

/** Interactive network hubs — one or more per province (all 9 covered). */
export const MAJOR_HUBS = [
  { name: 'Johannesburg', province: 'Gauteng',       x: 618, y: 247, hub: true },
  { name: 'Pretoria',     province: 'Gauteng',       x: 640, y: 216 },
  { name: 'Cape Town',    province: 'Western Cape',  x: 128, y: 688, major: true },
  { name: 'Durban',       province: 'KwaZulu-Natal', x: 793, y: 470, major: true },
  { name: 'Gqeberha',     province: 'Eastern Cape',  x: 540, y: 690, major: true },
  { name: 'East London',  province: 'Eastern Cape',  x: 608, y: 650 },
  { name: 'Bloemfontein', province: 'Free State',    x: 522, y: 410, major: true },
  { name: 'Polokwane',    province: 'Limpopo',       x: 700, y: 117 },
  { name: 'Mbombela',     province: 'Mpumalanga',    x: 793, y: 205 },
  { name: 'Kimberley',    province: 'Northern Cape', x: 455, y: 392 },
  { name: 'Mahikeng',     province: 'North West',    x: 490, y: 232 },
  { name: 'Richards Bay', province: 'KwaZulu-Natal', x: 790, y: 388 },
  { name: 'Pietermaritzburg', province: 'KwaZulu-Natal', x: 760, y: 423 },
  { name: 'Mthatha',      province: 'Eastern Cape',  x: 660, y: 553 },
  { name: 'Upington',     province: 'Northern Cape', x: 268, y: 372 },
  { name: 'Welkom',       province: 'Free State',    x: 558, y: 355 },
];

/**
 * Linehaul routes from the Johannesburg hub to major centres.
 * `primary` routes get bolder styling + a travelling flow pulse.
 */
export const LINEHAUL_ROUTES = [
  { to: 'Cape Town',    d: 'M618,247 Q360,440 128,688', primary: true },
  { to: 'Durban',       d: 'M618,247 Q740,320 793,470', primary: true },
  { to: 'Gqeberha',     d: 'M618,247 Q545,490 540,690', primary: true },
  { to: 'Bloemfontein', d: 'M618,247 Q558,325 522,410' },
  { to: 'Polokwane',    d: 'M618,247 Q672,170 700,117' },
  { to: 'Mbombela',     d: 'M618,247 Q725,205 793,205' },
  { to: 'East London',  d: 'M618,247 Q645,455 608,650' },
  { to: 'Kimberley',    d: 'M618,247 Q520,310 455,392' },
  { to: 'Upington',     d: 'M618,247 Q430,300 268,372' },
];
