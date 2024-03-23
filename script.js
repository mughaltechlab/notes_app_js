const  notesContainer = document.querySelector('.notesContainer');
const createbtn = document.querySelector('.createbtn');
let notes = document.querySelectorAll('.inputBox');


if (localStorage.getItem('myNotes') != null ) {
    console.log('true');
    showNotes();
}

// showing  from localstorage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('myNotes');
}

// update myNotes in localstorage
function updateStorage(){
    localStorage.setItem('myNotes', notesContainer.innerHTML);
}

// creat note event
createbtn.addEventListener('click',()=>{
    // create elements :  p as inputbox and img as deleteBtn;
    let inputBox = document.createElement('p');
    let deleteBtn = document.createElement('img');
    inputBox.className = 'inputBox';
    inputBox.setAttribute('contenteditable','true');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.src = './images/delete.png'
    // append this inputBox into notesContainer and deleteBtn into inputBox;
    notesContainer.appendChild(inputBox).appendChild(deleteBtn);
});

// delete functionality
notesContainer.addEventListener('click',(e)=>{
    let myTarget = e.target;
    if (myTarget.tagName === 'IMG') {
        console.log(e.target);
        if (confirm("Are You Sure?")) {
            myTarget.parentElement.remove();
            updateStorage();
        }
    }else if(myTarget.tagName === 'P'){
        notes = document.querySelectorAll('.inputBox');
        notes.forEach((nt)=>{
            nt.onkeyup = ()=>{
                updateStorage();
            }
        });
    }
});

document.addEventListener('keydown', e =>{
    if (e.key === 'Enter') {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});