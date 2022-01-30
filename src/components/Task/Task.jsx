import React from "react";
import {CgClose, CgInfo} from "react-icons/cg"
import { useHistory } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

import { ButtonsContainer, DetailTaskButton, RemoveTaskButton, TaskContainer, TaskTitle } from "./styled";

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    }
    return (
        <TaskContainer status={task.completed}>
            <Tooltip title="Alterar status da tarefa">
                <TaskTitle onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </TaskTitle>
            </Tooltip>
            <ButtonsContainer>
                <Tooltip title="Remover tarefa">
                    <RemoveTaskButton onClick={() => handleTaskRemove(task.id)}><CgClose /></RemoveTaskButton>
                </Tooltip>
                <Tooltip title="Detalhe da tarefa">
                    <DetailTaskButton onClick={handleTaskDetailsClick}><CgInfo /></DetailTaskButton>
                </Tooltip>
            </ButtonsContainer>
        </TaskContainer>
    );
}
 
export default Task;