import React from "react";
import { TouchableOpacity, Image, Text } from "react-native"
import { styles } from "./styles";
import MiniMapa from "../../assets/images/body/mapa(inverter-cor-e-direcao).png"

const Mapa = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <Image source={MiniMapa} style={[styles.image, { tintColor: "#fff" }]} />
            <Text style={styles.text}>Mapa</Text>
        </TouchableOpacity>
    )
}

export default Mapa;