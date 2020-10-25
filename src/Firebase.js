import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'chatapp-cohort10-noah', 
    apiKey: 'AIzaSyCp_N5SDtVtg-_gx9k5lAt-G7seV-i57xk',
    databaseURL: 'https://chatapp-cohort10-noah.firebaseio.com'
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;