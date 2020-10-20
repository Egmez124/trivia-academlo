export default class Category {
    constructor(url){
        this.url = url;
    
    }
 
    getCategory(){
        fetch(this.url)
        .then(response => response.json())
        .then(data => this.printCategory(data.trivia_categories))
    }
    
    printCategory (category) {
        const container = document.getElementById('questions-category');
        category.forEach(categorys => {
        container.innerHTML += `<option value="${categorys.id}">${categorys.name}</option>`;})
        
    }
    
}