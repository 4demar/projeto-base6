import styled from "styled-components"


export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  margin: 20px;
`;

export const StyleHeader = styled.div`
    width: 100%;
    height: 70px;
    //background-color: #0b102D;
    background-color: var(--header); 
    box-shadow: 0 0 20px 2px;
    /* margin: 0 auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .texto {
        color: #222;
        width: auto;
    }
`;

export const StyleConteudo = styled.div`
    margin: 0 auto;
    padding: 30px;

    align-items: center;
    margin-bottom: 50px;
`;

export const StyleFooter = styled.div`
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
    align-content: center; //centro linha
    text-align: center; //centro coluna
`;

