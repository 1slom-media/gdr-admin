import styled from "styled-components";

export const Wrapper = styled.div`
    h3{
        text-align: center;
        font-size: 26px;
        margin-bottom: 20px;
    }
    button{
        padding: 15px;
        font-size: 26px;
        background-color: black;
        border: 2px solid white;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        margin-top: 40px;
    }
    .Buttons{
        display: flex;
        justify-content: space-around;
        margin-top: 40px;
    }
    input[type="file"] {
    display: none;
}
label{
    border-style: dotted;
    text-align: center;
    padding: 15px 45px 18px 45px;
    cursor: pointer;
    width: 100%;
}
.loading{
    position: absolute;
    text-align: center;
    background-color: #FFD700;
    padding-top: 15px;
    padding-bottom: 20px;
    width: 86%;
    margin-top: 2px;
}
.span-download{
    font-size: 22px;
    position: relative;
    top: 7px;
    margin-right: 5px;
}
input{
        border: none;
        padding: 15px;
        border-bottom: 2px solid white;
        color: white;
        width: 100%;
        background-color: transparent;
        margin-top: 15px;
        margin-bottom: 20px;
    }
`