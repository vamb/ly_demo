import React, { useEffect } from 'react'
import styled from "styled-components";
import { Divider } from 'antd'
import Demo1_float from "./pages/Demo1_float";
import Demo1_flex from "./pages/Demo1_flex";
import Demo2_classic from "./pages/Demo2_classic";
import Demo2_classic_2 from "./pages/Demo2_classic_2";
import Demo2_classic_3 from "./pages/Demo2_classic_3";
import Demo3_1 from "./pages/Demo3_1";
import Demo3_2 from "./pages/Demo3_2";
import Demo3_3 from "./pages/Demo3_3";
import Demo3_4 from "./pages/Demo3_4";

function App() {

  const resizePage = () => {
    const appContent = document.getElementsByClassName('app-content')?.[0]
    if(appContent){
      const appContentHeight = appContent.offsetHeight
      // console.log(document.body.offsetHeight)
      appContent.style.height = `${appContentHeight < document.body.offsetHeight? document.body.offsetHeight - 150: appContentHeight}px`
    }
  }

  useEffect(()=>{
    resizePage()
    window.addEventListener('resize', resizePage)
    return () => window.removeEventListener('resize', resizePage)
  },[])

  return (
    <Wrapper>
      <div className={'app-content'}>
        <Demo1_float />
        <Demo1_flex />
        <Divider>Flex</Divider>
        <Demo2_classic />
        <Demo2_classic_2 />
        <Demo2_classic_3 />
        <Divider>Grid</Divider>
        <Demo3_1 />
        <Demo3_2 />
        <Demo3_3 />
        <Demo3_4 />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  width: 100%;
  margin: 0;
  padding: 0;
  color: #553d33;
  box-sizing: border-box;
  background-color: #709846;
  padding-bottom: 150px;
  * {
    box-sizing: border-box;
  }
  .app-content {
    width: 1200px;
    min-width: 1000px;
    height: 100%;
    background-color: #f7f8ee;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    & > div {
      background-color: #fff;
      border: 1px dashed lightgray;
      border-radius: 4px;
      padding: 20px;
    }
  }
`

export default App;
