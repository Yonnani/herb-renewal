/* eslint-disable */
const firebaseScript = document.createElement('script');
firebaseScript.setAttribute('src','https://www.gstatic.com/firebasejs/5.4.2/firebase.js');
document.head.appendChild(firebaseScript);
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBMNx91fPiaXNR3tRXWez5zyIrTbw-8BCE",
    authDomain: "herbdongsan-noticeboard.firebaseapp.com",
    databaseURL: "https://herbdongsan-noticeboard.firebaseio.com",
    projectId: "herbdongsan-noticeboard",
    storageBucket: "",
    messagingSenderId: "920708035047"
};
firebase.initializeApp(config);
const database = firebase.database();
export default database;