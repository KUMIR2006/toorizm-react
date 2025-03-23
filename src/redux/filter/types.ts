export interface FilterSliceState {
  searchValue: string;
  categoryId: number | null;
  checkIn: string | null,
  checkOut: string | null,
  childrenCount: number,
  adultsCount: number,
}