import React from "react";
import { View, Text } from "react-native"
import { styles } from "./styles";
import Pesquisa from "../Pesquisa";
import Categories from "../Categories";

const Header = () => {
    return (
        <View style={styles.container}>
            <Pesquisa />
            <Categories />
        </View>
    )
}

export default Header;