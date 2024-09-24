// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MKBox from 'components/MKBox'; // Adjust path
import MKTypography from 'components/MKTypography'; // Adjust path
import MKButton from 'components/MKButton'; // Adjust path
import UserModal from 'layouts/pages/landing-pages/Admin/modal'; // Adjust path

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/users'); // Adjust URL as needed
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const handleViewHistory = async (email) => {
    console.log('Fetching history for:', email); // Debugging log
    try {
      const response = await axios.get(`http://localhost:4000/api/saved-data?email=${email}`);
      console.log('History response:', response.data); // Debugging log
      if (response.data) {
        setUserHistory(response.data);
        setSelectedUser(email);
        setModalOpen(true);
      } else {
        console.log('No data returned for this email'); // Debugging log
      }
    } catch (err) {
      console.error('Error fetching user history:', err);
    }
  };

  if (loading) return <MKTypography>Loading...</MKTypography>;
  if (error) return <MKTypography color="error">Error loading users</MKTypography>;

  return (
    <MKBox sx={{ padding: 4, maxWidth: 1000, margin: 'auto' }}>
      <MKTypography variant="h4" gutterBottom>
        Admin Dashboard
      </MKTypography>
      {users.length > 0 ? (
        users.map(user => (
          <MKBox 
            key={user._id} 
            sx={{ 
              backgroundColor: 'background.paper', 
              borderRadius: 1, 
              boxShadow: 3, 
              padding: 2, 
              marginBottom: 2, 
              display: 'flex', 
              flexDirection: 'column' 
            }}
          >
            <MKTypography variant="h6" gutterBottom>
              {user.name}
            </MKTypography>
            <MKTypography variant="body1">
              <strong>Email:</strong> {user.email}
            </MKTypography>
            <MKTypography variant="body1">
              <strong>Date:</strong> {new Date(user.date).toLocaleDateString()}
            </MKTypography>
            <MKButton 
              color="primary" 
              onClick={() => handleViewHistory(user.email)}
              sx={{ marginTop: 2 }}
            >
              View History
            </MKButton>
            <MKButton 
              color="error" 
              onClick={() => handleDelete(user._id)}
              sx={{ marginTop: 2 }}
            >
              Delete
            </MKButton>
          </MKBox>
        ))
      ) : (
        <MKTypography>No users available</MKTypography>
      )}
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`History for ${selectedUser}`}
      >
        {userHistory.length > 0 ? (
          userHistory.map((historyItem, index) => (
            <MKBox key={index} sx={{ marginBottom: 2 }}>
              <MKTypography variant="body1">
                <strong>City:</strong> {historyItem.City}
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Bedroom:</strong> {historyItem.Bedroom}
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Bathroom:</strong> {historyItem.Bathroom}
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Floors:</strong> {historyItem.Floors}
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Year:</strong> {historyItem.Year}
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Area:</strong> {historyItem.Area_in_sqft} Sq. Feet
              </MKTypography>
              <MKTypography variant="body1">
                <strong>Price: Rs </strong> {historyItem.prediction}
              </MKTypography>
              {/* Add more fields as needed */}
            </MKBox>
          ))
        ) : (
          <MKTypography>No history available for this user</MKTypography>
        )}
      </UserModal>
    </MKBox>
  );
};

export default AdminDashboard;
