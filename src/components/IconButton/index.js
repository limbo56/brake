import React from 'react'
import { TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default ({ icon, size = 8, color = "#5C5C5C", active = false, ...props }) => (
    <TouchableOpacity {...props}>
        <MaterialIcons
            style={{ opacity: active ? 0.2 : 1 }}
            name={icon}
            size={size}
            color={color}
        />
    </TouchableOpacity>
)