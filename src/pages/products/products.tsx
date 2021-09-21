import { Header } from '../../components/header/header';
import { PageHeader } from '../../components/header/pageheader/pageheader';
import { StickyHeaderLayout } from '../../components/layout/sticky/stickyheader.layout';
import { ProductItem } from '../../components/product/productitem';
import { SelectBox } from '../../components/select/selectbox';
import { useProducts } from '../../hooks/useProducts';
import './products.scss';

function Products() {
    const { data, loading, error } = useProducts({ currency: 'USD' });
    console.log({ data });
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
                                  imageUrl={product.image_url}
                                  title={product.title}
                                  price={product.price}
                                  currencyCode={'USD'}
                              />
                          ))
                        : null}
                </div>
            </div>
        </StickyHeaderLayout>
    );
}

export default Products;
