import React from 'react';
import styles from './styles.css';

function Header(props) {
    return (
        <h1 className={styles.title}>
            Обращения жителей города к властям
        </h1>
    );
}

export default Header;
