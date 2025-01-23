import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, label }) {
    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    );
}

export default Button;