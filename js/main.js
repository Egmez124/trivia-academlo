function getQuestions() {
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsDifficulty = document.getElementById('questions-difficulty').value
    const questionCategory = document.getElementById('questions-category').value
    const questionType= document.getElementById('type').value
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${questionsDifficulty}&category=${questionCategory}&type=${questionType}`)
        .then(response => response.json())
        .then(data => printCards(data.results))
}

function getCategory() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(response => response.json())
        .then(data => printCategory(data.trivia_categories))
}

function printCards(questions) {       
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question,index) => {
        const card = returnCardHTML(question,index);
        container.innerHTML += `<section>
                                ${card}
                                </section>`;
    });
    container.innerHTML+=`<button onclick="verify()" class="btn btn-primary">Comprobar</button>
                           `
}

function printCategory (category) {
    const container = document.getElementById('questions-category');
    category.forEach(categorys => {
    container.innerHTML += `<option value="${categorys.id}">${categorys.name}</option>`;})
}

function returnCardHTML(q,indexCard) {
    const card = ` 
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h5 class="card-title">${q.difficulty}</h5>
                    <h5 class="card-title">${q.type}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers,indexCard)}     
                              
                    </div>
                    
                </div>
                `
    return card;
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function returnAnswersHTML(correct, incorrects,indexCard) {
    let randomIndex=0;
    if (document.getElementById('type').value==='boolean'){
        randomIndex=getRandom(0,2);
    }
    else{
        randomIndex=getRandom(0,4)
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
function verify(){
    const formAnswers=[];
    for(let i=0;i<document.getElementById('questions-number').value;i++){
        for(let j=0;j<4;j++){
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
    //console.log(document.getElementsByName('choice-0'))
}

getCategory();