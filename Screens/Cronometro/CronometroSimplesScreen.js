// Filename - App.js

import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native-web";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Text } from "react-native-web";
//import CustomButton from '../../Components/CustomButton';


const CronometroSimplesScreen = () => {
    const Ref = useRef(null);
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false);

const rodar = () => {
    setRodando(!rodando);
};

    useEffect(() => {
        let interval;
        if (rodando) {
            interval = setInterval(() => {
                setTempo(prevTempo => prevTempo + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [rodando]);

    const resetar = () => {
        setTempo(0);
        setRodando(false);
    };

    const formatar = (emSegundos) => {
        const minutos =(String(Math.floor(emSegundos/60)).padStart(2,'0'));
        const segundos =(String(Math.floor(emSegundos%60)).padStart(2,'0'));
        return `${minutos}:${segundos}`
    }

    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.timeText}>{formatar(tempo)}</Text>
            <View style={StyleSheet.buttonsContainer}>
                <CustomButton title={rodando ? 'Pausar' : 'Iniciar'} onPress={rodar}> </CustomButton>
                <CustomButton title="Resetar" onPress={resetar} />
            </View>
        </View>
    )
}
export default CronometroSimplesScreen;
