import { action, observable, observe } from "mobx";
import { getInsitute,getPrograms,addTest } from '../services/institute'

export default class Institute {
    @observable data = [];
    @observable loading=false;
    @observable process=false;
    @observable institute=null;
    @observable program=[];
    @observable selectedProgram=null;

    @action
    registerTest(item,callback){
        this.process=true;
        addTest(item,(res,error)=>{
            this.process=false;
            callback(res,error)
        })
    }

    @action
    fetchSelectedProgram(item){
        this.selectedProgram=item;
    }

    @action
    fetchData() {
        this.loading=true;
        getInsitute(snpashort => {
            this.data = snpashort;
            this.loading=false;
        });
    }
    
    @action
    fetchInstitute(item){
        this.institute=item;
    }
    
    @action
    fetchProgram(){
        this.loading=true;
        getPrograms(this.institute.key,res=>{
            this.program=res;
            this.loading=false;
        })
    }
}