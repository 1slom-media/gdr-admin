import React from 'react'
import CommonBtn from '../CommonBtn'
import CommonButton from '../button'
import { Wrapper } from './styled-index'

function HeaderTopCommon({title ,textBtn , style , onClick, isBtn}) {
  return (
    <Wrapper>
        <h3>{title}</h3>
       {
        isBtn === false ? null :  <CommonBtn style={{background: "#03544C"}} onClick={onClick}>{textBtn}</CommonBtn>
       }
    </Wrapper>
  )
}

export default HeaderTopCommon