import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

interface User {
  id: string;
  name: string;
  email: string;
}

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.user.name}</h1>
      <p>Email: {data?.user.email}</p>
    </div>
  );
};

export default UserProfile;