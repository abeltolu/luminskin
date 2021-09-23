import { useReactiveVar } from '@apollo/client';
import { Currency } from '../@types/Product';
import { currencyMutations } from '../operations/mutations/currency';
import { currencyVar } from '../services/cache';

export function useCurrency() {
    const currency = useReactiveVar(currencyVar);
    const currenciesMap = Object.keys(Currency).map((cur) => ({
        label: cur,
        value: cur,
    }));
    return { currency, currenciesMap, ...currencyMutations };
}
