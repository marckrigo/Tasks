import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { toast } from 'react-toastify';

import Tasks  from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetail from "./components/TaskDetail";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');

            setTasks(data);
        };

        fetchTasks();

    }, []);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
            if(task.id === taskId) 
                return {...task, completed: !task.completed};

            return task;
            
        });

        toast.info('Status alterado!', {
            theme: 'colored',
        });

        setTasks(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                completed: false
            },
        ];

        setTasks(newTasks);
    };

    const handleTaskRemove = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);

        toast.warning('Tarefa removida!', {
            theme: 'colored',
        });
        setTasks(newTasks);
    };

    return (
        <Router>
            <div className="container">
                <Header />
                <Route 
                    path="/"
                    exact
                    render={() => (
                        <>
                            <AddTask handleTaskAddition={handleTaskAddition} />
                            <Tasks 
                                tasks={tasks} 
                                handleTaskClick={handleTaskClick}
                                handleTaskRemove={handleTaskRemove}
                            />
                        </>
                    )}
                />
                <Route path="/:taskTitle" exact component={TaskDetail}
                />
            </div>
        </Router>
    );
};

export default App;