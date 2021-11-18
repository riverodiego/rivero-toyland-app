
import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMfAjLkRuq09gtgz9_BNL69EhAlXihSSE",
    authDomain: "rivero-toyland-app.firebaseapp.com",
    projectId: "rivero-toyland-app",
    storageBucket: "rivero-toyland-app.appspot.com",
    messagingSenderId: "872310235770",
    appId: "1:872310235770:web:cc2142efdfc0c37cbfd1c3"
};


const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}
