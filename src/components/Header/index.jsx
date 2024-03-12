import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          required
          placeholder="Add Todo"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>ADD</button>
      </form>
    </header>
  );
}
