import React, { useReducer } from "react";
import TextInputForm from './components/Form/TextInputForm';
import RenderedTextList from './components/RenderedTextList/RenderedTextList';
import textReducer, { initialState } from './context/textReducer';
import styles from './styles/App.module.css';

function App() {
  const addText = (text, color, size) => {
    dispatchEvent({ type: 'ADD_TEXT', payload : { text, color, size }});
  };

  const deleteText = (index) => {
    dispatchEvent({ type: 'DELETE_TEXT', index });

  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Text Styler</h1>
      <TextInputForm addText={addText}/>
      <RenderedTextList texts={texts} deleteText={deleteText}/>
    </div>
  );
}

export default App;