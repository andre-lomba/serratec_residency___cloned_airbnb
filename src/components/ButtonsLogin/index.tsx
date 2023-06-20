import React from "react"
import { View, Text } from "react-native"
import Button from "../Button"
import { COLORS } from "../Color"
import EmailIcon from "../../assets/images/login/e-mail.png"
import FacebookIcon from "../../assets/images/login/facebook-logo-0.png"
import GoogleIcon from "../../assets/images/login/google-37.png"
import AppleIcon from "../../assets/images/login/apple-4.png"


const ButtonsLogin = () => {
    return (
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Button title="Continuar" image={null} />
            <Text style={{ color: COLORS.strongGrey }}>ou</Text>
            <Button title="Continuar com email" image={EmailIcon} />
            <Button title="Continuar com Facebook" image={FacebookIcon} />
            <Button title="Continuar com Google" image={GoogleIcon} />
            <Button title="Continuar com Apple" image={AppleIcon} />
        </View>
    )
}

export default ButtonsLogin