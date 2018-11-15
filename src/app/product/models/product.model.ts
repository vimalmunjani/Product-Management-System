export interface Product {
    productId: number;
    productName: string;
    productCode: string;
    category: string;
    tags?: string[];
    releaseDate: string;
    price: number;
    description: string;
    available: number;
    starRating: number;
    imageUrl: string;
}