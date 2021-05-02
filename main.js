const addBtn = document.querySelector('.fa-plus-circle')
const popupDiv = document.querySelector('.popup-form')
const wordInput = document.querySelector('.word-input')
const addWordBtn = document.querySelector('.add-word')
const WordContainer = document.querySelector('.words-container')
const body = document.querySelector("body")


var wordsList = []

addBtn.addEventListener("click", (e) => {

  
      
  
   popupDiv.classList.remove('hide')

   body.style.backgroundColor = "#7389D5"
  
});

addWordBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const value = wordInput.value;
    
    // WordContainer.innerHTML += `<div class="word" >
    //          <p>${value}</p>
             
    //  </div>`

     const obj = {
         id : wordsList.length,
         value : value
     }

     wordsList.push(obj)
     displayWords(wordsList)
     wordInput.value = ""

     body.style.backgroundColor = "white"
     popupDiv.classList.add('hide')

})

function displayWords(wordsList) {
    WordContainer.innerHTML = ''
    wordsList.map(item => {

            WordContainer.innerHTML += `<div class="word" id=${item.id}>
             <p>${item.value}</p>
             <i class="fas fa-times"></i>
            </div>`
    })
}

WordContainer.addEventListener("click", e => {
    if(e.target.classList.contains('fa-times')){
        deleteWords(e)
    }
})

function deleteWords(e) {
   // console.log(e.target.parentNode.id)

    wordsList.map((item,index) => {
        if(item.id == e.target.parentNode.id){
            //console.log(item.id)
            wordsList.splice(index,1)
        }
    })
    displayWords(wordsList)
}
