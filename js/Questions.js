export default class Question {
   
    getQuestions() {
        const questionsQuantity = document.getElementById('questions-number').value
        const questionsDifficulty = document.getElementById('questions-difficulty').value
        const questionCategory = document.getElementById('questions-category').value
        const questionType= document.getElementById('type').value
        fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${questionsDifficulty}&category=${questionCategory}&type=${questionType}`)
            .then(response => response.json())
            .then(data => this.printCards(data.results))
    }

    printCards(questions) {       
        const container = document.getElementById('container-cards');
        container.innerHTML = '';
        questions.forEach((question,index) => {
           
            container.innerHTML += `<section>
                                        <div class="card">
                                        <div class="card-body">
                                        <h5 class="card-title">${question.category}</h5>
                                        <h5 class="card-title">${question.difficulty}</h5>
                                        <h5 class="card-title">${question.type}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${question.question}</h6>
                                             ${this.returnAnswersHTML(question.correct_answer, question.incorrect_answers,index)}     
                      
                                        </div>
            
                                        </div>
                                    </section>`;
        });
        container.innerHTML+=`<button onclick="verify()" class="btn btn-primary">Comprobar</button>
                               `
    }
    
 
    getRandom(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }

    returnAnswersHTML(correct, incorrects,indexCard) {
    let randomIndex=0;
    if (document.getElementById('type').value==='boolean'){
        randomIndex=this.getRandom(0,2);
    }
    else{
        randomIndex=this.getRandom(0,4)
    }
    incorrects.splice(randomIndex,0,correct);
    let answersHtml = '';
    incorrects.forEach((incorrect,index) => {
        answersHtml += `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="choice-${indexCard}-${randomIndex}" id="answer-id-${indexCard}-${index}" value="${incorrect}" >
                            <label class="form-check-label" for="answer-id-${indexCard}-${index}">
                            ${incorrect}
                            </label>
                        </div>
                        `;
    })
    return  answersHtml;
}
}