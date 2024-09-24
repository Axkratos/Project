// src/components/UserHistoryDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MKBox from 'components/MKBox'; // Adjust path
import MKTypography from 'components/MKTypography'; // Adjust path
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

// Custom Card for displaying data
const DataCard = styled(MKBox)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
}));

const UserDataDisplay = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const email=localStorage.getItem('email')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/saved-data?email=${email}`); // Adjust URL as needed
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <MKTypography color="error">Error loading data</MKTypography>;

    return (
        <MKBox sx={{ padding: 4, maxWidth: 800, margin: 'auto' }}>
            <MKTypography variant="h4" gutterBottom>
                Saved User Data
            </MKTypography>
            <Divider sx={{ mb: 2 }} />
            {data.length > 0 ? (
                data.map((item, index) => (
                    <DataCard key={index}>
                        <MKTypography variant="h6" gutterBottom>
                            User Data #{index + 1}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Bedroom:</strong> {item.Bedroom}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Bathroom:</strong> {item.Bathroom}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Floors:</strong> {item.Floors}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Year:</strong> {item.Year}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Road Width:</strong> {item.RoadWidth}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Area (sqft):</strong> {item.Area_in_sqft}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Backyard:</strong> {item.Backyard ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Balcony:</strong> {item.Balcony ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Fencing:</strong> {item.Fencing ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Frontyard:</strong> {item.Frontyard ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Parking:</strong> {item.Parking || 'None'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Jacuzzi:</strong> {item.Jacuzzi ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Kids Playground:</strong> {item.KidsPlayground ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Lawn:</strong> {item.Lawn ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Modular Kitchen:</strong> {item.ModularKitchen ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Store Room:</strong> {item.StoreRoom ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Swimming Pool:</strong> {item.SwimmingPool ? 'Yes' : 'No'}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>City:</strong> {item.City}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Face:</strong> {item.Face}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Road Type:</strong> {item.RoadType}
                        </MKTypography>
                        <MKTypography variant="body1">
                            <strong>Prediction:</strong> {item.prediction}
                        </MKTypography>
                    </DataCard>
                ))
            ) : (
                <MKTypography>No data available</MKTypography>
            )}
        </MKBox>
    );
};

export default UserDataDisplay;