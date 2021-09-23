import { useQuery, gql, useApolloClient } from '@apollo/client';
import { Query, CurrencyType, Product } from '../@types/Product';
import { useCurrency } from './useCurrency';

//Get All Products from Server
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
interface IUseProductsProps {
    currency: CurrencyType;
}
export function useProducts({ currency }: IUseProductsProps) {
    const { data, loading, error } = useQuery<Query>(PRODUCTS_QUERY, {
        variables: { currency: currency },
    });
    console.log({ data });
    return { data, loading, error };
}

//Get Cached Product By ID
const READ_PRODUCT = gql`
    fragment ProductItem on Product {
        id
        title
        image_url
        price(currency: $currency)
    }
`;

interface IUseProductProps {
    productId: number;
}
export function useProduct({ productId }: IUseProductProps) {
    const apolloClient = useApolloClient();
    const { currency } = useCurrency();
    const data = apolloClient.readFragment({
        id: `Product:${productId}`,
        fragment: READ_PRODUCT,
        variables: {
            currency,
        },
    }) as Product;
    return { data };
}
