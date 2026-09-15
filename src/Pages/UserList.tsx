import { Link } from 'react-router'
import usersData from '../assets/users.json'

function UserList() {
  const userList: any = (usersData as any).users || usersData

  return (
    <div>
      <h1>Annuaire des Utilisateurs</h1>
      <ul>
        {Array.from(userList).map((user: any) => (
          <li key={user.id} style={{ marginBottom: '8px' }}>
            <Link to={`/users/${user.id}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList