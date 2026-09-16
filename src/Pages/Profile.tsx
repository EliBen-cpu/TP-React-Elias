import { useNavigate } from 'react-router'

function Profile() {
  const navigate = useNavigate()
  
  
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const seDeconnecter = () => {
    localStorage.removeItem('user') 
    navigate('/login')              
  }

  if (!user) {
    return (
      <div>
        <h2>Vous n'êtes pas connecté</h2>
        <button onClick={() => navigate('/login')}>Aller à la page de connexion</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Mon Profil</h1>
      <p>Bienvenue, {user.username} !</p>
      
      <button onClick={seDeconnecter} style={{ marginTop: '20px' }}>
        Se déconnecter
      </button>
    </div>
  )
}

export default Profile