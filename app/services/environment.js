import {environmentRef} from './data';
import {pushToObject} from './mapping';

export function getEnvironment(callback){
    environmentRef().onSnapshot(doc=>{
        callback(pushToObject(doc))
    })
}
