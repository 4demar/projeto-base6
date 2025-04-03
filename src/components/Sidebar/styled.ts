import styled from 'styled-components';

interface statusProps {
   sidebar: boolean;
}

//  body{
//     height: 100vh;
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1280' height='720' preserveAspectRatio='none' viewBox='0 0 1280 720'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1184%26quot%3b)' fill='none'%3e%3crect width='1280' height='720' x='0' y='0' fill='url(%23SvgjsLinearGradient1185)'%3e%3c/rect%3e%3cpath d='M 0%2c136 C 85.4%2c167.6 256.2%2c311.2 427%2c294 C 597.8%2c276.8 683.4%2c43.6 854%2c50 C 1024.6%2c56.4 1194.8%2c270.8 1280%2c326L1280 720L0 720z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c579 C 128%2c548 384%2c410.4 640%2c424 C 896%2c437.6 1152%2c602.4 1280%2c647L1280 720L0 720z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1184'%3e%3crect width='1280' height='720' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1185'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// } 

export const Container = styled.div<statusProps>`
    > svg { //Imagem Menu
        //position: absolute;
        color: white;
        width: 26px;
        height: 26px;
        
        /* margin-top: 22px;
        margin-left: 22px; */
        cursor: pointer;
    }
      
    nav.menu-lateral { //Menu lateral
        width: ${props => props.sidebar ? '250px' : '0'};;
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

    .item-menu{
        transition: .2s;
        padding-left: 14px;
        color: #fff;
        
        font-size: 18px;
        display: flex;
        margin-bottom: 5px;
        line-height: 45px;
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