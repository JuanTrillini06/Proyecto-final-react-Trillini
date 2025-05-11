import { getFirestore, collection, getDocs } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3uNwgnpqX9KVf0DWzyXKTsjM7zlh18rU",
  authDomain: "juandrobe.firebaseapp.com",
  projectId: "juandrobe",
  storageBucket: "juandrobe.firebasestorage.app",
  messagingSenderId: "426306804272",
  appId: "1:426306804272:web:c4e98cd8bd193a3257ebf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((product) => {
        products.push({
            id: product.id,
            ...product.data(),
        });
    });

    return products; // Retorna los productos en forma de array
}

getProducts();