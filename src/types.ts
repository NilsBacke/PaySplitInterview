export interface IItem {
  name: string;
  url: string;
  alias: string;
  image_url: string;
  review_count: number;
  rating: number;
  price: string;
  categories: ICategory[];
  location: {
    address1: string;
    city: string;
  };
}

interface ICategory {
  alias: string;
  title: string;
}
