import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientButton({ title }) {
    return (
        <LinearGradient
            colors={['#220535', '#410040', '#540d33']}
            style={styles.containerButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 0 }}
        >
            <TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        borderRadius: 30,
        paddingVertical: 15,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 10,
        // shadowColor: 'white'
    }
})