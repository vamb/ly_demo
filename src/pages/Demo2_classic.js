import React from 'react'
import styled from "styled-components";

const Demo2_classic = () => {
  return (
    <Wrapper>
      <div className={'d2-content'}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  .d2-content {
    width: 200px;
    height: 200px;
    background-color: #4385f5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: 20px;
    & > div {
      width: calc(50% - 10px);
      height: calc(50% - 10px);
      background-color: #fff;
      border: 1px solid lightgray;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default Demo2_classic
