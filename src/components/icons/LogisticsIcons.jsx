import { Flaticon } from '@/components/ui/Flaticon';

const wrapClass = 'w-7 h-7';

export function IconNationwide() {
  return <Flaticon icon="deliveryService" className={wrapClass} alt="" />;
}

export function IconTracking() {
  return <Flaticon icon="deliveryStatus" className={wrapClass} alt="" />;
}

export function IconWarehouse() {
  return <Flaticon icon="loading" className={wrapClass} alt="" />;
}

export function IconFleet() {
  return <Flaticon icon="deliveryTruck" className={wrapClass} alt="" />;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LOGISTICS_ICONS = {
  nationwide: IconNationwide,
  tracking: IconTracking,
  warehouse: IconWarehouse,
  fleet: IconFleet,
};
