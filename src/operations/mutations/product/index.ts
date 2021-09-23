import { allProductsVar } from '../../../services/cache';
import getProduct from './getProduct';

export const allProductsMutations = {
    getProduct: getProduct(allProductsVar),
};
