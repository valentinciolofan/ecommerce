export interface Category {
    _id: string;
    _type: 'category';
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    description?: string;
    parentCategory?: {
      _type: 'reference';
      _ref: string;
    };
  }
  
  export interface Product {
    _id: string;
    _type: 'product';
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    category: {
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
    availability: boolean;
    color: string;
    size: string;
    material: string;
    rating: number;
  }
  