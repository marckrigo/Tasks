import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import Button from "../Button/Button";

import "./AddTask.css";
import 'react-toastify/dist/ReactToastify.css';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        if(inputData.length !== 0) {
            handleTaskAddition(inputData);
            setInputData("");
            toast.success('Tarefa adicionada!', {
                theme: 'colored',
            });
        } else {
            toast.error('Campo vazio!', {
                theme: 'colored',
            });
        }
    };
    
    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
                <ToastContainer />
            </div>
        </div>
    );
}
 
export default AddTask;