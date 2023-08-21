import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '영어공부', status: 'active' },
    { id: '124', text: '책 구매하기', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    // 새로운 투두를 업데이트
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos?.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
