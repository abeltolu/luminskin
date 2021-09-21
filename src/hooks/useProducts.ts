import { useQuery, gql } from '@apollo/client';
import { Query, Currency } from '../@types/Product';

const PRODUCTS_QUERY = gql`
    query GetProducts($currency: Currency!) {
        products {
            id
            title
            image_url
            price(currency: $currency)
            product_options {
                title
                prefix
                suffix
                options {
                    id
                    value
                }
            }
        }
    }
`;

interface IProps {
    currency: keyof typeof Currency;
}
export function useProducts({ currency }: IProps) {
    const { data, loading, error } = useQuery<Query>(PRODUCTS_QUERY, {
        variables: { currency: currency },
    });
    return { data, loading, error };
}
