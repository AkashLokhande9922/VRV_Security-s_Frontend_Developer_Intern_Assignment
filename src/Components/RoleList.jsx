import React, { useEffect, useState } from 'react';
import { fetchRoles, deleteRole } from '../API/TestApi';
import RoleForm from './RoleForm';

const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [editingRole, setEditingRole] = useState(null);

    useEffect(() => {
        loadRoles();
    }, []);

    const loadRoles = async () => {
        const data = await fetchRoles();
        setRoles(data);
    };

    const handleDelete = async (id) => {
        await deleteRole(id);
        loadRoles();
    };

    return (
        <div>
            <h2>Role Management</h2>
            <button onClick={() => setEditingRole({})}>Add Role</button>
            <table>
                <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(', ')}</td>
                            <td>
                                <button onClick={() => setEditingRole(role)}>Edit</button>
                                <button onClick={() => handleDelete(role.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingRole && (
                <RoleForm role={editingRole} onClose={() => setEditingRole(null)} onRefresh={loadRoles} />
            )}
        </div>
    );
};

export default RoleList;