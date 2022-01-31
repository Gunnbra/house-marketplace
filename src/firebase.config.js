import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCm6uVvIFtFJVX66wohC01cBl0fHMKdNSA',
  authDomain: 'house-marketplace-app-2f278.firebaseapp.com',
  projectId: 'house-marketplace-app-2f278',
  storageBucket: 'house-marketplace-app-2f278.appspot.com',
  messagingSenderId: '78112252304',
  appId: '1:78112252304:web:260053d440b7facd909315',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
