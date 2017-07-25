/**
 * Created by trieutran on 7/25/17.
 */
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBNv6pgwRLPs0drTCEE_c09Ygwzm6KQvcc",
  authDomain: "goal-coach-43a83.firebaseapp.com",
  databaseURL: "https://goal-coach-43a83.firebaseio.com",
  projectId: "goal-coach-43a83",
  storageBucket: "goal-coach-43a83.appspot.com",
  messagingSenderId: "562114146652"
};

export const firebaseApp = firebase.initializeApp(config);
//export const goalRef = firebase.database().ref('goals');
//export const completeGoalRef = firebase.database().ref('completeGoals');