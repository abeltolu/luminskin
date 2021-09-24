import { Drawer } from '../../components/drawer/drawer';
import { Header } from '../../components/header/header';
import { PageHeader } from '../../components/header/pageheader/pageheader';
import { StickyHeaderLayout } from '../../components/layout/sticky/stickyheader.layout';
import { ProductItem } from '../../components/product/productitem';
import { SelectBox } from '../../components/select/selectbox';
import { Cart } from '../../connected/cart/cart';
import { useCartDrawer } from '../../hooks/useCartDrawer';
import { useCartItems } from '../../hooks/useCartItems';
import { useCurrency } from '../../hooks/useCurrency';
import { useProducts } from '../../hooks/useProducts';
import './products.scss';

function Products() {
    const { currency } = useCurrency();
    const { data, loading, error } = useProducts({ currency });
    const { addCartItem, itemsCount } = useCartItems();
    const { showCartDrawer, toggleCartDrawer } = useCartDrawer();
    return (
        <StickyHeaderLayout>
            <Header
                isSticky
                cartCount={itemsCount}
                onCartClick={toggleCartDrawer}
            />
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
                    {loading && !data?.length && (
                        <div className="load_state">Loading...</div>
                    )}
                    {error && !data?.length && (
                        <div className="load_state">Error occurred</div>
                    )}
                    {!!data
                        ? data.map((product) => (
                              <ProductItem
                                  key={product.id}
                                  {...product}
                                  currencyCode={currency}
                                  onAddToCart={() => {
                                      addCartItem(product.id);
                                      toggleCartDrawer();
                                  }}
                              />
                          ))
                        : null}
                </div>
            </div>

            <Drawer
                show={showCartDrawer}
                onClose={toggleCartDrawer}
                headerFragment={null}
            >
                <Cart />
            </Drawer>
        </StickyHeaderLayout>
    );
}

export default Products;
