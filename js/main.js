import Category from './Category.js'
import Question from './Questions.js';


document.getElementById('form-filter').addEventListener('submit', (event) => {
    console.log("evento");
    event.preventDefault();
    const callQuestions=new Question();
    callQuestions.getQuestions();

});

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
const callCategory=new Category('https://opentdb.com/api_category.php');
callCategory.getCategory();
