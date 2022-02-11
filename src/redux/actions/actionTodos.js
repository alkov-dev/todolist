export const setTodos = (items) => ({
    type: 'SET_TODOS',
    payload: items,
})

export const addAction = (value) => ({
    type: 'ADD_NEW_ITEM',
    payload: value,
})

export const remove1Todo = (id) => ({
    type: 'REMOVE_1TODO',
    payload: id,
})

export const change1Todo = (obj) => ({
    type: 'CHANGE_1TODO',
    payload: obj,
})

export const completed = (obj) => ({
    type: 'COMPLETED',
    payload: obj,
})


