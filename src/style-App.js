import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Montserrat', sans-serif !important;
}
  html{
    scroll-behavior:smooth
    }
  body {
    margin: 0;
    padding: 0;
    font-family: "Ubuntu", sans-serif;
    color: white;
  }

   ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #5A79E5; 
    border-radius: 10px;
  }
   
 
  ::-webkit-scrollbar-thumb {
    background: #03544c; 
    border-radius: 10px;
  }
  
  
  ::-webkit-scrollbar-thumb:hover {
    background: #03544c;
  }

  .drop_span{
    color:#fff !important;
  }
  
`;

export const WrapperContainer = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #eeeeee;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 100%;
  padding: 15px;
  /* margin-top: 95px; */
`;
