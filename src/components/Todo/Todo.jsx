import React from 'react';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';

    onUpdate({
      ...todo,
      status,
    });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={`${styles.text} ${
          status === 'completed' && styles.completed
        }`}
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          🗑️
        </button>
      </span>
    </li>
  );
}
