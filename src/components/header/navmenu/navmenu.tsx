import './navmenu.scss';

type LinkItem = {
    title: string;
    url: string;
};
interface INavMenuProps {
    links: LinkItem[];
}

export const NavMenu = ({ links }: INavMenuProps) => {
    if (!links || !links.length) return null;
    return (
        <ul className="navmenu">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.url}>{link.title}</a>
                </li>
            ))}
        </ul>
    );
};
