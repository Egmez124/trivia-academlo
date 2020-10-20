import Category from './Category.js';
import Question from './Questions.js';


document.getElementById('form-filter').addEventListener('submit', (event) => {
    console.log("evento");
    event.preventDefault();

    const callQuestions=new Question();
    callQuestions.getQuestions();

    const callCategory=new Category('https://opentdb.com/api_category.php');
    callCategory.getCategory();

});

<<<<<<< HEAD
const callCategory=new Category('https://opentdb.com/api_category.php');
callCategory.getCategory();


=======

const callCategory=new Category('https://opentdb.com/api_category.php');
callCategory.getCategory();

>>>>>>> 3b7d6ac8c2d314972cb8e8e4789c6fb311a643b3
