const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", function(event) {
    if (event.key) {
        document.querySelector(".search-text").innerHTML = "Searching...";
    }
    //if no key is pressed, delete the "Searching..." text
    setTimeout(function() {
        document.querySelector(".search-text").innerHTML = "";    
    }, 3000);
})

const searchBtn = document.querySelector(".btn-search");
function handleSearch() {
    let input = searchInput.value;
    
    //"\S"  matches any characters that is not a whitespace (nếu như có whitespace là sai)
    if (input.length === 0 || !/\S/.test(input)) {
      alert("You must enter at least one character");
    } else {
        searchBtn.addEventListener("click", function() {
            console.log("You have searched for keyword: " + input);
            input = "";
        });
        
    }
      

}

