import React from "react";
import {CgClose, CgInfo} from "react-icons/cg"
import { useHistory } from "react-router-dom";

import { ButtonsContainer, DetailTaskButton, RemoveTaskButton, TaskContainer, TaskTitle } from "./styled";

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    }
    return (
        <TaskContainer style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <TaskTitle onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </TaskTitle>

            <ButtonsContainer>
                <RemoveTaskButton onClick={() => handleTaskRemove(task.id)}><CgClose /></RemoveTaskButton>
                <DetailTaskButton onClick={handleTaskDetailsClick}><CgInfo /></DetailTaskButton>
            </ButtonsContainer>
        </TaskContainer>
    );
}
 
export default Task;