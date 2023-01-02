import React, { useState } from "react";
import Score from "../../components/score";
import C from './style'

export default () => {

    const [playerName,setPlayerName] = useState()

    return (
        <C.Container>
            <C.Title>JO KEN PO</C.Title>

            <C.InputNameArea>
                <C.InputName 
                    placeholder='Insira o nome de jogador'
                    value={playerName}
                    onChangeText={(e)=>setPlayerName(e)}
                />
                <C.StartButton>
                    <C.StartButtonText>Iniciar</C.StartButtonText>
                </C.StartButton>
            </C.InputNameArea>

            <Score playerName={'playerName'} playerScore={0} computerScore={0} />


        </C.Container>
    )
}