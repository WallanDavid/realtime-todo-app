import React from 'react';

interface TaskItemProps {
  task: {
    _id: string;
    text: string;
    done: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task._id)}
      />
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task._id)}>🗑</button>
    </div>
  );
};
