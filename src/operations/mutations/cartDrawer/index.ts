import { showCartDrawerVar } from '../../../services/cache';
import toggleCartDrawer from './toggleCartDrawer';

export const cartDrawerMutations = {
    toggleCartDrawer: toggleCartDrawer(showCartDrawerVar),
};
