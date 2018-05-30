import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';
import { Alert } from 'react-native';

const registroEnFirebase = values => 
    autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());
    
const registroEnBaseDeDatos = ({uid, email, nombre, fotoURL }) => 
baseDeDatos.ref(`usuarios/${uid}`).set({
    nombre,
    email,
    fotoURL
});

const registroFotoCloydinary = ({imagen})=> {
    const { uri, type } = imagen;
    const splitName = uri.split('/');
    const name = [...splitName].pop();
    const foto = {
        uri,
        type,
        name
    }

    const formImagen = new FormData();
    formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
    formImagen.append('file', foto)
    return fetch(CONSTANTES.CLOUDINARY_NAME,{
        method:  'POST',
        body: formImagen
    })
    .then((response)=> response.json());
}

function* sagaRegistro(values){
    try {
        const imagen = yield select((state)=>  state.reducerImagenSignUp);
        const urlFoto = yield call(registroFotoCloydinary, imagen);
        const fotoURL = urlFoto.secure_url;
        const registro = yield call(registroEnFirebase, values.datos)
        const { email, uid } = registro;
        const { datos: { nombre } } = values;
        yield call(registroEnBaseDeDatos, {
             uid, email, nombre, fotoURL 
            });
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
                'Importante',
                'La dirección de correo electrónico ya está siendo utilizada por otra cuenta',
                [{text: 'OK'}]
            )
        } else if (error.code === 'auth/invalid-email') {
            error.alert(
                'Importante',
                'La dirección de correo electrónico está mal formateada',
                [{text: 'OK'}]
            )
        }
    }

}

const loginEnFirebase = ({correo, password}) =>
autenticacion.signInWithEmailAndPassword(correo, password).then(success => success.toJSON());

function* sagaLogin(values){
    try {
        console.log(values);
        const resultado = yield call(loginEnFirebase, values.datos);
        console.log(resultado);
    } catch (error) {
        if(error.code === 'auth/user-not-found'){
            Alert.alert(
                'Importante',
                'La dirección de correo electrónico no se encuentra registrada.',
                [{text: 'OK'}]
            )
        }

    }

}


export default function* funcionPrimaria(){
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
    // yield ES6
}