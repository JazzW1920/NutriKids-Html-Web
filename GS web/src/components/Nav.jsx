import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css';


function Nav() {
  
    //Hook -useState
    const[userLogado]=
    useState(JSON.parse(sessionStorage.getItem('usuarioLogado')))


    const handleLogout =()=>{
        sessionStorage.removeItem("usuarioLogado");
        window.location.reload();
    }

  return (
    <>

    <Link className='linkNav home' to="/">Home</Link>  
    <Link className='linkNav login' to="/login">Login</Link>
    <Link className='linkNav API' to="/api">API</Link>

    <div style={userLogado == null ? {display:"none"}:{display:"block"}}>
      <div className="navLogado">
        <p className='usuario'>{userLogado !=null ? `Usuario Logado: ${userLogado.usuario}`:""}</p>
        <button className='btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
    </>
  )
}

export default Nav