import React from 'react'
import styled from "styled-components";

const Demo1_flex = () => {
  return (
    <Wrapper>
      <div className={'modal-content'}>
        <div className={'modal-head'}>
          <div className={'head-left'} />
          <div className={'head-right'} />
        </div>
        <div className={'modal-body'}>
          <div className={'body-main'} />
          <div className={'body-bottom'}>
            <div className={'ctl-btn'} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    box-sizing: border-box;
    border-bottom: 1px solid #003ea9;
  }
  .modal-content {
    width: 400px;
    height: 206px;
    background: #002a79;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .modal-head {
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .head-left, .head-right {
    height: 100%;
    width: 100px;
  }
  .head-left {
    background-color: lightgreen;
  }
  .head-right {
    background-color: lightblue;
  }
  .modal-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .body-main {
    flex-grow: 1;
    background-color: lightyellow;
  }
  .body-bottom {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  .ctl-btn {
    width: 100px;
    background-color: #fff;
  }
`

export default Demo1_flex
