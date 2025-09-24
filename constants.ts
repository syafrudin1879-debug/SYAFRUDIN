import { InspectionItem, Condition } from './types';

export const INITIAL_INSPECTION_ITEMS: InspectionItem[] = [
  { id: 'pad-brake', name: 'Pad brake (Kampas Rem)', condition: Condition.UNCHECKED, image: null },
  { id: 'caliper', name: 'Caliper (Kaliper)', condition: Condition.UNCHECKED, image: null },
  { id: 'shim', name: 'Shim', condition: Condition.UNCHECKED, image: null },
  { id: 'pad-clip', name: 'Pad clip (Klip Pad)', condition: Condition.UNCHECKED, image: null },
  { id: 'mounting-bracket', name: 'Mounting bracket (Braket Pemasangan)', condition: Condition.UNCHECKED, image: null },
  { id: 'lock-pin', name: 'Lock pin (Pin Pengunci)', condition: Condition.UNCHECKED, image: null },
  { id: 'guide-pin', name: 'Guide pin (Pin Pemandu)', condition: Condition.UNCHECKED, image: null },
  { id: 'pin-boots', name: 'Pin boots (Karet Pin)', condition: Condition.UNCHECKED, image: null },
  { id: 'bleeder-screw', name: 'Bleeder screw (Baut Bleeder)', condition: Condition.UNCHECKED, image: null },
  { id: 'piston-seal', name: 'Piston seal (Segel Piston)', condition: Condition.UNCHECKED, image: null },
];