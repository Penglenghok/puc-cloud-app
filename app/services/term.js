import {termRef} from './data'

export function getData(){
    termRef().onSnapshot(list=>{
        console.log(list.size);
    })
}