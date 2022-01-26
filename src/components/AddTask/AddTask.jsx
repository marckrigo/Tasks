import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import Button from "../Button/Button";

import 'react-toastify/dist/ReactToastify.css';

import { AddTaskContainer, AddTaskInput, AddTaskButtonContainer } from "./styled";

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
        <AddTaskContainer>
            <AddTaskInput onChange={handleInputChange} value={inputData} type="text" />
                <AddTaskButtonContainer>
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                    <ToastContainer />
                </AddTaskButtonContainer>
        </AddTaskContainer>
    );
}
 
export default AddTask;