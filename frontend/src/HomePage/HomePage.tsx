import React, { useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks.ts';
import { TodoList } from '../TodoList/TodoList.tsx';

export const HomePage = () => {
  const { tasks } = useTasks();

  return (
    <TodoList tasks={tasks} />
  )
}