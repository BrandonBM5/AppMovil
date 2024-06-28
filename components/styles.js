import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;
const { width, height } = Dimensions.get('window');

export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#5E05CF',
    white: '#ffffff',
    green: '#108981',
    background: '#1F1D2B',
    red: '#DB4A39',
    LightGrey: '#D3D3D3',
    Slate: '#778899',
};

const { primary, secondary,Slate, tertiary, white, darkLight, background, brand, green, red, LightGrey } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 5%;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const PageLogo = styled.Image`
    width: ${width * 0.7}px;
    height: ${height * 0.2}px;
    margin-bottom: 10px;
`;

export const PageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 7px;
    margin-top: 20px;
    margin-bottom: 10px;

    ${(props) => props.welcome && `
        font-size: 28px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    margin-bottom: 10px;
margin-top: 10px;
    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
    max-width: 300px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 10px;
    font-size: 13px;
    height:48px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    border-width: 1px;
    border-color: ${LightGrey};
    color: 'black';
`;

export const StyledInputLabel = styled.Text`
    color: 'black';
    font-size: 12px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 50px;
    align-items: center;

    ${(props) => props.google == true && `
        background-color: ${green}; 
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 14px;

    ${(props) => props.google == true && `
    
        color: ${white};
        
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: red;
`;


export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 13px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 13px;
`;


export const DividerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-vertical: 10px;
`;

export const DividerLine = styled.View`
    flex: 1;
    height: 1px;
    background-color: ${LightGrey};
`;

export const DividerText = styled.Text`
    margin-horizontal: 10px;
    color: ${Slate};
    font-size: 13px;
`;