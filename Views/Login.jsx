import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView ,Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, RightIcon, StyledTextInput, StyledInputLabel, StyledButton, ButtonText, MsgBox, Lines, ExtraView, ExtraText, TextLink, TextLinkContent, Colors, DividerContainer,DividerLine,DividerText } from "../components/styles";
import { Formik } from 'formik';
import TecladoAvoid from "../components/TecladoAvoid";
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


import  {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

const { darkLight, primary,Slate } = Colors;



const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const [hasErrors, setHasErrors] = useState(false);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  
    const InicioSesion = () =>{

        if (!email.includes('@') || !email.includes('.com')) {
            setHasErrors(true);
            setErrorMessage('Ingresa un email válido');
            return;
        }

      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>{
          console.log('Se incio sesion exitosamente :)')
          const user = userCredential.user;
          console.log(user)
          setHasErrors(false)
          navigation.navigate('Welcome');
      })
      .catch((error) => {
        let errorMsg = '';
        setHasErrors(true);
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMsg = 'Email already in use!';
                break;
            case 'auth/invalid-email':
                errorMsg = 'Ingresa un email válido';
                break;
            case 'auth/missing-password':
                errorMsg = 'Ingresa la contraseña';
                break;
            case 'auth/invalid-credential':
                errorMsg = 'La contraseña es errónea';
                break;
            case 'auth/user-not-found':
                errorMsg = 'Usuario no encontrado';
                break;
            default:
                errorMsg = error.message;
        }
        console.log(error.code)
        setErrorMessage(errorMsg);
    });
  
  }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <TecladoAvoid style={{ flex: 1 }}>
                <StyledContainer style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <InnerContainer>
                            <PageTitle>CitaMax</PageTitle>
                            <PageLogo 
                                resizeMode="contain" 
                                source={require('../assets/Sin.png')} 
                            />

                            <SubTitle>Ingresa a tu cuenta</SubTitle>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                onSubmit={(values) => {
                                    console.log(values);
                                    navigation.navigate("Welcome"); 
                                }}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <StyledFormArea>
                                        <MytextInput
                                            icon="mail"
                                            placeholder="ejemplo@gmail.com"
                                            placeholderTextColor={darkLight}
                                            onChangeText={(text) => setEmail(text)}
                                            onBlur={handleBlur('email')}
                                            keyboardType="email-address"
                                        />

                                        <MytextInput
                                            icon="lock"
                                            placeholder="*************"
                                            placeholderTextColor={darkLight}
                                            onChangeText={(text) => setPassword(text)}
                                            onBlur={handleBlur('password')}
                                            secureTextEntry={hidePassword}
                                            isPassword={true}
                                            hidePassword={hidePassword}
                                            setHidePassword={setHidePassword}
                                        />

                                        {hasErrors &&
                                            <MsgBox >{errorMessage}</MsgBox>
                                            }
                                        <StyledButton onPress={InicioSesion}  style={{ marginTop: 10 }}>
                                            <ButtonText>Iniciar sesión</ButtonText>
                                        </StyledButton>

                                        <DividerContainer>
                                            <DividerLine />
                                            <DividerText>o continuar con</DividerText>
                                            <DividerLine />
                                        </DividerContainer>

                                        <StyledButton google={true}>
                                            <Fontisto name="google" color={primary} size={20} />
                                            <ButtonText google={true}> Google</ButtonText>
                                        </StyledButton>

                                        <ExtraView>
                                            <ExtraText>No tienes una cuenta?</ExtraText>
                                            <TextLink onPress={() => navigation.navigate('SignUp')}>
                                                <TextLinkContent> Crear una</TextLinkContent>
                                            </TextLink>
                                        </ExtraView>
                                    </StyledFormArea>
                                )}
                            </Formik>
                        </InnerContainer>
                    </ScrollView>
                </StyledContainer>
            </TecladoAvoid>
        </SafeAreaView>
    );
};

const MytextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={25} color={darkLight} />
            </LeftIcon>
            <StyledInputLabel color={darkLight}>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;
