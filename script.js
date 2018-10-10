/* Task 1 */
var heading= document.getElementById('heading')
console.log(heading.innerText);

/* Task 2 using plain JavaScript */
var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click',function(event){
    var task2 =document.getElementById('task2a');
    
    task2.innerText="Hello Worl";
    var paragraph =document.createElement('p');
    
    paragraph.innerText="Hello Worl";
    task2.appendChild(paragraph);
    
});
//Task2b
function changeBGcolor(event){
    var body =document.getElementsByTagName('body')[0];
    body.style.backgroundColor=event.target.innerText
    //if(event.target.innerText=="red"){
        //body.style.backgroundColor='red';
   // }
    //if(event.target.innerText=="green"){
       // body.style.backgroundColor='green';
}


/* Task 4 using jQuery */
