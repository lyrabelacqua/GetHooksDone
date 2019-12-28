import styled from "styled-components";

export const Todo = styled.li`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #000;

    & button {
        background-color: #fff;
        color: rgba(220, 20, 60, 0.8);
        font-weight 800;
        transition: color 0.2s;
        border: 0;
        box-sizing: border-box;
        font-size: 20px;

        &:hover {
            cursor: pointer;
            color: rgba(220, 20, 60, 1);
            transition: color 0.2s;
        }
    }

    &:nth-child(2n) {
        background-color: #000;
        color: #fff;

        & button {
            background-color: #000;
            border-color: #ccc;
        }
    }
`;

export const TodoTitle = styled.span`
  line-height: 20px;
  margin: 0 10px 0 8px;
`;

export const DoneCheckbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const DeleteButton = styled.button`background-color: transparent;`;
