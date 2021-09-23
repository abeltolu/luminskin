import { ReactiveVar } from '@apollo/client';
import { Product } from '../../../@types/Product';

export default function getProduct(allProductsVar: ReactiveVar<Product[]>) {
    return (id: number) => {
        const allProducts = allProductsVar();
        const product = allProducts.find((product) => product.id === id);
        return product;
    };
}
