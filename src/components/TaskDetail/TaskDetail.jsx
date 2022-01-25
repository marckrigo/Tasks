import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../Button/Button';
import Header from '../Header/Header';

import './TaskDetail.css';

const TaskDetail = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <Header text="Detalhe Tarefas" />
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Nam suscipit dui euismod quam curabitur tempus id, aenean dictum venenatis sodales mollis posuere faucibus rhoncus, laoreet congue sollicitudin cras ut convallis. ligula consectetur condimentum senectus fusce ut facilisis massa in risus imperdiet, rhoncus porttitor sapien cursus sapien vitae purus aliquam sagittis, feugiat odio vivamus consequat tincidunt malesuada tincidunt mattis suscipit. convallis donec a pellentesque quisque massa bibendum duis cubilia fusce, nam fames nisi ornare aliquam fringilla at porta torquent, iaculis nisl blandit metus nam senectus ut sed. sagittis sodales fringilla viverra eu senectus pretium rhoncus arcu interdum sem maecenas, imperdiet porta purus donec nam suspendisse condimentum habitasse orci hendrerit.</p>
            </div>
        </>
    );
}
 
export default TaskDetail;