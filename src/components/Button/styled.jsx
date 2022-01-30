import styled from "styled-components";

export const ButtonClass = styled.button`
    background-color: #a7c6eb;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;

    &:hover {
        background-color: #444;
        color:#a7c6eb;
    }
`