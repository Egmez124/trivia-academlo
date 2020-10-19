import Category from './Category.js';
import Question from './Questions.js';


document.getElementById('form-filter').addEventListener('submit', (event) => {
    console.log("evento");
    event.preventDefault();
    const callQuestions=new Question();
    callQuestions.getQuestions();

});


const callCategory=new Category('https://opentdb.com/api_category.php');
callCategory.getCategory();

