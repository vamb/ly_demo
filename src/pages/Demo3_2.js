import React from 'react'
import styled from "styled-components";

const Demo3_2 = () => {
  return (
    <Wrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 300px;
  border: 1px solid silver;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  // grid-template: repeat(3, 1fr)/repeat(3, 1fr);
  gap: 10px;
  & > div {
    background: blueviolet;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Demo3_2
