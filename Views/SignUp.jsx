import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, RightIcon, StyledTextInput, StyledInputLabel, StyledButton, ButtonText, MsgBox, Lines, ExtraView, ExtraText, TextLink, TextLinkContent, Colors, DividerContainer, DividerLine, DividerText } from '../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import TecladoAvoid from "../components/TecladoAvoid";
//Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

//FIREBASE
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "../firebaseConfig";

const { brand, darkLight, primary, Slate } = Colors;

const SignUp = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //Creacion de usuario
    const CreacionUsuario = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                console.log('Cuenta creada')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('Welcome');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <TecladoAvoid style={{ flex: 1 }}>
                <StyledContainer style={{ flex: 1, marginTop: 40 }}>
                    <InnerContainer>
                        <PageTitle>Crear Cuenta</PageTitle>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}

                        <Formik
                            initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
                            onSubmit={(values) => {
                                CreacionUsuario(values);
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <StyledFormArea>
                                    <MytextInput
                                        label="Nombre"
                                        icon="person"
                                        placeholder="Nombre"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        value={values.fullName}
                                    />

                                    <MytextInput
                                        label="Correo electrónico"
                                        icon="mail"
                                        placeholder="ejemplo@email.com"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        keyboardType="email-address"
                                        value={values.email}
                                    />

                                    <MytextInput
                                        label="Fecha de Nacimiento"
                                        icon="calendar"
                                        placeholder="YYYY - MM - DD"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('dateOfBirth')}
                                        onBlur={handleBlur('dateOfBirth')}
                                        value={dob ? dob.toDateString() : ''}
                                        isDate={true}
                                        editable={false}
                                        showDatePicker={showDatePicker}
                                    />

                                    <MytextInput
                                        label="Contraseña"
                                        icon="lock"
                                        placeholder="*************"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                        value={values.password}
                                    />

                                    <MytextInput
                                        label="Confirmar Contraseña"
                                        icon="lock"
                                        placeholder="*************"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur('confirmPassword')}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                        value={values.confirmPassword}
                                    />

                                    <MsgBox>...</MsgBox>
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>
                                            Registrarse
                                        </ButtonText>
                                    </StyledButton>

                                    <DividerContainer>
                                        <DividerLine />
                                        <DividerLine />
                                    </DividerContainer>

                                    <ExtraView>
                                        <ExtraText>¿Ya tienes cuenta?</ExtraText>
                                        <TextLink onPress={() => navigation.navigate('Login')}>
                                            <TextLinkContent> Iniciar Sesión</TextLinkContent>
                                        </TextLink>
                                    </ExtraView>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </InnerContainer>
                </StyledContainer>
            </TecladoAvoid>
        </SafeAreaView>
    );
};

const MytextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={25} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={25} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default SignUp;
