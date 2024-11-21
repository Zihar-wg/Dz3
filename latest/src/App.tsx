import React, { useState } from 'react';

interface Task {
    id: number;
    text: string;
}

export const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    const addTask = () => {
        if (taskText.trim() === '') return;

        const newTask: Task = {
            id: Date.now(),
            text: taskText,
        };

        setTasks([...tasks, newTask]);
        setTaskText('');
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1>Список завдань</h1>
            <div>
                <input
                    type="text"
                    value={taskText}
                    onChange={handleInputChange}
                    placeholder="Введіть нове завдання"
                />
                <button onClick={addTask}>Додати завдання</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
