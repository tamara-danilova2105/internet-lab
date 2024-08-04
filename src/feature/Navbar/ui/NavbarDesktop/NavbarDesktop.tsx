import { HashLink } from 'react-router-hash-link';
import { navigation } from '../../lib/data';
import styles from './NavbarDesktop.module.scss';

export const NavbarDesktop = () => {
    return (
        <nav className={styles.navbar}>
            {Object.values(navigation).map(({text, path}) => (
                <HashLink key={path} smooth to={`#${path}`}>
                    {text}
                </HashLink>
            ))}
        </nav>
    );
};
