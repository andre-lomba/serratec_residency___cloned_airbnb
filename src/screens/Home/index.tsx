import React from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import BodyHome from "../../components/BodyHome";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent:"space-between" }}>
            <Header />
            <BodyHome />
            <Footer />
        </View>
    );
}
