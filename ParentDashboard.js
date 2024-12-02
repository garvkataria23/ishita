import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ParentDashboard = ({ logs }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "20%" }}>
            <h1>Welcome to the Parent Dashboard</h1>
            <p>Monitor your child's activity here!</p>
        </div>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 22, fontWeight: 'bold' },
});

export default ParentDashboard
;

