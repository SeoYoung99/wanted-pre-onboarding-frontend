import React, {useCallback} from "react";
import styled from "styled-components";
import {useAppDispatch} from "../../index";
import {deleteTodoThunk} from "../../store/todos/actions";

const ModalWrapper = styled.div`
  //중앙 정렬
  position: absolute;
  top: 0;
  left: 0;
  height: 100%; /*100%*/
  width: 100%; /*100%*/
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 500px;
  height: 300px;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  padding: 100px;
  text-align: center;
  border-radius: 50px;
`
const ButtonWrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-around;
`
const ConfirmBtn = styled.button`
  border: none;
  border-radius: 10px;
  width: 70px;
  height: 50px;
  cursor: pointer;
  
  :hover{
    box-shadow: 3px 3px 3px lightcoral;
  }
`
export interface Props {
    id : number,
    setModalVisible : (val : boolean) => void
}
const Modal = ({ id, setModalVisible } : Props) => {

    const dispatch = useAppDispatch();

    const onCancelClick = useCallback(() => {
        setModalVisible(false)
    },[setModalVisible])

    const onConfirmClick = useCallback(() => {
        dispatch(deleteTodoThunk(id))
        setModalVisible(false)
    },[dispatch, id, setModalVisible])

     return(
            <ModalWrapper>
                <Content>
                    게시물을 삭제하시겠습니까?
                    <ButtonWrapper>
                        <ConfirmBtn onClick={onCancelClick}>
                            취소
                        </ConfirmBtn>
                        <ConfirmBtn onClick={onConfirmClick}>
                            확인
                        </ConfirmBtn>
                    </ButtonWrapper>
                </Content>
            </ModalWrapper>
     )
}
export default Modal
