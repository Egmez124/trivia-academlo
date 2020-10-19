export default class Rand {
    constructor(type){
        this.min=0;
        if (type=='boolean'){
            this.max=2;
        }
        if(type=='multiple'){
            this.max=4;
        }
    }

    randGenerator(){
        return Math.floor(Math.random()*(this.max-this.min)+this.min);
    }
}