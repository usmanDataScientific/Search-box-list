let availableKeywords = [
    'HTML',
    'CSS',
    'JS',
    'Easy Tutorial',
    'Web design Tutorial',
    'JavaScript',
    'Where to learn Coading',
    'Where to learn web deigin',
    'Where to create Websites'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
          result = availableKeywords.filter((keyword) =>{
           return keyword.toLowerCase().includes(input.toLowerCase());
          });
          console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}



function display(result){
   const content = result.map((list) => {
    return "<li>" + list + "</li>";
   });
   resultsBox.innerHTML  = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}