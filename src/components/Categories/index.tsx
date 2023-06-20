import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import Chales from "../../assets/images/header/chales.png"
import Quartos from "../../assets/images/header/quartos.jpeg"
import EmFrentePraia from "../../assets/images/header/em-frente-a-praia.png"
import Vistas from "../../assets/images/header/vistas-incriveis.png"
import Conteiners from "../../assets/images/header/conteiners.png"
import Mansoes from "../../assets/images/header/mansoes.png"
import Interior from "../../assets/images/header/no-interior.png"
import CasaArvore from "../../assets/images/header/casas-na-arvore.png"
import { styles } from "./styles";


const Categories = () => {
    const [active, setActive] = useState<string>("Chalés")

    const handlePressActive = (element: string) => {
        setActive(element)
    }

    const categories = [
        { image: Chales, name: "Chalés" },
        { image: Quartos, name: "Quartos" },
        { image: EmFrentePraia, name: "Em frente à praia" },
        { image: Vistas, name: "Vistas incríveis" },
        { image: Conteiners, name: "Contêiners" },
        { image: Mansoes, name: "Mansões" },
        { image: Interior, name: "No interior" },
        { image: CasaArvore, name: "Casas na árvore" }
    ]

    return (
        <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.container, active === item.name ? { opacity: 1, borderBottomWidth: 2 } : null]}
                        activeOpacity={1}
                        onPress={() => { handlePressActive(item.name) }}
                    >
                        <Image
                            source={item.image}
                            style={[styles.icon, item.name === "Quartos" ? { opacity: 0.8 } : null]} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>

                )
            }}
        />
    )
}

export default Categories;