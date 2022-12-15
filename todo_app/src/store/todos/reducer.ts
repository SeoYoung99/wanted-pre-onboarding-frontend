import {TodoAction} from "./actions"; //정의한 액션 타입 불러오기
import {createReducer} from "typesafe-actions";
//기존에 switch/case문을 통해 작성했던 리듀서를 객체형식으로 구현

 export interface todoItem {
     id : number;
     title : string ;
     date : number | string ;
     isCompleted: boolean ;
 }
 let map = new Map<number, todoItem>()

export interface TodoType { todo: Map<number,todoItem> }
const initialState : TodoType = { todo: map }
//const initialState : TodoType = {todo : []}

//Reducer함수 구현
//(제네릭: 클래스나 함수에서 사용할 타입을 결정) Todo와 TodoAction 타입을 사용
// const todo = createReducer<TodoType, TodoAction>(initialState,{
//     //인자로 초기상태와 object
//     [ADD_TODO] : (state, action) => ({
//         ...state,
//         todo : [...state.todo, action.payload.todo]
//     })
//     ,
//     [CHANGE_STATUS] : (state, action) => ({
//         ...state,
//         todo : state.todo.map((todo) => todo.id === action.payload.id ? {...todo, isCompleted: !todo.isCompleted}: todo)
//
//     }),
//     [DELETE_TODO] : (state, action) => ({
//         ...state,
//         todo : state.todo.filter(item => item.id !== action.payload.id)
//     }),
//     [MODIFY_TODO] : (state, action) => ({
//         ...state,
//         todo : state.todo.map((todo) => todo.id === action.payload.todo.id ? {...todo, title: action.payload.todo.title}: todo)
//     })
// })
//
// export default todo;

 //export function createReducer<TodoType, PayloadAction<"ADD_TODO", {todo: todoItem;}> | PayloadAction<"CHANGE_STATUS", {todo: todoItem;}> | PayloadAction<...> | PayloadAction<...>>
const todo = createReducer<TodoType, TodoAction>(initialState,{
    ADD_TODO : (state, action) => ({
        ...state,
        todo : state.todo.set(action.payload.todo.id, action.payload.todo)
    }),
    CHANGE_STATUS : (state, action) => ({
        ...state,
        todo: state.todo.set(action.payload.todo.id, action.payload.todo)
    }),
    DELETE_TODO : (state, action) => {
        state.todo.delete(action.payload.id)
        return({...state})
    },
    MODIFY_TODO : (state, action) => ({
        ...state,
        todo: state.todo.set(action.payload.todo.id, action.payload.todo)
    })
})
export default todo
