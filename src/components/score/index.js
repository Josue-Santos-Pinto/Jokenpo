import React,{useEffect} from "react";
import styled from "styled-components/native";

const Container = styled.View`
    height: 220px;
    padding: 20px;
`
const Title = styled.Text`
    color: #FFF;
    font-size: 40px;
`
const ScoreArea = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`
const Score = styled.View`
    width: 40%;
    height: 60%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Name = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`
const Points = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`
const Text = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    margin: auto;
`

export default ({playerName,playerScore,computerScore}) => {

    playerName = playerName.length > 12 ? `${playerName.slice(0,8)}...` : playerName

    

    return (
        <Container>
            <Title>Placar</Title>
            <ScoreArea>

            {/* Player Score */}

                <Score>
                    <Name>{playerName}</Name>
                    <Points>{playerScore}</Points>
                </Score>

                <Text> X </Text>

            {/* Computer Score */}
                <Score>
                    <Name>Computador</Name>
                    <Points>{computerScore}</Points>
                </Score>

            </ScoreArea>
        </Container>
    )
}