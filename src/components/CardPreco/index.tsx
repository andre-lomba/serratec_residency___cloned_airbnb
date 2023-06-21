import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Check from "../../assets/images/body/check-mark-black-outline.png"

const CardPreco = () => {
    const [click, setClick] = useState<boolean>(false)

    const handleOnPress = () => {
        setClick(click ? false : true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.title}>Mostrar preço total</Text>
                <Text style={styles.subtitle}>Inclui todas as taxas, sem impostos</Text>
            </View>
            <View style={styles.checkView}>
                <TouchableOpacity
                    style={[styles.checkBar, click ? { alignItems: "flex-end", backgroundColor: "#000" } : null]}
                    activeOpacity={1}
                    onPress={handleOnPress}
                >
                    <View style={styles.checkBall}>
                        {click ? <Image source={Check} style={styles.check} /> : null}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardPreco;