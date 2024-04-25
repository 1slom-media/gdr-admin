import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 15px;
    font-size: 24px;
  }

  input[type="file"] {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 167px; */
    border-radius: 20px;
    border-style: solid;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .spins {
    width: 100%;
    height: 46.70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding-top: 5px;
    border: 3px solid #f3f3f3;
    margin-bottom: 20px;
  }

  .spinss {
    width: 100%;
    height: 165.54px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 20px;
    padding-top: 5px;
    border: 3px solid #f3f3f3;
    margin-bottom: 20px;
  }
  .span-download {
    font-size: 20px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .span-download > span{
    margin-left: 10px;
    font-size: 15px
  }
`;
