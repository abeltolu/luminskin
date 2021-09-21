import React, { ReactNode } from 'react';
import './stickyheader.layout.scss';

interface IStickyHeaderLayoutProps {
    children: ReactNode;
}
export const StickyHeaderLayout: React.FC<IStickyHeaderLayoutProps> = ({
    children,
}) => {
    return <div className="stickyheader-container">{children}</div>;
};
