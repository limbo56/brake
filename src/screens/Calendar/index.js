import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },
    header: {
        width: '90%',
        margin: 'auto'
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
    }
})

export default () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Calendar</Text>
        </View>
        <Text>Display calendar</Text>
    </SafeAreaView>
)