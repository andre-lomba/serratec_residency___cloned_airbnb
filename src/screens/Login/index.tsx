import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../components/Color";
import Button from "../../components/Button";
import EmailIcon from "../../assets/images/login/e-mail.png"
import FacebookIcon from "../../assets/images/login/facebook-logo-0.png"
import GoogleIcon from "../../assets/images/login/google-37.png"
import AppleIcon from "../../assets/images/login/apple-4.png"
import InputsLogin from "../../components/InputsLogin";

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
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Button title="Continuar" image={null} />
                <Text style={{ color: COLORS.strongGrey }}>ou</Text>
                <Button title="Continuar com email" image={EmailIcon} />
                <Button title="Continuar com Facebook" image={FacebookIcon} />
                <Button title="Continuar com Google" image={GoogleIcon} />
                <Button title="Continuar com Apple" image={AppleIcon} />
            </View>
        </View>
    );
}