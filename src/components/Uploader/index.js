import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { Container, Title, Text, Spacer, Button, Cover } from '../../styles';
import util from '../../util/util';
import { colors } from '../../styles/theme.json'

const Uploader = ({ callback, image = null }) => {

    const requestAccess = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permissão negada.',
                'Desculpe, mas precisamos acessar suas fotos.',
                [
                    {
                        text: 'Permitir Acesso',
                        onPress: () => {
                            requestAccess();
                        },
                        style: 'cancel',
                    },
                    {
                        text: 'Cancelar',
                    },
                ]
            );
        }
    };

    useEffect(() => {
        requestAccess();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        callback(result);
    };

    return (
        <>
            {image
                ? <Cover
                    width='100%'
                    height='230px'
                    radius='5px'
                    source={{ uri: image }}
                    mode='cover'
                    justify='flex-end'
                    hasPadding
                >
                    <Button
                        block
                        onPress={() => pickImage()}
                    >
                        Substituir Imagem
                    </Button>

                </Cover>
                : <Container
                    hasPadding
                    background={util.toAlpha(colors.light, 35)}
                    justify='flex-end'
                    align='center'
                    height='230px'
                >
                    <>
                        <Icon name='image' size={70} color={util.toAlpha(colors.light, 95)} />
                        <Spacer />
                        <Title small color='light'>Selecione uma imagem</Title>
                        <Text small>Clique para abrir a galeria</Text>
                        <Spacer />
                    </>

                    <Button
                        block
                        onPress={() => pickImage()}
                    >
                        Abrir Galeria
                    </Button>

                </Container>
            }
        </>
    )
}

export default Uploader;