import { ReactiveVar } from '@apollo/client';

export default function toggleCartDrawer(
    showCartDrawerVar: ReactiveVar<boolean>
) {
    return () => {
        const cartDrawerVar = showCartDrawerVar();
        showCartDrawerVar(!cartDrawerVar);
    };
}
