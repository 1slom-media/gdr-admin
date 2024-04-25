import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h3 {
    text-align: center;
    font-size: 26px;
  }

  input {
    font-family: "Ubuntu", sans-serif;
    background: #ffffff;
    border: 2px solid #eeeeee;
    border-radius: 15px;
    padding: 15px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #aaaaaa;
  }

  input:focus {
    border: 2px solid red;
  }
  .Buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }
`;
