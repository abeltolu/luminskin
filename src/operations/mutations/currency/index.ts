import { currencyVar } from '../../../services/cache';
import updateCurrency from './updateCurrency';

export const currencyMutations = {
    updateCurrency: updateCurrency(currencyVar),
};
