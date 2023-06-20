import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../Color";
import { styles } from "./styles";
import { ClickableContext } from "../../context/ClickableContext";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../routes/StackNavigation/StackNavigation"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Props = {
    title: string;
    image: any;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Button = (props: Props) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [isActive, setIsActive] = useState(false);
    const { clickable } = useContext(ClickableContext)

    const handlePressIn = () => {
        setIsActive(true);
    };

    const handlePressOut = () => {
        setIsActive(false);
    };

    const handlePressNavigate = () => {
        if (clickable) {
            navigation.navigate('Home');
        }
    };

    return (
        <TouchableOpacity
            style={[styles.container,
            props.title === "Continuar" ?
                clickable ?
                    isActive ?
                        { borderWidth: 0, transform: [{ scale: 0.95 }], backgroundColor: "#dc0e34" }
                        : { borderWidth: 0, backgroundColor: COLORS.airbnbRedish }
                    : { borderWidth: 0, backgroundColor: COLORS.regularLightGrey }
                : isActive ?
                    { transform: [{ scale: 0.95 }], backgroundColor: "#e8e8e8" }
                    : null]}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={props.title === "Continuar" && clickable ? handlePressNavigate : () => { }}
        >
            <View style={styles.button}>
                {props.image !== null ? (
                    <View style={styles.viewImage}>
                        <Image style={styles.image} source={props.image} />
                    </View>
                ) : null}
                <View style={styles.viewText}>
                    <Text style={[styles.text, props.title === "Continuar" ? { color: "#fff" } : null]} >{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default Button;
