export enum Condition {
  BAIK = 'Baik',
  RUSAK_AUS = 'Rusak/Aus',
  UNCHECKED = 'Belum Diperiksa'
}

export interface InspectionItem {
  id: string;
  name: string;
  condition: Condition;
  image: string | null;
}