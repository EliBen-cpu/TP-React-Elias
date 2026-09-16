import { Link } from 'react-router'
import usersData from '../assets/users.json'

interface User {
  id: number | string;
  username: string;
  avatar?: string;
  profilePicture?: string;
  image?: string;
  [key: string]: any;
}

function UserList() {
  const userList: User[] = (usersData as any).users || usersData

  return (
    <div className="annuaire-container">
      <h1>Annuaire des Utilisateurs</h1>
      <ul className="user-list">
        {Array.from(userList).map((user: User) => {
          
          const avatarUrl = user.avatar || user.profilePicture || user.image || `https://i.pravatar.cc/150?u=${user.id}`

          return (
            <li key={user.id} className="user-item">
              <Link 
                to={`/users/${user.id}`} 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <img
                  src={avatarUrl}
                  alt={user.username}
                  className="user-avatar-small"
                />
                <span className="user-name">{user.username}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserList