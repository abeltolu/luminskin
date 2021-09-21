import { Header } from '../../components/header/header';
import { PageHeader } from '../../components/header/pageheader/pageheader';
import { StickyHeaderLayout } from '../../components/layout/sticky/stickyheader.layout';
import { ProductItem } from '../../components/product/productitem';
import { SelectBox } from '../../components/select/selectbox';
import './products.scss';

function Products() {
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
            <div className="productpage_section productpage__products">
                {Array(12)
                    .fill('*')
                    .map((_, index) => (
                        <ProductItem
                            key={index}
                            imageUrl="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
                            title="Age Management Set"
                            price="20"
                            currencyCode="NGN"
                        />
                    ))}
            </div>
        </StickyHeaderLayout>
    );
}

export default Products;
