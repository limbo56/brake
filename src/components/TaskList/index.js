import React, { useEffect } from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { taskStore } from '~/stores/TaskStore'
import Header from './Header'
import { observer } from 'mobx-react'
import List from './List'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%'
    },
});

const TaskList = observer(() => {
    useEffect(() => {
        async function performFetch() {
            await taskStore.fetchTasks()
        }
        performFetch()
    }, [taskStore])

    renderContent = () => {
        switch (taskStore.status) {
            case "PENDING":
                return <Text> Loading your daily tasks </Text>
            case "DONE":
                return <List />
            case "ERROR":
                return <Text style={styles.error}>An error ocurred loading the tasks</Text>
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            {renderContent()}
        </View>
    )
})

export default TaskList