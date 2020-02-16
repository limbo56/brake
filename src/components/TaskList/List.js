import React from 'react'
import Task from '~/components/Task'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { observer } from 'mobx-react'
import { taskStore } from '../../stores/TaskStore'

export default observer(() => (
    <DraggableFlatList
        data={taskStore.tasks}
        renderItem={({ item, drag, index }) =>
            <Task
                edit={taskStore.edit}
                key={item.addedDate}
                drag={drag}
                deleteTask={() => taskStore.deleteTask(index)}
                {...item}
            />
        }
        keyExtractor={(item, index) => `task-${item.name}-${index}`}
        onDragEnd={({ data }) => taskStore.setTasks(data)}
        extraData={taskStore.edit}
    />
))