import ServerTodoForm from "./components/ServerTodoForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <ServerTodoForm />
    </div>
  );
}
