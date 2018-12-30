import { action, observable, observe } from "mobx";
import { getEnvironment } from '../services/environment'

export default class Environment {
    @observable data = [];
    @observable loading=false;

    @action
    fetchData() {
        this.loading=true;
        getEnvironment(snpashort => {
            this.data = snpashort;
            this.loading=false;
        });
    }
}