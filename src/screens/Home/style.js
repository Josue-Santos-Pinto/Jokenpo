import styled from "styled-components/native";

export default {
    Container: styled.View`
        flex: 1;
        align-items: center;
        background-color: #333;
    `,
    Title: styled.Text`
        margin-top: 30px;
        font-size: 25px;
        color: #FFF;
    `,
    InputNameArea: styled.View`
        width: 100%;
        height: 200px;
        padding: 20px;
        margin-top: 10px;
    `,
    InputName: styled.TextInput`
        width: 90%;
        height: 60px;
        border-radius: 10px;
        background-color: #FFF;
        margin: auto;
        padding: 15px;
    `,
    StartButton: styled.TouchableOpacity`
        width: 90%;
        height: 60px;
        border-radius: 10px;
        background-color: #FFF;
        margin: auto;
        padding: 15px;
        justify-content: center;
        align-items: center;
    `,
    StartButtonText: styled.Text`
        font-size: 20px;
        font-weight: bold;
    `,
    BoxIconArea: styled.View`
        width: 100%;
        height: 50px;
        flex-direction: row;
        justify-content: space-around;
        margin-top: -20px;
        margin-bottom: 20px;
    `,
    BoxIcon: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    GameInfo: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    Text: styled.Text`
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
    `,
    Rules: styled.TouchableOpacity``,
    RuleText: styled.Text`
        color: #CCC;
        font-size: 15px;
        font-weight: bold;
    `,
    Shadow: styled.View`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
        justify-content: center;
        align-items: center;
    `,
    BoxTextArea: styled.View`
        width: 90%;
        height: 90%;
        padding: 15px;
        background-color: #FFF;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    `,
    BoxText: styled.Text`
        font-size: 20px;
        line-height: 35px;
    `,
    Icon: styled.Text`
        font-size: 40px;
    `
}