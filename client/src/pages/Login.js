import {useState} from 'react'
import {Link} from  'react-router-dom'
function App() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  async function loginUser(event) { 
    event.preventDefault()
    
   const response=await fetch('http://localhost:1337/api/login',{
     method:'POST',
     headers:{
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email,
       password,
     }),
   })
   const  data =await response.json()
   if(data.user){
     localStorage.setItem('token',data.user)
     alert('Login successfull')
     window.location.href = '/dashboard'
     /*'https://app.powerbi.com/reportEmbed?reportId=0e9de80a-42bb-48df-a109-e7ff934616d3&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'*/
   }else{
     alert('Please check your username and password')
   }
   console.log(data)
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email" 
        placeholder="Email"/>
        <br/>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        placeholder="Password"/>
        <br/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default App;