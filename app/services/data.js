import firebase from "react-native-firebase"

const db=firebase.firestore();

export function termRef(){
    return db.collection("academics_term");
}

export function environmentRef(){
    return db.collection("academic_environment").doc("academic_environment")
}