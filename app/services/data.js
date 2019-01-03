import firebase from "react-native-firebase"

const db=firebase.firestore();

export function batch() {
    return db.batch()
}

export function createId() {
    return db.collection("institutes").doc().createId
}

export function termRef(){
    return db.collection("academics_term");
}


export function appInstituteTestingRef(){
    return db.collection("app_institutes_testing");
}

export function programRef(key){
    return db.collection("testType").where("institute.key","==",key).orderBy("order");
}

export function instituteRef(){
    return db.collection("institutes");
}

export function environmentRef(){
    return db.collection("academic_environment").doc("academic_environment")
}