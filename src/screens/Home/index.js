import React, { useEffect, useState } from "react";
import Score from "../../components/Score";
import { FontAwesome5 } from "@expo/vector-icons";
import C from './style'
import { Modal, ScrollView } from "react-native";
import ActionsGame from "../../components/ActionsGame";

export default () => {

    const [playerName,setPlayerName] = useState('Jogador')
    const [modal,setModal] = useState(false)
    const [playGame,setPlayGame] = useState(false)
    const [scorePlayerValue,setScorePlayerValue] = useState(0)
    const [scoreComputerValue,setScoreComputerValue] = useState(0)
    const [userAction,setUserAction] = useState('❓')
    const [computerAction,setComputerAction] = useState('❓')
    const [textGame,setTextGame] = useState('Iniciar Jogo !')

    const SCORE_TO_WIN = 10

    const actions = [
        {value: 1, label: '✊',description: 'Rock'},
        {value: 2, label: '✋',description: 'Paper'},
        {value: 3, label: '✌️',description: 'Scissors'}
    ]

    const valueTypeEnum = {
        ROCK: 1,
        PAPER: 2,
        SCISSOR: 3
    }

    const handleClick = (value) => {
            setUserAction(value.label)
            const actionComputer = randomActionComputer()
            setComputerAction(actionComputer.label)
            checkWinner(value.value, actionComputer.value)
    }
    
    const startGame = () => {
        if(playerName === 'Jogador'){
            alert('Insira o nome do Jogador')
        } 
        if(playGame) return resetValues()
        if(playerName != 'Jogador')    
        setPlayGame(true)
        
    }

   const handleUserName = (value) => {
    if(!playGame){
        if(value == '') return setPlayerName('Jogador')
        setPlayerName(value)
    }
    
   }

   const randomActionComputer = () => {
    const number = Math.floor(Math.random() * actions.length)
    return actions[number]
   }

   useEffect(()=>{
    const checkVictory = () => {
        const playerWin = scorePlayerValue === SCORE_TO_WIN
        const computerWin = scoreComputerValue === SCORE_TO_WIN
        if(playerWin){
                alert('Voce venceu')
                resetValues()
        }
        if(computerWin){
            alert('Computador Venceu')
            resetValues()
        }
    }
    checkVictory()
   },[scorePlayerValue,scoreComputerValue])

   const checkWinner = (playerValue,computerValue) => {
        const playerRockWin = playerValue === valueTypeEnum.ROCK && computerValue === valueTypeEnum.SCISSOR
        const playerPaperWin = playerValue === valueTypeEnum.PAPER && computerValue === valueTypeEnum.ROCK
        const playerScissorWin = playerValue === valueTypeEnum.SCISSOR && computerValue === valueTypeEnum.PAPER

        const drawerResult = playerValue === computerValue
        const playerWin = playerRockWin || playerPaperWin || playerScissorWin

        if(drawerResult) return (setTextGame('Empate, Jogue Novamente !'))
        if(playerWin){
            setScorePlayerValue(((state)=>state+1))
            return setTextGame('Vitória, Jogue Novamente!')
        }
        setScoreComputerValue(((state)=>state+1))
        return setTextGame('Derrota, Jogue Novamente!')
   }

   const resetValues = () => {
        setTextGame('Iniciar o jogo')
        setPlayGame(false)
        setScorePlayerValue(0)
        setScoreComputerValue(0)
        setUserAction('❓')
        setComputerAction('❓')
   }


    return (
        <C.Container>
            <C.Title>JO KEN PO</C.Title>

            <C.InputNameArea>
                <C.InputName 
                    placeholder='Insira o nome de jogador'
                    onChangeText={(value)=>handleUserName(value)}
                    editable={!playGame}
                    selectTextOnFocus={!playGame}
                />
                <C.StartButton onPress={startGame}>
                    <C.StartButtonText>{`${!playGame ? 'Iniciar' : 'Parar'}`}</C.StartButtonText>
                </C.StartButton>
            </C.InputNameArea>

            <Score playerName={playerName} playerScore={scorePlayerValue} computerScore={scoreComputerValue} />

            <C.BoxIconArea>
                <C.BoxIcon>
                    <C.Icon>{userAction}</C.Icon>
                </C.BoxIcon>
                <C.BoxIcon>
                    <C.Icon>{computerAction}</C.Icon>
                </C.BoxIcon>
            </C.BoxIconArea>

            <C.GameInfo>
                <C.Text>{textGame}</C.Text>
                <C.Rules onPress={()=>setModal(!modal)}>
                    <C.RuleText>Regras</C.RuleText>
                </C.Rules>
            </C.GameInfo>
            <Modal
                visible={modal}
                animationType='fade'
                onRequestClose={()=>setModal(!modal)}
                transparent={true}
            >
                <C.Shadow>
                    <C.BoxTextArea>
                        <C.BoxText>
                            No jogo de Pedra, Papel, Tesoura, os jogadores devem simultaneamente esticar a mão, na qual cada um formou um símbolo  (que significa pedra, papel ou tesoura).{`\n`} 
                            Então, os jogadores comparam os símbolos para decidir quem ganhou, da seguinte forma:
                            – Pedra ganha da tesoura (amassando-a ou quebrando-a).{`\n`}
                            – Tesoura ganha do papel (cortando-o).{`\n`}
                            – Papel ganha da pedra (embrulhando-a).{`\n`}
                        </C.BoxText>
                    </C.BoxTextArea>
                </C.Shadow>

            </Modal>

            <ActionsGame actions={actions} onClick={(value)=>handleClick(value)} disabled={!playGame} />
            
        </C.Container>
    )
}