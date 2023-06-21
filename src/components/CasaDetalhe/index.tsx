import React, { useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native"
import { Casa } from "../CasaClass/Casa";
import { styles } from "./styles";
import Star from "../../assets/images/body/estrela.png"
import Heart from "../../assets/images/body/coracao-favorito.png"
import HeartFull from "../../assets/images/body/coracao-favorito-fill.png"

type Prop = {
    casa: Casa
}

const CasaDetalhe = (prop: Prop) => {
    const [clicked, setClicked] = useState<boolean>(false)

    const handleHeartPress = () => {
        setClicked(clicked ? false : true)
    }


    return (
        <View style={styles.conteiner}>
            <View>
                <TouchableOpacity activeOpacity={1} style={styles.heartTouchable} onPress={handleHeartPress}>
                    {clicked ? <Image source={HeartFull} style={styles.heart} /> : <Image source={Heart} style={styles.heart} />}
                </TouchableOpacity>
                <FlatList
                    data={prop.casa.urls}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <Image key={index} source={item} style={styles.image} />
                        )
                    }}
                />
            </View>
            <View style={{ gap: 3 }}>
                <View style={styles.locNotaView}>
                    <Text style={styles.stressedText}>{prop.casa.localizacao}</Text>
                    <View style={styles.starNotaView}>
                        <Image source={Star} style={styles.star} />
                        <Text style={styles.nota}>{prop.casa.nota}</Text>
                    </View>
                </View>
                <Text style={styles.regularText}>{prop.casa.distancia} km de distância</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.regularText}>{prop.casa.noites} noites •</Text>
                    <Text style={styles.regularText}> {prop.casa.periodo}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={[styles.stressedText, { textDecorationLine: 'underline' }]}>R${prop.casa.preco} </Text>
                <Text style={[styles.regularText, { opacity: 1, textDecorationLine: 'underline' }]}>total sem impostos</Text>
            </View>
        </View>
    )
}

export default CasaDetalhe;