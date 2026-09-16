import { useParams, Link } from 'react-router'
import usersData from '../assets/users.json'

interface User {
  id: number | string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  birthDate?: string;
  password?: string;
  address?: {
    address?: string;
    city?: string;
    [key: string]: any;
  } | string;
  company?: {
    name?: string;
    [key: string]: any;
  } | string;
  avatar?: string;
  profilePicture?: string;
  image?: string;
  [key: string]: any;
}

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const userList: User[] = (usersData as any).users || usersData;

  const user = userList.find((u) => String(u.id) === String(id));

  if (!user) {
    return (
      <div className="user-details-card">
        <h2>Utilisateur non trouvé</h2>
        <Link to="/users">← Retour à l'annuaire</Link>
      </div>
    );
  }

  const avatarUrl =
    user.avatar ||
    user.profilePicture ||
    user.image ||
    `https://i.pravatar.cc/150?u=${user.id}`;

  
  const formatValue = (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (key === 'address') {
        return `${value.address || ''} ${value.city ? `, ${value.city}` : ''}`.trim() || JSON.stringify(value);
      }
      if (key === 'company') {
        return value.name || JSON.stringify(value);
      }
      return Object.values(value).filter((v) => typeof v !== 'object').join(', ');
    }
    return String(value);
  };

  
  const ignoredKeys = [
    'id',
    'username',
    'avatar',
    'profilePicture',
    'image',
    'role',
    'firstName',
    'lastName',
    'email',
    'password',
    'birthDate',
    'address',
    'company',
    'gender'
  ];

  return (
    <div style={{ textAlign: 'left', maxWidth: '600px' }}>
      <Link to="/users" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>
        ← Retour à l'annuaire
      </Link>

      <div className="user-details-card" style={{ marginTop: '20px' }}>
        <div className="user-details-header">
          <img
            src={avatarUrl}
            alt={user.username}
            className="user-avatar-large"
          />
          <div>
            <h3>{user.username}</h3>
          </div>
        </div>

        <div className="user-details-body">
          {user.firstName && (
            <p>
              <strong>FirstName :</strong> {user.firstName}
            </p>
          )}
          {user.lastName && (
            <p>
              <strong>LastName :</strong> {user.lastName}
            </p>
          )}
          {user.email && (
            <p>
              <strong>Email :</strong> {user.email}
            </p>
          )}
          
          {user.birthDate && (
            <p>
              <strong>BirthDate :</strong> {user.birthDate}
            </p>
          )}
          

          
          {Object.entries(user).map(([key, value]) => {
            if (ignoredKeys.includes(key) || value === undefined || value === null) {
              return null;
            }
            return (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)} :</strong> {formatValue(key, value)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;