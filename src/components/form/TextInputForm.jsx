import React, { useState } from "react";
import styles from './TextInputForm.module.css';

function TextInputForm({addText}) {
    const [text, setText] = useState('');
    const [color, setColor] = useState('palevioletred');
    const [size, setSize] = useState(15);

    const handleSumbit =(e) => {
        e.preventDefault();
        if (text.trim()) {
            addText(text, color, size);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSumbit} className={styles.form}>
            <div className={styles.field}>
                <label>Saisir le texte</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={styles.input}
                />
            </div>
            <div className={styles.field}>
                <label>Sélectionnez un rendu :</label>
                <select value={color} onChange={(e) => setColor(e.target.value)} className={styles.select}>
                <option value="palevioletred">palevioletred</option>
                <option value="tomato">tomato</option>
                </select>
            </div>
            <div className={styles.field}>
                <label>Taille du text</label>
                <select value={size} onChange={(e) => setSize(Number(e.target.value))} className={styles.select}>
                    {[15, 16, 17, 18, 19, 20].map((size) => (
                        <option key={size} value={size}>
                            {size}px
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className={styles.button}>Valider</button>
        </form>
    );
}

export default TextInputForm;