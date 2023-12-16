// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,ref,set } from "firebase/database";
import { getHWID } from 'hwid'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmshT28ClCBYeUtdOrAr0eT3As_lRt8zY",
  authDomain: "whitelisting-40df6.firebaseapp.com",
  databaseURL: "https://whitelisting-40df6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whitelisting-40df6",
  storageBucket: "whitelisting-40df6.appspot.com",
  messagingSenderId: "256928388251",
  appId: "1:256928388251:web:7e74140e8b27516f2aa23e",
  measurementId: "G-F50CGYHNXV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var links = ['https://link-hub.net/1042352/rig-test-whitelist-system','https://link-hub.net/1042352/rig-test-whitelist-system1','https://link-hub.net/1042352/rig-test-whitelist-system2'];

var interval = setInterval(redirect, 5000);

let index = 0

if (localStorage.getItem('idx')) {
    index = localStorage.getItem('idx')
} else {
    index = localStorage.setItem('idx',0)
}

var obj = document.getElementById("idkwhat")

if (index == 0) {
    obj.innerHTML = "1/3"
} else if (index == 1) {
    obj.innerHTML = "2/3" 
} else if (index == 2) {
    obj.innerHTML = "3/3" 
} else if (index == 3) {
    obj.innerHTML = "" 

    const id = await getHWID()

    set(ref(database, 'hwid/' ), {
        id
    });
}

console.log(index)

function redirect() {
    if (index == 0) {

    	if (Date.now() - localStorage.getItem('FSTimeOne') < 15000 || !localStorage.getItem('FSTimeOne')) {
    		if (!localStorage.getItem('FSTimeOne')) {
        		localStorage.setItem('FSTimeOne', Date.now());
                localStorage.removeItem("idx")
                localStorage.setItem("idx",1)
    		}
		} else if (Date.now() - localStorage.getItem('FSTimeOne') >= 15000) {
            window.location.href = links[index]
			
		}

    } else if (index == 1) {
        if (Date.now() - localStorage.getItem('FSTimeTwo') < 15000 || !localStorage.getItem('FSTimeTwo')) {
    		if (!localStorage.getItem('FSTimeTwo')) {
        		localStorage.setItem('FSTimeTwo', Date.now());
                localStorage.removeItem("idx")
                localStorage.setItem("idx",2)
    		}
		} else if (Date.now() - localStorage.getItem('FSTimeTwo') >= 15000) {
            window.location.href = links[index]
		} 
    } else if (index == 2) {
        if (Date.now() - localStorage.getItem('FSTimeThree') < 1000 || !localStorage.getItem('FSTimeThree')) {
    		if (!localStorage.getItem('FSTimeThree')) {
        		localStorage.setItem('FSTimeThree', Date.now());
                localStorage.removeItem("idx")
                localStorage.setItem("idx",3)
    		}
		} else if (Date.now() - localStorage.getItem('FSTimeThree') >= 1000) {
            window.location.href = links[index]
		} 
    } else if (index == 3) {
        localStorage.clear()
    }
        
 }