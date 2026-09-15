import { useParams, Link } from 'react-router'
import usersData from '../assets/users.json'
import NotFound from './NotFound'

function UserDetail() {
  const { id } = useParams()
  
  const userList: any = (usersData as any).users || usersData
  const user = Array.from(userList).find((u: any) => u.id.toString() === id) as any


  if (!user) {
    return <NotFound />
  }

  return (
    <div>
      <Link to="/users">← Retour à l'annuaire</Link>
      <div style={{ marginTop: '20px' }}>
        <img src={user.image} alt={user.username} width="120" style={{ borderRadius: '50%' }} />
        <h2>{user.username}</h2>
      </div>
    </div>
  )
}

export default UserDetail