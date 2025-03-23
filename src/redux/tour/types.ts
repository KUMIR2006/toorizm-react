export type Tour = {
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
  // "imageUrl": "",
  //   "destination": "Швейцарские Альпы",
  //   "days": 3,
  //   "category": ["Горы", "Лыжи"],
  //   "info": {
  //     "перелеты": 2,
  //     "отели": 1,
  //     "трансферы": 2,
  //     "мероприятия": 4
  //   },
  //   "features": [
  //     "Тур комбо с трансфером из аэропорта",
  //     "Обзорная экскурсия по городу",
  //     "Любопытный уголок"
  //   ],
  //   "price": 88952,
  //   "rating": 4.7,
  //   "adultsCount": 2,
  //   "childrenCount": 1
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type SearchTourParams = {
  adults: string; 
  children: string; 
  category: string; 
  search: string;
}

export interface TourSliceState{
  items: Tour[];
  status: Status;
}
