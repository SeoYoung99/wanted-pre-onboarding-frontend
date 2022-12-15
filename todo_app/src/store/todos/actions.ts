//typesafe-actions패키지 설치 후 import
import {Action, ActionType, createAction} from "typesafe-actions";
import {ThunkAction} from 'redux-thunk';
import {RootState} from '..';
import {todoItem, TodoType} from "./reducer";

//Action 생성 함수 구현 
// 첫번째 인자: Action Type, 두번째 인자: payload(액션함수의 파라미터), 세번째 인자: Action Type인데 자동으로 적용
export const addTodo = createAction('ADD_TODO')<{todo: todoItem;}>();
export const changeStatus = createAction('CHANGE_STATUS')<{todo: todoItem}>();
export const deleteTodo = createAction('DELETE_TODO')<{id: number;}>();
export const modifyTodo = createAction('MODIFY_TODO')<{todo: todoItem}>();

export const deleteTodoThunk = (id: number): ThunkAction<void,TodoType, null, Action> => {
    return (dispatch, getState) => {
        //id가 해당 번호인 값의 상태가 참이면 삭제 dispatch
        dispatch(deleteTodo({id : id}))
    }
}
export const changeStatusThunk = (val: todoItem) : ThunkAction<void, TodoType, null, Action> => {
    const {id, title, date, isCompleted } = val
    const newItem : todoItem = { id: id, title: title, date: date, isCompleted: !val.isCompleted}

    return (dispatch, getState) => {
        dispatch(changeStatus({todo : newItem}))
    }
}

const actionTypes = { addTodo, changeStatus, deleteTodo, modifyTodo }

export type TodoAction = ActionType<typeof actionTypes>



