export type CartItem = {
  id: number;
  city: string;
  imageUrl: string;
  destination: string;
  days: number;
  category: number[];
  info: number[];
  features: string[];
  price: number;
  rating: number;
  adultsCount: number;
  childrenCount: number;
  dateEntry: string;
  dateExit: string;
};

export interface CartSliceState {
  cartTours: CartItem[];
}
