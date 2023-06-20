import React, { useState } from "react";
import { TouchableOpacity, Text, Image, ImageSourcePropType, TouchableOpacityProps } from "react-native"
import { styles } from "./styles";
import { COLORS } from "../Color";

interface FooterIconsProps extends TouchableOpacityProps {
    name: string;
    image: ImageSourcePropType;
    focused: string;
}

const FooterIcons = ({ name, image, focused, ...rest }: FooterIconsProps) => {
    const [active, setActive] = useState<boolean>(false)

    const handlePressIn = () => {
        setActive(true)
    }

    const handlePressOut = () => {
        setActive(false)
    }

    return (
        <TouchableOpacity
            {...rest}
            style={[styles.container, active ?
                { backgroundColor: `${COLORS.regularLightGrey}` }
                : focused === name ?
                    { opacity: 1 }
                    : null]}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Image
                source={image}
                style={[styles.image, focused === name ? { tintColor: `${COLORS.airbnbRedish}` } : null]} />
            <Text
                style={[styles.text, focused === name ? { color: `${COLORS.airbnbRedish}` } : null]}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default FooterIcons;