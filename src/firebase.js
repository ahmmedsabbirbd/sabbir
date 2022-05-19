import { initializeApp } from "firebase/app"; 

const App = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHOR_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID

  //   apiKey: "AIzaSyAg4vlAPO2CLVSGXVAayn5mmkDVR7w_QCg",
  // authDomain: "sabbir-4fd57.firebaseapp.com",
  // projectId: "sabbir-4fd57",
  // storageBucket: "sabbir-4fd57.appspot.com",
  // messagingSenderId: "691817680768",
  // appId: "1:691817680768:web:67cbb96e2d4926b7057b65",
  // measurementId: "G-GZGWZ8BQJ3"
});

// // export default App;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAg4vlAPO2CLVSGXVAayn5mmkDVR7w_QCg",
//   authDomain: "sabbir-4fd57.firebaseapp.com",
//   databaseURL: "https://todo-93547-default-rtdb.firebaseio.com",
//   projectId: "sabbir-4fd57",
//   storageBucket: "sabbir-4fd57.appspot.com",
//   messagingSenderId: "691817680768",
//   appId: "1:691817680768:web:67cbb96e2d4926b7057b65",
//   measurementId: "G-GZGWZ8BQJ3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getDatabase(app);
// export const auth = getAuth();