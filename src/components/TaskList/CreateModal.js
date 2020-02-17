import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Modal from "~/components/Modal"
import Button from "~/components/Button"
import Input from "~/components/Input"
import IconButton from "~/components/IconButton"
import { observer } from "mobx-react"
import { taskStore } from "../../stores/TaskStore"

const styles = StyleSheet.create({
    modalHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
})

export default observer(({ visible, setVisible }) => {
    const [name, setName] = useState("")
    const [error, setError] = useState(null)

    onCreate = () => {
        if (name.trim() === "") {
            setError("Field must not be empty")
            return
        }

        if (taskStore.containsTask(name)) {
            setError("Task already exists")
            return
        }

        taskStore.addTask(name)
        closeModal()
    }

    closeModal = () => {
        setVisible(false)
        setName("")
        setError(null)
    }

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
        >
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Create Task</Text>
                <IconButton
                    icon="close"
                    size={24}
                    onPress={closeModal}
                />
            </View>
            <Input
                value={name}
                onChangeText={input => setName(input)}
                placeholder="Name"
                error={error}
            />
            <Button
                title="Create Task"
                onPress={onCreate}
            />
        </Modal>
    )
})