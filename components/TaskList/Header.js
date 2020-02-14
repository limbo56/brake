import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 12
    },
    title: {
        fontSize: 26,
        fontWeight: '500'
    }
});

export default () => (
    <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity>
            <Ionicons name={"ios-add"} size={38} />
        </TouchableOpacity>
    </View>
)