let users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'Admin', status: 'Active' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'User', status: 'Inactive' },
];

let roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
];

export const fetchUsers = () => Promise.resolve(users);
export const fetchRoles = () => Promise.resolve(roles);

export const addUser = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return Promise.resolve(user);
};

export const updateUser = (updatedUser) => {
    users = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
    return Promise.resolve(updatedUser);
};

export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    return Promise.resolve();
};

export const addRole = (role) => {
    role.id = roles.length + 1;
    roles.push(role);
    return Promise.resolve(role);
};

export const updateRole = (updatedRole) => {
    roles = roles.map(role => (role.id === updatedRole.id ? updatedRole : role));
    return Promise.resolve(updatedRole);
};

export const deleteRole = (id) => {
    roles = roles.filter(role => role.id !== id);
    return Promise.resolve();
};