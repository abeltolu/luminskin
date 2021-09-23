import { ReactiveVar } from '@apollo/client';
import { CurrencyType } from '../../../@types/Product';

export default function updateCurrency(currencyVar: ReactiveVar<CurrencyType>) {
    return (currency: CurrencyType) => {
        currencyVar(currency);
    };
}
