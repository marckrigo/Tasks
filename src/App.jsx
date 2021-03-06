import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Tasks  from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import TaskDetail from "./components/TaskDetail/TaskDetail";

import { Container } from "./styled";

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
            <Container>
                <Route 
                    path="/"
                    exact
                    render={() => (
                        <>
                            <Header text="Tarefas"/>
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
            </Container>
        </Router>
    );
};

export default App;