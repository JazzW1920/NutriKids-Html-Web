import {useState} from 'react';
import './Login.css';


function Login() {

//Hook- useState

const [usuario, setUsuario]=useState({
    usuario:"",
    senha:"",
})
//função para pegar os dados passando em name e value 

const handleChange = async (e)=>{
    const {name,value}=e.target;
    setUsuario({...usuario,[name]:value})
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if (response.ok) {
                const users = await response.json();

                user = users.find(
                    (use) =>
                        use.usuario === usuario.usuario && String(use.senha) === usuario.senha
                );

                if (user) {
                    sessionStorage.setItem("usuarioLogado", JSON.stringify(user));

                    setTimeout(() => {
                        window.location = "/";
                    }, 3000);
                } else {
                    alert("Usuário e senha inválidos");
                    setUsuario({
                        usuario: "",
                        senha: "",
                    });
                    window.location = "/login";
                }
            }
        } catch (error) {
            console.log(error);
        }

    };


  return (
    <>
    <div className="containerLogin">
        <h1 className='login'>Login</h1>
        <form className='formLogin' onSubmit={handleSubmit}>

            <div>
                <label className='labelLogin' htmlFor="idUsuario">Usuário:</label>
                <input className='inputLogin'
                type="text"
                name="usuario"
                value={usuario.usuario}
                placeholder="Digite seu usuario"
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="idSenha">Senha:</label>
                <input className='inputLogin'
                type="password"
                name="senha"
                value={usuario.senha}
                placeholder="Digite sua senha"
                onChange={handleChange}
                />
            </div>
            <button className='logar' type="submit">Logar</button>

        </form>
    </div>  
    </>
  )
}

export default Login