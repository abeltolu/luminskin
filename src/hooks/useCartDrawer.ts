import { useReactiveVar } from '@apollo/client';
import { cartDrawerMutations } from '../operations/mutations/cartDrawer';
import { showCartDrawerVar } from '../services/cache';

export function useCartDrawer() {
    const showCartDrawer = useReactiveVar(showCartDrawerVar);
    return { showCartDrawer, ...cartDrawerMutations };
}
