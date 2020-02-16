import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import IconButton from "~/components/IconButton"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlignVertical: 'center',
        width: '100%',
        padding: 14,
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 6,
        marginTop: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        opacity: 0.85,
    },
    completed: {
        backgroundColor: 'green',
    },
    pending: {
        backgroundColor: '#B22222',
        elevation: 1,
    },
    name: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '400'
    },
})

const Task = ({ name, completed, drag, deleteTask, edit }) => {
    return (
        <View style={[styles.container, completed ? styles.completed : styles.pending]}>
            <Text style={styles.name}>{name}</Text>
            {edit ? (
                <IconButton
                    icon="delete"
                    onPress={deleteTask}
                    size={32}
                    color="#FFFFFF"
                />
            ) : (
                <IconButton
                    icon="menu"
                    onLongPress={drag}
                    delayLongPress={0}
                    animated={false}
                    size={32}
                    color="#FFFFFF"
                />
            )}
        </View>
    )
}

Task.defaultProps = {
    completed: false
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Task

