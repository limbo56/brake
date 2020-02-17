import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#E89A55",
        elevation: 0,
        padding: 12,
        borderRadius: 4
    },
    buttonText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 18
    }
})

export default ({ title, ...props }) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
)