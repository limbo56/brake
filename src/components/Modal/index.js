import React from "react"
import { StyleSheet, Modal, View } from "react-native"

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(128,128,128,0.40)",
        width: "100%"
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        width: "80%",
        padding: 20,
        borderRadius: 8,
        elevation: 1
    },
})

export default (props) => (
    <Modal {...props}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                {props.children}
            </View>
        </View>
    </Modal>
)