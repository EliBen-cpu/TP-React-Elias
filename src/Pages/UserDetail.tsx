import { useParams, Link } from 'react-router'
import usersData from '../assets/users.json'

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const userList = (usersData as any).users || usersData;

  // 1. Utilisateur de la page consultée
  const targetUser = userList.find((u: any) => String(u.id) === String(id));

  // 2. Utilisateur actuellement connecté
  const currentUser = JSON.parse(localStorage.getItem('user') || 'null');

  if (!targetUser) {
    return (
      <div className="user-details-card">
        <h2>Utilisateur non trouvé</h2>
        <Link to="/users">← Retour à l'annuaire</Link>
      </div>
    );
  }

  // 3. Vérification : est-ce qu'on regarde notre propre profil ?
  const isOwnProfile = currentUser && String(currentUser.id) === String(targetUser.id);

  const avatarUrl =
    targetUser.avatar ||
    targetUser.profilePicture ||
    targetUser.image ||
    `https://i.pravatar.cc/150?u=${targetUser.id}`;

  const formatValue = (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (key === 'address') return `${value.address || ''}, ${value.city || ''}`.trim();
      if (key === 'company') return value.name || JSON.stringify(value);
      return Object.values(value).filter((v) => typeof v !== 'object').join(', ');
    }
    return String(value);
  };

  // Clés toujours masquées (identifiants techniques et sécurité absolue)
  const systemKeys = ['id', 'username', 'avatar', 'profilePicture', 'image', 'password'];

  // Clés privées (masquées aux tiers, mais visibles par soi-même)
  const privateKeys = ['birthDate', 'address', 'company', 'gender', 'phone', 'age'];

  return (
    <div style={{ textAlign: 'left', maxWidth: '600px' }}>
      <Link to="/users" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500 }}>
        ← Retour à l'annuaire
      </Link>

      <div className="user-details-card" style={{ marginTop: '20px' }}>
        <div className="user-details-header">
          <img src={avatarUrl} alt={targetUser.username} className="user-avatar-large" />
          <div>
            <h3>{targetUser.username}</h3>
            {isOwnProfile && <span style={{ fontSize: '12px', color: 'green' }}>● Votre profil</span>}
          </div>
        </div>

        <div className="user-details-body">
          {Object.entries(targetUser).map(([key, value]) => {
            // Ignorer les identifiants techniques et le mot de passe
            if (systemKeys.includes(key) || value === undefined || value === null) {
              return null;
            }

            // Si c'est une donnée privée et qu'on N'EST PAS sur son propre profil => On la masque
            if (!isOwnProfile && privateKeys.includes(key)) {
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