import React from 'react';
import styles from './todolist.module.css'
import { useDispatch } from 'react-redux'
import { remove1Todo } from '../../../redux/actions/actionTodos';
import { completed } from '../../../redux/actions/actionTodos';
import Modal from '../modal/Modal';
import sN from 'classnames'
import brush from '../img/brush.svg'
import trash from '../img/trash.svg'

const TodoList = ({obj, index}) => {
    const [visibleModal, setVisibleModal] = React.useState(false)

    const dispatch = useDispatch();

    const handleRemove = (obj) => {
        dispatch(remove1Todo(obj.id));
    }
    const handleEditToDo = (obj) => {
        setVisibleModal(true)
    }

    const handleCompleted = (obj) => {
        dispatch(completed(obj));
    }

    return (
        <div>
            <Modal 
                visibleModal={visibleModal} 
                setVisibleModal={setVisibleModal}
                obj={obj}/>
            <div className={styles.list__block}>
                <div className={sN(styles.list__value, obj.completed ? styles.green : styles.red)}
                    onClick={() =>  handleCompleted(obj)}>
                    <p>{obj.title}</p>
                </div>
                <div className={styles.trash}><img onClick={() => handleRemove(obj)} src={trash} alt="" /></div>
                <div className={styles.brush}><img onClick={() => handleEditToDo(obj)} src={brush} alt="" /></div>
            </div>
        </div>

    );
};

export default TodoList;