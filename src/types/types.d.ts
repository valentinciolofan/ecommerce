export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
}

export interface Collection {
  _id: string;
  _type: 'collection';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
}

export interface Product {
  _id: string;
  _type: 'product';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  categories: {
    _type: 'reference';
    _ref: string;
  };
  collection: {
    _type: 'reference';
    _ref: string;
  };
  price: number;
  images: Array<{
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  availability: boolean;
  description: string;
  color: string;
  sizes: Array<{
    size: string;
    stock: number;
  }>;
  material: string;
  rating: number;
}
