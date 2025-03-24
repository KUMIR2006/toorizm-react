export interface FilterSliceState {
  searchValue: string;
  categoryId: number | null;
  checkIn: Date | null,
  checkOut: Date | null,
  childrenCount: number,
  adultsCount: number,
}