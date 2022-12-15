import {createPortal} from 'react-dom';
import React from "react";

interface Props {
    children : React.ReactNode
}
const ModalContainer: React.FC<Props> = ({children}: Props) => {
    return createPortal(children, document.getElementById('root') as HTMLElement)
}
export default ModalContainer;
