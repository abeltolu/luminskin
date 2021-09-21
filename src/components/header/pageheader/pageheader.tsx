import { ReactNode } from 'react';
import './pageheader.scss';

interface IPageHeaderPRops {
    title: string;
    subtitle: string;
    rightNode?: ReactNode;
}

export const PageHeader = ({
    title,
    subtitle,
    rightNode,
}: IPageHeaderPRops) => {
    return (
        <div className="pageheader">
            <div className="pageheader__left">
                <h1 className="pageheader__title">{title}</h1>
                <span className="pageheader__title-desc">{subtitle}</span>
            </div>
            <div className="pageheader__right">{rightNode}</div>
        </div>
    );
};
