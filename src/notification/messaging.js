import firebase from "../notification/firebase";

const messaging = firebase.messaging();

function setupNotification(){
    
    getToken((flag)=> {console.log("set Token ", flag)})
    
    messaging.onMessage((payload) => {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        /*const notificationTitle = 'Background Message Title';
        const notificationOptions = {
          body: 'Background Message body.',
          icon: '/firebase-logo.png'
        }; */
      
        //self.registration.showNotification(notificationTitle, notificationOptions);
      });
}

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BHyIMfO0vYPFRjZzob31FJ-w-fq65ltJzQf1XAeViM4fRJ8SX5UPTiiD2hSIRLT9SWveff7e8tp4NT2dhC7SVj0'}
    ).then((currentToken) => {
        console.log(currentToken)
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }


export default setupNotification;