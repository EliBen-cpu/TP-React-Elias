import { Link } from 'react-router'

function Profile() {
  
  const savedUser = localStorage.getItem('user')

  
  if (!savedUser) {
    return (
      <div>
        <h2>Vous n'êtes pas connecté.</h2>
        <Link to="/login">Aller à la page de connexion</Link>
      </div>
    )
  }

  
  const user = JSON.parse(savedUser)

  return (
    <div>
      <h1>Mon Profil</h1>
      <p><strong>Prénom :</strong> {user.firstName}</p>
      <p><strong>Nom :</strong> {user.lastName}</p>
      <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
    </div>
  )
}

export default Profile