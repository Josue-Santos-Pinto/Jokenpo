import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 200px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`
const Action = styled.TouchableOpacity`
    width: 72px;
    height: 72px;
    border-radius: 36px;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    opacity: ${props=>props.disabled ? '0.6' : '1'};
    
`
const Icon = styled.Text`
    font-size: 40px;
`

export default ({actions,onClick,disabled}) => {
    return (
        <Container>
            {actions.map((action => (
                <Action 
                    key={action.value}
                    onPress={()=>onClick(action)}
                    disabled={disabled}
                    >
                    <Icon>{action.label}</Icon>
                </Action>
            )))}
        </Container>
    )
}
