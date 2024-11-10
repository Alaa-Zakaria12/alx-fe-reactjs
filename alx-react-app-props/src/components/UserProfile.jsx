import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    // استخدام useContext لجلب بيانات المستخدم
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>Age: {userData.age}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
};

export default UserProfile;