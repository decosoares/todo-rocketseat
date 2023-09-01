import { AddTodo } from "./components/AddTodo"
import { Header } from "./components/Header"

import styles from './App.module.css';
import { Tasks } from "./components/Tasks";

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTodo />
        <Tasks/>
      </div>
    </>
  )
}

export default App
