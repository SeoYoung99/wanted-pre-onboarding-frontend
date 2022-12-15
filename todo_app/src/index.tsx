import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//리덕스
//store만들기 (가장 상위 폴더에서 선해서 모든 하위 태그들이 공유 가능)
import { configureStore } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'; //store생성 함수
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider, useDispatch } from 'react-redux'; //생성된 store를 모든 태그가 공유할 수 있도록 해주는 클래스
import rootReducer from './store'
import {TodoType} from "./store/todos/reducer";

//3개의 파일을 combine해서 만든 rootreducer를 파라미터로 store생성
const store = configureStore({reducer: rootReducer, middleware: [thunk]});

export type AppThunkDispatch = ThunkDispatch<TodoType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //Provider의 파라미터로 전달
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
