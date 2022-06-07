import React from 'react';
import Layout from '../Layout/Layout';

// Context 
import { useUserContext } from '../Providers/context/user_context';


const Profile = () => {
    const { myUser } = useUserContext();
    console.log(myUser);

    if (myUser)
        return (
            <Layout>
                <h4>{myUser.name}</h4>
                <p>{myUser.email}</p>
            </Layout>
        );
};

export default Profile;