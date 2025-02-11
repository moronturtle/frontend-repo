'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from '../molecules/UserTable';
import Button from '../atoms/Button';
import EditUserModal from '../molecules/EditUserModal';
import Notification from '../atoms/Notification';

const DUMMY_USER = [
  { id: '2', name: 'gain', email: 'gain@gmail.com', age: '55' },
  { id: '1', name: 'test', email: 'test@gmail.com', age: '45' },
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState(false);

  //   const handleLoadUsers = () => {
  //     dispatch(addUsers([{ id: "2", name: "gain", email: "gain@gmail.com", age: "55" },
  //                         { id: "1", name: "test", email: "test@gmail.com", age: "45" }]));
  //   };

//   const handleLoadUsers = () => {
//     setUsers(DUMMY_USER as any);
//   };

  const handleLoadUsers = () => {
    setLoading(true);

    setTimeout(() => {
      setUsers(DUMMY_USER as any);
      setLoading(false);
    }, 2000);
  };


  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleSave = (user: any) => {
    // dispatch(updateUser(user));
    setOpenModal(false);
    setNotification(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex',marginBottom: '20px', width:'200px' }}>
        <Button  onClick={handleLoadUsers}>Fetch User Info</Button>
      </div>
      <UserTable loading={loading} users={users} onEdit={handleEdit} />
      <EditUserModal
        open={openModal}
        user={selectedUser}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />
      <Notification
        message="User updated successfully!"
        open={notification}
        onClose={() => setNotification(false)}
      />
    </div>
  );
};

export default UserList;
