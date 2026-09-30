import React from 'react'
import{BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App=()=>{
    return (<div>
        <BrowserRouter>
        <Routes>
           <Route path="/login" exact component={Login} element={<Login/>}/>
           <Route path="/register" exact component={Register} element={<Register/>} />
           <Route path="/dashboard" exact component={Dashboard} element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App
