// bugSolution.js
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  // Validate userId
  if (!userId || isNaN(parseInt(userId))) {
    return <p>Invalid user ID. Please navigate to a valid user profile.</p>;
  }

  // Fetch user data (replace with your actual data fetching)
  const userData = getUserData(userId);

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      {/* ... display userData ... */}
    </div>
  );
}

export default UserProfile; 