import React from "react";
import { useDispatch } from 'react-redux'
import HomePage from "./components/homepage/homepage";
import TodoPage from "./components/todopage/todopage";
import { setTodos } from "./redux/actions/actionTodos"
import {getApiResource} from "./utils/network"
import { BrowserRouter, Route, Routes  } from 'react-router-dom'


function App() {
  const dispatch = useDispatch();
  const getResource = async () => {
    const res = await getApiResource()
    const data = res.map(({id, title, completed}) => {
        return {
            id,
            title,
            completed,
        }
    })
    dispatch(setTodos(data));
  }

  React.useEffect(() => {
    getResource()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/todo" exact element={<TodoPage/>} />
            <Route path="/" exact element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
