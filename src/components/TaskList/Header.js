import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react';
import { taskStore } from '../../stores/TaskStore';
import IconButton from "~/components/IconButton"

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 26,
        fontWeight: "500"
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconButton: {
        marginLeft: 10,
    }
});

export default observer(() => (
    <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.actions}>
            <IconButton
                style={styles.iconButton}
                icon="add"
                onPress={() => taskStore.addTask("Test")}
                size={32}
            />
            <IconButton
                style={styles.iconButton}
                icon="edit"
                active={taskStore.edit}
                onPress={() => taskStore.toggleEdit()}
                size={28}
            />
        </View>
    </View>
))