import { useState } from 'react';
import { Drawer } from '../../components/drawer/drawer';
import { Header } from '../../components/header/header';
import { PageHeader } from '../../components/header/pageheader/pageheader';
import { StickyHeaderLayout } from '../../components/layout/sticky/stickyheader.layout';
import { ProductItem } from '../../components/product/productitem';
import { SelectBox } from '../../components/select/selectbox';
import { Cart } from '../../connected/cart/cart';
import { useProducts } from '../../hooks/useProducts';
import { cartItemMutations } from '../../operations/mutations/cart';
import './products.scss';

function Products() {
    const { data, loading, error } = useProducts({ currency: 'USD' });
    const [productId, setProductId] = useState<number | null>(null);
    const { addCartItem } = cartItemMutations;
    return (
        <StickyHeaderLayout>
            <Header isSticky />
            <div className="productpage_section">
                <PageHeader
                    title="All Products"
                    subtitle="All 360&deg; look at Lumin"
                    rightNode={
                        <SelectBox
                            defaultValue=""
                            options={[
                                { label: 'Filter By', value: '' },
                                {
                                    label: 'All Products',
                                    value: 'all_products',
                                },
                            ]}
                        />
                    }
                />
            </div>
            <div className="productpage__products">
                <div className="productpage_section products_list">
                    {loading && 'Loading...'}
                    {error && 'Error occurred'}
                    {!!data
                        ? data.products.map((product) => (
                              <ProductItem
                                  key={product.id}
                                  image_url={product.image_url}
                                  title={product.title}
                                  price={product.price}
                                  currencyCode={'USD'}
                                  onAddToCart={() => addCartItem(product.id)}
                              />
                          ))
                        : null}
                </div>
            </div>

            <Drawer
                show={!!productId}
                onClose={() => setProductId(null)}
                headerFragment={null}
            >
                <Cart />
            </Drawer>
        </StickyHeaderLayout>
    );
}

export default Products;
