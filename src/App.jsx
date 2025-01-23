import React, { useReducer } from "react";
import TextInputForm from './components/Form/TextInputForm';
import RenderedTextList from './components/RenderedTextList/RenderedTextList';
import textReducer, { initialState } from './context/textReducer';
import styles from './styles/App.module.css';

function App() {
  return (
    <TextProvider>
      <div className={styles.app}>
        <h1 className={styles.title}>Text Styler</h1>
        <TextInputForm />
        <RenderedTextList />
      </div>
    </TextProvider>
  );
}

export default App;