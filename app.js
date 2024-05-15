const btnSubmit = document.getElementById("submitBtn")
const txtSearch = document.getElementById("searchText");




const colorSearch = {
    colors: ['orange', 'green', 'blue', 'red', 'sky blue', 'purple', 'cherry red'],

}

function checkInput(){
    const txtInputValue = txtSearch.value
    for(let color of colorSearch.colors){
        if(txtInputValue === color){
            return true;
        } else if(!txtInputValue === color){
            return false;
        }
    }
}


btnSubmit.addEventListener('click', checkInput);