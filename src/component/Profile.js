import React from "react";

function Profile({count, profile}) {
    return (
        <div>
            <ul>
                <li>User ID : {count}</li>
                <li>Nom : {profile.name}</li>
                <li>Pseudo : {profile.username}</li>
                <li>Email : {profile.email}</li>
            </ul>
        </div>
    );
}

export default Profile;
