import ServerTodoForm from "./components/ServerTodoForm";
import TodoList from "./components/TodoList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <ServerTodoForm />
      <TodoList />
    </div>
  );
}
