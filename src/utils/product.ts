import { CurrencyType } from '../@types/Product';

export const formatPriceByCurrency = (
    price: number,
    currency: CurrencyType
) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        currencyDisplay: 'code',
    }).format(price);
};
