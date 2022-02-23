import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../Button/Button';
import Header from '../Header/Header';

import { BackButtonContainer, TaskDetailsContainer, TaskDetailTitle} from './styled';

const TaskDetail = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <Header text="Detalhe da Tarefa" />
            <BackButtonContainer>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </BackButtonContainer>
            <TaskDetailsContainer>
                <TaskDetailTitle>{params.taskTitle}</TaskDetailTitle>
                <p>Nam suscipit dui euismod quam curabitur tempus id, aenean dictum venenatis sodales mollis posuere faucibus rhoncus, laoreet congue sollicitudin cras ut convallis. ligula consectetur condimentum senectus fusce ut facilisis massa in risus imperdiet, rhoncus porttitor sapien cursus sapien vitae purus aliquam sagittis, feugiat odio vivamus consequat tincidunt malesuada tincidunt mattis suscipit. convallis donec a pellentesque quisque massa bibendum duis cubilia fusce, nam fames nisi ornare aliquam fringilla at porta torquent, iaculis nisl blandit metus nam senectus ut sed. sagittis sodales fringilla viverra eu senectus pretium rhoncus arcu interdum sem maecenas, imperdiet porta purus donec nam suspendisse condimentum habitasse orci hendrerit.</p>
            </TaskDetailsContainer>
            
        </>
    );
}
 
export default TaskDetail;