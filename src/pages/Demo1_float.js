import React from 'react'
import styled from "styled-components";

const Demo1_float = () => {
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
  .modal-content {
    margin: 10px auto;
    width: 400px;
    height: 206px;
    border: 1px solid lightgray;
    border-radius: 2px;
    background: #002a79;
    color: #fff;
  }
  .modal-body {
    width: 100%;
    height: 151px;
  }
  .body-main {
    width: 100%;
    height: 100px;
    background-color: lightyellow;
  }
  .body-bottom {
    width: 100px;
    height: 51px;
    background-color: #fff;
    float: right;
  }
  .modal-head {
    width: 100%;
    height: 55px;
  }
  .head-left {
    float: left;
    height: 55px;
    width: 100px;
    background-color: lightgreen;
  }
  .head-right {
    float: right;
    height: 55px;
    width: 100px;
    background-color: lightblue;
  }
`

export default Demo1_float
