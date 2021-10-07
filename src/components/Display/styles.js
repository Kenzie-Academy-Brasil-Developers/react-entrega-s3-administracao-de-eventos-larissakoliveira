import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `
export const Card = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    border: 1px solid gray;
    padding: 5px;
    width: 220px;
    min-height: 500px;
    border-radius: 2px;
    border: black solid 1px;
    &:hover{
        background-color: white;
    }

    img{
        width: 150px;
        height: 220px;
    }
    `