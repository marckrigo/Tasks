import styled from "styled-components";

export const TaskContainer = styled.div`
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
`

export const TaskTitle = styled.div`
    cursor: pointer;

    &:hover {
        color: chartreuse;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex;
`

export const RemoveTaskButton = styled.button`
    background-color: #444;
    border: none;
    font-size: 20px;
    color: chartreuse;
    cursor: pointer;
    margin: 0 5px;
`

export const DetailTaskButton = styled.button`
    background-color: #444;
    border: none;
    font-size: 20px;
    color: chartreuse;
    cursor: pointer;
    margin: 0 5px;
`