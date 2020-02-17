import React from "react"
import { TextInput, View, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
    inputContiainer: {
        marginBottom: 10,
    },
    input: {
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "#5C5C5C",
        borderRadius: 4
    },
    inputError: {
        borderColor: "red"
    },
    error: {
        color: "red",
        fontSize: 12,
    },
})

export default (props) => (
    <View style={styles.inputContiainer}>
        <TextInput
            style={[
                styles.input, 
                props.error ? styles.inputError : {}
            ]}
            {...props}
        />
        {props.error &&
            <Text style={styles.error}>
                * {props.error}
            </Text>
        }
    </View>
)