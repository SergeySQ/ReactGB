import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC12iWJuVPDWFfoBX1OcBChcKFhsjGa0lU",
	authDomain: "gb-chat-faac5.firebaseapp.com",
	projectId: "gb-chat-faac5",
	storageBucket: "gb-chat-faac5.appspot.com",
	messagingSenderId: "176108548497",
	appId: "1:176108548497:web:2e40680e3697b7e28b2a30",
	measurementId: "G-DMXBD5KQ11",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.database();
export const profileRef = db.ref("profile");
export const chatsRef = db.ref("chats");
export const messagesRef = db.ref("messages");
