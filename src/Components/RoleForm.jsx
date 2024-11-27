import React, { useState, useEffect } from 'react';
import { addRole, updateRole } from '../API/TestApi';

const RoleForm = ({ role, onClose, onRefresh }) => {
    const [formData, setFormData] = useState({ name: '', permissions: [] });

    useEffect(() => {
        if (role) {
            setFormData(role);
        }
    }, [role]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "permissions") {
            const permissionsArray = Array.from(e.target.selectedOptions).map(option => option.value);
            setFormData({ ...formData, permissions: permissionsArray });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (role?.id) {
            await updateRole(formData);
        } else {
            await addRole(formData);
        }
        onRefresh();
        onClose();
    };

    return (
        <div className="modal">
            <h3>{role?.id ? 'Edit Role' : 'Add Role'}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Role Name" required />
                <select name="permissions" multiple value={formData.permissions} onChange={handleChange}>
                    {/* Example permissions */}
                    {['Read', 'Write', 'Delete'].map(permission =>
                        (<option key={permission} value={permission}>{permission}</option>)
                    )}
                </select>

                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default RoleForm;