import {instituteRef,programRef,appInstituteTestingRef,createId} from './data'
import {pushToArray} from './mapping';
 
export function getInsitute(callback){
    instituteRef().onSnapshot(list=>{
        callback(pushToArray(list))
    })
}

export function getPrograms(instituteKey,callback){
    programRef(instituteKey).onSnapshot(snapshort=>{
        callback(pushToArray(snapshort))
    })
}

export function addTest(item,callback){
    item.key=createId()
    appInstituteTestingRef().doc(item.key).set(item).then(()=>{
        callback(true,null)
    }).catch(error=>{
        callback(false,error)
    })
}
    
     