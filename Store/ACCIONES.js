import CONSTANTES from "./CONSTANTES";

export const actionRegistro = values => ({
    type: CONSTANTES.REGISTRO,
    datos: values
});

export const actionLogin = values => ({
    type: CONSTANTES.LOGIN,
    datos: values
});

export const actionEstablecerSesion = usuario => ({
    type: CONSTANTES.ESTABLECER_SESION,
    usuario
});

export const actionCerrarSesion = () => ({
    type: CONSTANTES.CERRAR_SESION
});

export const actionCargarImagenSignUp = (imagen) => ({
    type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
    imagen
});

export const actionLimpiarImagenSignUp = () => ({
    type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP
});