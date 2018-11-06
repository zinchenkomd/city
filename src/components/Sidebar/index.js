import React from 'react';
import Authority from '../Authority/index';
import styles from './index.css';

function Sidebar(props) {
    const className = props.isOpen ? styles.visible : styles.hidden;

    if (!props.district) {
        return (
            <div className={className}>
                <div className={styles.wrapper}>
                    Loading
                </div>
            </div>
        )
    }

    return (
        <div className={className}>
            <div className={styles.wrapper}>
                <div className={styles['close-link']} onClick={() => props.onClose()}>Close</div>
                <h2>{props.district.title}</h2>
                <h3>Ответственные:</h3>
                {props.district.authorities.map((a) => <Authority key={a.id} data={a}/>)}
            </div>
        </div>

    )
}


export default Sidebar;
