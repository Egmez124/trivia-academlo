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
    questions.forEach(question => {
        const card = returnCardHTML(question);
        container.innerHTML += card;
    });
}

function printCategory (category) {
    const container = document.getElementById('questions-category');
    category.forEach(categorys => {
    container.innerHTML += `<option value="${categorys.id}">${categorys.name}</option>`;})
}

function returnCardHTML(q) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h5 class="card-title">${q.difficulty}</h5>
                    <h5 class="card-title">${q.type}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers)}           
                    </div>
                </div>`
    return card;
}

function returnAnswersHTML(correct, incorrects) {
    const correctHTML = `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${correct}
                            </label>
                        </div>`;

    let incorrectHTML = '';
    incorrects.forEach((incorrect) => {
        incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${incorrect}
                            </label>
                        </div>`;
    })
    return correctHTML + incorrectHTML;
}

getCategory();