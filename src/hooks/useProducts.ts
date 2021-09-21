import { useQuery, gql } from '@apollo/client';
import { Query, Currency } from '../@types/Product';
import { apolloClient } from '../services/apollo';

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

const READ_PRODUCT = gql`
    fragment ProductItem on Product {
        id
        title
        image_url
    }
`;

interface IUseProductsProps {
    currency: keyof typeof Currency;
}
export function useProducts({ currency }: IUseProductsProps) {
    const { data, loading, error } = useQuery<Query>(PRODUCTS_QUERY, {
        variables: { currency: currency },
    });
    return { data, loading, error };
}

interface IUseProductProps {
    productId: number;
}
export function useProduct({ productId }: IUseProductProps) {
    try {
        const data = apolloClient.readFragment({
            id: `Product:${productId}`,
            fragment: READ_PRODUCT,
        });
        return { data };
    } catch (error) {
        return { data: null };
    }
}
