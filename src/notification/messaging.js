import React from 'react';
import firebase from "../notification/firebase";
import axios from "axios";
import { Toast } from 'react-bootstrap';
import { connect } from 'react-redux';
import LivreurRx from '../reducer/livreur';


class NotificationManager extends React.Component {
  
  state = {
    show: true,
    title: "Information" ,
    message: "Bienvenue dans votre Back Office" 
  }

  constructor(){
    super();
    this.setupNotification()
  }

  showNotification = (show) => {
    this.setState({
      show: show,
    })
  }

  setupNotification = () => {
    let messaging = firebase.messaging();

    this.getToken((token)=> {  
      this.subscribeTokenToTopic(token, 'backoffice')
        .then(response => {
          console.log("Successfully topics <<backoffice>>");
        })
        .catch(error => {
          console.log("Error topics <<backoffice>>")
        })

    }, messaging );  
  
    messaging.onMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);

      //if is a notifcation
      if(payload.notification !== undefined){
        this.setState({
          show: true,
          title: payload.notification.title,
          message: payload.notification.body
        })
      }else{
        if(payload.data.action === "responseLocate"){ //Cas de réponse à un broadcast de locatiation des livreurs
          this.props.handleLocation(payload)
        }        
      }
      
    });
  }
  
  getToken = (callback, _messaging) => {
    return _messaging.getToken({vapidKey: 'BHyIMfO0vYPFRjZzob31FJ-w-fq65ltJzQf1XAeViM4fRJ8SX5UPTiiD2hSIRLT9SWveff7e8tp4NT2dhC7SVj0'}

    ).then((currentToken) => {
        console.log(currentToken)
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        callback(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        callback(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }
  
  subscribeTokenToTopic = (token, topic) => {
    axios.post('/backoffice/firebase/topic/subscribe', {topic : topic, token: token})
    .then(response => {
      console.log('Subscribed to "'+topic+'"');
      sessionStorage.setItem("firebase", token)
    }).catch(error => {
      console.log('Error subscribing to topic: '+ error.status + ' - ' + error.body)
      console.error(error);
    })
  }

  
  render(){
    return (this.state.show && 
      <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', right: '0', top: '50px', width:'350px', minHeight: '200px', }}>
        <div style={{ position: 'absolute', top: 0, right: 0, }} >
          <Toast show={this.state.show} onClose={() => this.showNotification(false)} delay={3000} autohide>
            <Toast.Header>
              <img src="http://placekitten.com/50/50" className="rounded mr-2"  alt="" />
              <strong className="mr-auto">{this.state.title}</strong>
            </Toast.Header>
            <Toast.Body>{ this.state.message }</Toast.Body>
          </Toast>
        </div>
    </div> )
  }
}

const handleLocation = LivreurRx.handleLivreurPosition
const mapDispatchToProps = {
  handleLocation
}

export default connect(undefined, mapDispatchToProps) (NotificationManager);