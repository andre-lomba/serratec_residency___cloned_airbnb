import React, { useState, useContext, useEffect } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { COLORS } from "../Color";
import { styles } from "./styles";
import { ClickableContext } from "../../context/ClickableContext";
import MaskInput from 'react-native-mask-input';

const InputsLogin = () => {
    const { setClickable } = useContext(ClickableContext)
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false)
    const mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    const handlePressInput = () => {
        setPasswordFocus(false);
        setInputFocus(true);
    }

    const handlePressPassword = () => {
        setInputFocus(false);
        setPasswordFocus(true);
    }

    const handleChangePhone = (value: string) => {

        setPhone(value)
        if (value.length === 15) {
            setInputFocus(false)
            password.length < 3 ? setPasswordFocus(true) : null;
        }
        if (value.length < 15) {
            setInputFocus(true);
        }
        if (value.length === 0) {
            setInputFocus(false);
        }
    }

    const handleChangePassword = (value: string) => {
        setPassword(value);
    }

    useEffect(() => {
        if (phone.length === 15 && password.length > 3) {
            setClickable(true);
        } else {
            setClickable(false);
        }
    }, [phone, password]);

    return (
        <View style={styles.inputsView}>
            <View style={[styles.box, inputFocus ? null : { borderBottomWidth: 1, borderColor: COLORS.regularLightGrey }]}>
                <View style={{ gap: 5 }}>
                    <Text style={{ fontSize: 12, color: `${COLORS.strongGrey}` }}>País/Região</Text>
                    <Text style={{ fontSize: 16 }}>Brasil ( +55 )</Text>
                </View>
                <Entypo name="chevron-small-down" size={33} color="black" />
            </View>

            <TouchableOpacity
                style={[styles.box, inputFocus ? styles.focus : passwordFocus ? null : { borderBottomWidth: 1, borderColor: COLORS.regularLightGrey }]} onPress={handlePressInput}>
                <View style={{ gap: 5, width: "90%" }}>
                    <Text
                        style={[{ color: `${COLORS.strongGrey}` },
                        inputFocus || phone.length > 0 ? { fontSize: 12 } : { fontSize: 16 }]}>Número de telefone</Text>

                    {inputFocus || phone.length > 0 ?
                        <MaskInput
                            keyboardType="phone-pad"
                            onChangeText={(masked) => {
                                handleChangePhone(masked)
                            }}
                            value={phone}
                            autoFocus={inputFocus}
                            onFocus={handlePressInput}
                            mask={mask}
                        />
                        : null}
                </View>
                {inputFocus || phone.length < 11 ? null : <Ionicons name="checkmark-sharp" size={23} color="black" />}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.box, passwordFocus ? styles.focus : null]} onPress={handlePressPassword}>
                <View style={{ gap: 5, width: "90%" }}>
                    <Text
                        style={[{ color: `${COLORS.strongGrey}` },
                        passwordFocus || password.length > 0 ? { fontSize: 12 } : { fontSize: 16 }]}>Senha</Text>

                    {passwordFocus || password.length > 0 ?
                        <TextInput
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={handleChangePassword}
                            value={password}
                            autoFocus={passwordFocus}
                            onFocus={handlePressPassword}
                        />
                        : null}
                </View>
                {password.length <= 3 ? null : <Ionicons name="checkmark-sharp" size={23} color="black" />}
            </TouchableOpacity>
        </View>
    )
}

export default InputsLogin;