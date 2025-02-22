import React from 'react';
import styles from './RenderedTextList.module.css';
import Button from '../shared/Button';

function RenderedTextList() {
    const { texts, dispatch } = useContext(TextContext);
  
    const deleteText = (index) => {
      dispatch({ type: 'DELETE_TEXT', index });
    };
  
    return (
      <div className={styles.list}>
        {texts.map((item, index) => (
          <div key={index} className={styles.item}>
            <div
              style={{
                color: item.color,
                fontSize: `${item.size}px`,
              }}
              className={styles.text}
            >
              {item.text}
            </div>
            <Button onClick={() => deleteText(index)} label="Delete" />
          </div>
        ))}
      </div>
    );
  }

  export default RenderedTextList;
