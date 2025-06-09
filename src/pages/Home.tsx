import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { socket } from '../socket';
import { TaskItem } from '../components/TaskItem';

interface Task {
  _id: string;
  text: string;
  done: boolean;
}

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    loadTasks();

    socket.on('task_created', (task: Task) => {
      setTasks(prev => [...prev, task]);
    });

    socket.on('task_updated', (updated: Task) => {
      setTasks(prev =>
        prev.map(t => (t._id === updated._id ? updated : t))
      );
    });

    socket.on('task_deleted', (id: string) => {
      setTasks(prev => prev.filter(t => t._id !== id));
    });

    return () => {
      socket.off('task_created');
      socket.off('task_updated');
      socket.off('task_deleted');
    };
  }, []);

  const loadTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  const createTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    await api.post('/tasks', { text });
    setText('');
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t._id === id);
    if (task) {
      await api.put(`/tasks/${id}`, { done: !task.done });
    }
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 To-do em Tempo Real</h1>

      <form onSubmit={createTask}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};
