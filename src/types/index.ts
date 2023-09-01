export interface Product {
    id: number;
    title: string;
    description: string;
    image_url: string;
    price: number;
}

export interface ProductsState {
    products: Product[]
}

export interface RootState {
    
}