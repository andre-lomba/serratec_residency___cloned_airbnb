import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import Lupa from "../../assets/images/header/lupa_header_pesquisa.png"
import Filtro from "../../assets/images/header/filtro.png"
import { COLORS } from "../Color";

const Pesquisa = () => {
    const [click, setClick] = useState<boolean>(false)

    const handlePressIn = () => {
        setClick(true)
    }

    const handlePressOut = () => {
        setClick(false)
    }
    return (
        <TouchableOpacity
            style={[styles.container, click ? { backgroundColor: `${COLORS.regularLightGrey}` } : null]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={1}
        >
            <View style={styles.lupaView}>
                <Image source={Lupa} style={styles.lupa} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.title}>Para onde?</Text>
                <Text style={styles.subtitle}>Qualquer lugar - Qualquer semana - ...</Text>
            </View>
            <View style={styles.filtroView}>
                <View style={styles.filtoBorder}>
                    <Image source={Filtro} style={styles.filtro} />
                </View>
            </View>
        </TouchableOpacity>)
}

export default Pesquisa;