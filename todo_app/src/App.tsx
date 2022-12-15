import React from 'react';
import Input from './components/input';
import './App.css';
import Item from './components/item';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import { RootState } from './store';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #222021;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin: 0;
  padding: 30px;
`
const App = () : React.ReactElement => {
    //useSelector는 가져오는 상태값이 변경될 때만 렌더링

  const list = useSelector((state: RootState) => {
      const { todo } = state
      return Array.from(todo.todo.values())
  })
  return (
    <Wrapper>
      <Title> Todo </Title>
      <ToastContainer />
      <Input />
      {list.map((value, index) =>
        <Item todoItem={value} index={index} key={index}/>
      ) }
    </Wrapper>
  );
}

export default App;
