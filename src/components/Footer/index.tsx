import React, { useState } from "react";
import { View, Text, Image } from "react-native"
import { styles } from "./styles";
import Lupa from "../../assets/images/footer/lupa.png"
import Heart from "../../assets/images/footer/coracao-favorito.png"
import Airbnb from "../../assets/images/footer/logo.png"
import Msg from "../../assets/images/footer/mensagens-de-texto.png"
import User from "../../assets/images/footer/do-utilizador.png"
import FooterIcons from "../FooterIcons";


const Footer = () => {
    const [focus, setfocus] = useState<string>("Explorar")
    const icons = [
        { name: "Explorar", image: Lupa },
        { name: "Favoritos", image: Heart },
        { name: "Viagens", image: Airbnb },
        { name: "Mensagens", image: Msg },
        { name: "Perfil", image: User }
    ]

    const handlePressFocus = (element: string) => {
        setfocus(element)
    }

    return (
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <FooterIcons key={index} name={icon.name} image={icon.image} focused={focus} onPress={() => { handlePressFocus(icon.name) }} />
            ))}
        </View>
    )
}

export default Footer;