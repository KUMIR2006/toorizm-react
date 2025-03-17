export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  checkIn: string | null,
  checkOut: string | null,
  childrenCount: number | null,
  adultsCount: number | null,
}