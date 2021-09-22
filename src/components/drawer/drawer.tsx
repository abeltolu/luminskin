import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight } from '../icons/chevron-right';
import './drawer.scss';

interface IDrawerProps {
    show: boolean;
    onClose: () => void;
    headerFragment: ReactNode;
    children: ReactNode;
}
export const Drawer: React.FC<IDrawerProps> = ({
    show,
    onClose,
    children,
    headerFragment,
}) => {
    useEffect(() => {
        if (show) {
            document.body.classList.add('drawer-open');
        } else {
            document.body.classList.remove('drawer-open');
        }
    }, [show]);
    //if (!show) return null;

    const drawerClass = classNames('drawer', {
        show: show,
    });
    return createPortal(
        <div className={drawerClass}>
            <div className="drawer-content">
                <div className="drawer-content__header">
                    <div className="close-button" onClick={onClose}>
                        <ChevronRight fill="#000" />
                    </div>
                    <div className="header__content">{headerFragment}</div>
                </div>
                {children}
            </div>
        </div>,
        document.getElementsByTagName('body')[0]
    );
};
