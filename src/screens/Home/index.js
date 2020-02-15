import React from 'react'
import TaskList from '~/components/TaskList'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
})

export default () => (
    <SafeAreaView style={styles.container}>
        <TaskList />
    </SafeAreaView>
)