import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../API/TestApi';

const UserForm = ({ user, onClose, onRefresh }) => {
    const [formData, setFormData] = useState({ username: '', email: '', role: '', status: 'Active' });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user?.id) {
            await updateUser(formData);
        } else {
            await addUser(formData);
        }
        onRefresh();
        onClose();
    };

    return (
        <div className="modal">
            <h3>{user?.id ? 'Edit User' : 'Add User'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" required />
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UserForm;