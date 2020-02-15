import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Task from '~/components/Task'
import Header from './Header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%'
    },
});

function getTasks() {
    return [
        {
            key: '1',
            name: "Go to meeting",
        },
        {
            key: '2',
            name: "Read 30 Minutes",
            completed: true
        }
    ]
}

const TaskList = () => {
    const [data, setData] = useState(getTasks())
    return (
        <View style={styles.container}>
            <Header />
            <DraggableFlatList
                data={data}
                renderItem={({ item, drag }) => <Task drag={drag} {...item} />}
                keyExtractor={(item, index) => `task-${item.name}-${index}`}
                onDragEnd={({ data }) => setData(data)}
            />
        </View>
    )
}

export default TaskList