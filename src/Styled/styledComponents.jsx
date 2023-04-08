import styled from "styled-components";
import { InputBase } from '@mui/material';

export const NetflixInput = styled(InputBase)`
    z-index: 30;
    background-color: white;
    padding: .6em;
    border-radius: 5px;
    border: none;
`

const handleWidth = wide => {
    switch (wide) {
        case "fullWidth": return "100%";
        case "medium": return "260px";
        default: return "160px";
    }
}

export const NetflixButton = styled.button`
    z-index: 15;
    background-color: ${({color})=> color === "gray" ? "#aaa" : "red"};
    color: white;
    font-size: 1em;
    padding: 1em;
    border-radius: ${({radius})=> radius ? "5px" : null};
    border: none;
    text-transform: inherit;
    cursor: pointer;
    width: ${({wide})=>handleWidth(wide)}
`