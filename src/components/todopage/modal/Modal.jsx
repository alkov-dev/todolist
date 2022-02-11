import React from 'react';
import styles from './Modal.module.css'
import cN from 'classnames'
import { useDispatch } from 'react-redux'
import { change1Todo } from '../../../redux/actions/actionTodos';

const Modal = ({visibleModal, obj, setVisibleModal}) => {
    const [inputValue, setInputValue] = React.useState(obj.title)
    const inputVal = React.useRef(null);
    const dispatch = useDispatch();
    const handleModalClose = () => {
        setVisibleModal(false)
    }
    const handleInputChange =(event)=>{
        setInputValue(event.target.value)
    }
    
    const handleModalChangeTitle = (obj) => {
        dispatch(change1Todo([obj.id, inputValue]))
        setVisibleModal(false)
    }

    return (
        <div className={cN(styles.modal__wrapper, visibleModal ? styles.open : styles.close)}>
            <div className={styles.modal__body}>
                <div className={styles.modal__input}>
                    <input type="text" defaultValue={obj.title} ref={inputVal} onChange={handleInputChange}/>
                </div>
                <div className={styles.buttons__block}> 
                    <div>
                        <button className={styles.modal__close} onClick={handleModalClose}>Close</button>
                    </div>
                    <div>
                        <button className={styles.modal__close} onClick={() =>  handleModalChangeTitle(obj)}>Change</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Modal;