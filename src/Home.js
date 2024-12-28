import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetchUsers();
            setUsers(response.users);
        };
        getUsers();
    }, []);

    return (
        <div>
            <h1>Usuários Cadastrados</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
