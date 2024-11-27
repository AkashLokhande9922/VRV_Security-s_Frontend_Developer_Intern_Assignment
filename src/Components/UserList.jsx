import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../API/TestApi';
import UserForm from './UserForm';
import './Css/UserList.css'
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h2>User Management</h2>
            <button onClick={() => setEditingUser({})}>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick={() => setEditingUser(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <UserForm user={editingUser} onClose={() => setEditingUser(null)} onRefresh={loadUsers} />
            )}
        </div>
    );
};

export default UserList;