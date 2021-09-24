import { useQuery, gql, useReactiveVar } from '@apollo/client';
import { Query, CurrencyType } from '../@types/Product';
import { allProductsVar } from '../services/cache';

//Get All Products from Server
const ProductDetails = gql`
    {
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
`;
const PRODUCTS_QUERY = gql`
    query GetProducts($currency: Currency!) {
        products ${ProductDetails}
    }
`;
interface IUseProductsProps {
    currency: CurrencyType;
}
export function useProducts({ currency }: IUseProductsProps) {
    const allProducts = allProductsVar();
    const { data, loading, error } = useQuery<Query>(PRODUCTS_QUERY, {
        variables: { currency: currency },
        onCompleted: (data) => {
            //save all products for easy reference and to avoid UI refresh
            allProductsVar(data?.products);
        },
    });
    return {
        data: !!data?.products ? data.products : allProducts,
        loading,
        error,
    };
}

//Get Cached Product By ID
/*const READ_PRODUCT = gql`
    fragment ProductItem on Product ${ProductDetails}
`;
const apolloClient = useApolloClient();
    const { currency } = useCurrency();
    const data = apolloClient.readFragment({
        id: `Product:${productId}`,
        fragment: READ_PRODUCT,
        variables: {
            currency,
        },
    }) as Product
*/

interface IUseProductProps {
    productId: number;
}
export function useProduct({ productId }: IUseProductProps) {
    const allProducts = useReactiveVar(allProductsVar);
    const data = allProducts.find((product) => product.id === productId);
    return { data };
}
