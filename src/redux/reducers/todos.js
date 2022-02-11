const initialState = {
    items: [],
    isLoaded: false,
}

const todosReducer = (state = initialState, action) => {

    if (action.type === 'SET_TODOS') {
        return {
            ...state,
            items: action.payload,
        }
    }

    if (action.type === 'ADD_NEW_ITEM') {
        const newItems = [
            ...state.items,
        ]
        const newId = newItems[newItems.length-1].id+1
        const newTitle = action.payload;
        const items = newItems.unshift({id: newId, title: newTitle, completed: false})
        
        return {
            ...state,
            items: newItems,
        }
    }

    

    if (action.type === 'CHANGE_1TODO') {
        const newItems = [
            ...state.items,
        ]
        const arr = action.payload;
        const todoId = arr[0];
        const todoTitle = arr[1];
        let index = 0;
        for (let i=0; i<newItems.length; i++) {
            if (newItems[i].id === todoId) {
                index = i; 
                break;
            }
        }
        newItems[index].title = todoTitle

        return {
            ...state,
            items: newItems,
        }
    }

    if (action.type === 'COMPLETED') {
        const newItems = [
            ...state.items,
        ]
        const obj = action.payload;
        const todoId = obj.id;
        let index = 0;
        for (let i=0; i<newItems.length; i++) {
            if (newItems[i].id === todoId) {
                index = i; 
                break;
            }
        }
        newItems[index].completed = !obj.completed
        return {
            ...state,
            items: newItems,
        }
    }

    if (action.type === 'REMOVE_1TODO') {
        const newItems = [
            ...state.items,
        ]
        const arr = newItems.filter(elem => { 
           return elem.id !== action.payload
        })
        return{
            ...state,
            items: arr,
         }
    }
    return state
}

export default todosReducer