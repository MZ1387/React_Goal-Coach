import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDP4MH8jtRYMOsGx-MO1DePScddqE7LGoM",
  authDomain: "practice-78dee.firebaseapp.com",
  databaseURL: "https://practice-78dee.firebaseio.com",
  projectId: "practice-78dee",
  storageBucket: "practice-78dee.appspot.com",
  messagingSenderId: "937292436568"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
