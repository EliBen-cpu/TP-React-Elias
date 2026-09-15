import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <h1>user name is {username}</h1>
    </div>
  );
}

export default Profile;