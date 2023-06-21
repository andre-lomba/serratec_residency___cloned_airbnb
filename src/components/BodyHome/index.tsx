import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import CardPreco from "../CardPreco";
import CasaDetalhe from "../CasaDetalhe";
import { CASAS } from "../Casas";
import Mapa from "../Mapa";

const BodyHome = () => {
    return (
        <>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
            >
                <CardPreco />
                {CASAS.map((casa, index) => (
                    <CasaDetalhe key={index} casa={casa} />
                ))}
            </ScrollView>
            <Mapa />
        </>

    )
}

export default BodyHome;