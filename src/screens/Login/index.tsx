import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../components/Color";
import InputsLogin from "../../components/InputsLogin";
import ButtonsLogin from "../../components/ButtonsLogin";

export default function Login() {
    const [closeClick, setCloseClick] = useState<boolean>(false)

    const handleClickCloseIn = () => {
        setCloseClick(true);
    }

    const handleClickCloseOut = () => {
        setCloseClick(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.close, closeClick ? { backgroundColor: "#e8e8e8" } : null]}
                onPressIn={handleClickCloseIn}
                onPressOut={handleClickCloseOut}
                activeOpacity={1}>
                <Ionicons name="ios-close" size={28} color={COLORS.strongGrey} />
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>Entre ou cadastre-se no Airbnb</Text>
            </View>
            <View style={{ gap: 7 }}>
                <InputsLogin />
                <Text style={{ fontSize: 12 }}>
                    Ligaremos ou enviaremos uma mensagem para confirmar seu número. Tarifa padrão de dados e mensagens poderão ser aplicadas.
                </Text>
            </View>
            <ButtonsLogin />
        </View>
    );
}