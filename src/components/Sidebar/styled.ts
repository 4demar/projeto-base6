import styled from 'styled-components';

export const Container = styled.div.withConfig({
   shouldForwardProp: (prop) => prop !== "sidebar",
}) <{ sidebar: boolean }>`
    > svg { //Imagem Menu
        position: absolute;
        color: white;
        width: 26px;
        height: 26px;
        margin-top: 22px;
        margin-left: 22px;
        cursor: pointer;
    }
      
    nav.menu-lateral { //Menu lateral
        width: ${({ sidebar }) => (sidebar ? "250px" : "0")};
        height: 100%;
        background-color: #222;
        padding: 5px 0 5px 0;
        box-shadow: 5px 0 20px #1A202C;

        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        transition: .5s;
        z-index: 2;
    }
    
    .btn-expandir {
        position: fixed;
        color: white;
        margin-top: 10px;
        margin-left: 22px;
        font-size: 23px;
        cursor: pointer;
    }

    ul {
        padding-left: 10px;
        margin-top: 80px;
    }

    .item-menu {
        transition: .2s;
        padding-left: 14px;
        color: #fff;
        
        font-size: 18px;
        display: flex;
        margin-bottom: 5px;
        line-height: 45px;
    }

    .logout {
        top: 4;
        bottom: 5px;
    }

    .item-menu:hover{
        background: #123faa;
        border-radius: 10px 0 0 10px;
        cursor: pointer;
    }
    
    .link {
        color: inherit;
        text-decoration: none;
    }
    
    .icon {
        font-size: 18px;
        margin-right: 8px;
        color: #999; 
    }

    .texto {
        margin-top: 1px;
    }
    
    .fechaMenu {
      background-color: transparent;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
   }
    
`;