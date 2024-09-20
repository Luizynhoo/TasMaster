import { initializeApp } from 'firebase/app'
//Importando a conexão com o banco
import { getFirestore } from 'firebase/firestore'
//Sistema de autenticação
import { getAuth } from 'firebase/auth'

//Chave do banco
const firebaseConfig = {
    apiKey: "AIzaSyAgvXMt9H2OjWVMM2tPowIznqZ-lYkQlV8",
    authDomain: "aprendendo-4e961.firebaseapp.com",
    projectId: "aprendendo-4e961",
    storageBucket: "aprendendo-4e961.appspot.com",
    messagingSenderId: "1041532446984",
    appId: "1:1041532446984:web:78942cfdec9f57eb2924bd",
    measurementId: "G-K8SWSC3RE9"
};

//Inicializando FireBase
const firebaseapp = initializeApp(firebaseConfig);

//db = nosso banco aqui !
const db = getFirestore(firebaseapp);

//auth o sistema que liga ao banco para cadastros
const auth = getAuth(firebaseapp)

//exportando o nosso banco para poder utiliza-lo
export { db, auth};
