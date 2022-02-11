import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from "./todopage.module.css" 
import TodoList from './todolist/todolist';
import { addAction } from '../../redux/actions/actionTodos';
import backImage from './img/back-button.svg'
import add from './img/add.svg'
import NavBar from '../NavBar';




const TodoPage = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [index, setIndex] = React.useState(1)
    const dispatch = useDispatch();
    const inputVal = React.useRef(null);
    const data = useSelector(state => state.todosReducer.items);
    const slicedData = data.slice(index*11-11, index*11)

// =====================Pagination=======
    const paginationLength = Math.ceil(data.length/11)
    const paginationArr = []
    for (let i=1; i<=paginationLength; i++) {
        paginationArr.push(i)
    } 
    console.log(paginationArr);

    const handlePaginationItem = (index) => {
        setIndex(index)
    }
    const handleButtonBack = () => {
        index > 2 ? setIndex(index-1) : setIndex(1)
    }
    const handleButtonForward = () => {
        index < paginationLength ? setIndex(index+1) : setIndex(paginationLength)
    }


//======================Pagination===============


    const handleAddNewItem = (event) => {
        dispatch(addAction(inputValue))
    }

    const handleInputChange =(event)=>{
        setInputValue(event.target.value)
    }



    return (
        <>
            <NavBar a={"Home"} links={""} />
            <div className={styles.todo__container}>

                <div className={styles.addNewItem__block}>
                    <div className={styles.addNewItem__input}>
                        <input ref={inputVal} onChange={handleInputChange} className={styles.addNewItem__input} type="text" />
                    </div>
                    <div className={styles.add__img}>
                        <img onClick={handleAddNewItem} src={add} alt="Добавить" /> 
                    </div>
                </div>
                <div className={styles.todolist__block}>
                    {slicedData && slicedData.map((obj, index,) => (
                        <div><TodoList obj={obj} index={index}/></div>
                    )     
                    )}
                </div>
                <div className={styles.pagination__block}>
                        <div onClick={handleButtonBack} className={styles.pagination__back}><img src={backImage} alt="" /></div>
                    { paginationArr && paginationArr.map((elem, index) => (
                        <div onClick={() => handlePaginationItem(index+1)} 
                            className={styles.pagination__item}><p>{elem}</p>
                        </div>
                    ))
                    }
                        <div onClick={handleButtonForward} className={styles.pagination__forward}><img src={backImage} alt="" /></div>
                </div>
            </div>
        </>
    );
};

export default TodoPage;