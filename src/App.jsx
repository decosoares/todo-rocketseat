import { Header } from "./components/Header"

import styles from './App.module.css';
import { List } from "./components/List";

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <List />
      </div>
    </>
  )
}

export default App
