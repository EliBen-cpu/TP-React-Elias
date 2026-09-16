import { useState } from 'react'
import { useNavigate } from 'react-router'
import usersData from '../assets/users.json'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function seConnecter() {
    const liste = (usersData as any).users

    for (let i = 0; i < liste.length; i++) {
      if (liste[i].username === username && liste[i].password === password) {
        
        localStorage.setItem('user', JSON.stringify(liste[i]))
        navigate('/profile')
        return
      }
    }

    
    alert('Identifiants incorrects')
  }

  return (
    <div>
      <h1>Connexion</h1>

      <input 
        type="text" 
        placeholder="Identifiant" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br /><br />
      <input 
        type="password" 
        placeholder="Mot de passe" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br /><br />
      <button onClick={seConnecter}>Se connecter</button>
    </div>
  )
}

export default Login