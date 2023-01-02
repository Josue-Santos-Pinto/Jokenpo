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
    `
}