import { Link } from 'react-router'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page ou la ressource demandée n'existe pas.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  )
}

export default NotFound