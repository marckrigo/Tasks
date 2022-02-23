import styled from "styled-components";

export const TaskContainer = styled.div`
    background-color: #192734;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    border-left: ${props => props.status ? "6px solid #00ba7c" : ""};
`

export const TaskTitle = styled.div`
    cursor: pointer;

    &:hover {
        color: #00ba7c;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex;
`

export const RemoveTaskButton = styled.button`
    background-color: #192734;
    border: none;
    font-size: 20px;
    color: #00ba7c;
    cursor: pointer;
    margin: 0 5px;
`

export const DetailTaskButton = styled.button`
    background-color: #192734;
    border: none;
    font-size: 20px;
    color: #00ba7c;
    cursor: pointer;
    margin: 0 5px;
`