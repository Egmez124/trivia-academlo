export default class Verify {
    constructor(){
        this.type=document.getElementById('type').value;
        this.quantaty=document.getElementById('questions-number').value;
        this.max=0;
    }

    check(){
        const formAnswers=[];
        if (this.type=='boolean')
            this.max=2;
        else
            this.max=4
        for(let i=0;i<this.quantaty;i++){
            for(let j=0;j<this.max;j++){
                if(document.getElementById(`answer-id-${i}-${j}`).checked){
                    if(j==document.getElementById(`answer-id-${i}-${j}`).name.slice(9,11)){
                        formAnswers.push('true')
                    }
                    else{
                        formAnswers.push('false')
                    }
                }
            }
        }
        const corectAnsers= formAnswers.filter(element=>element=='true')
        alert(`${corectAnsers.length} preguntas correctas de ${document.getElementById('questions-number').value}`)
    }   
}