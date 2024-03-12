import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <p>Detele</p>
      </button>
    </div>
  );
}
