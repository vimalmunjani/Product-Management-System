export interface Product {
    productId: string;
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