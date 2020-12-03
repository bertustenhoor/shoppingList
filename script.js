var listItems = document.querySelectorAll("#shoppingList>.listItem");
var textBox = document.getElementById("textBoxAdd");
var addButton = document.getElementById("addButton")


//block for handling in-list activities: click to strike through and click to delete
//this block can be deleted, for an initial value of the list,
//add an element by funtction (to be bild!)

for (let i = 0; i < listItems.length; i++) {
    
    console.log(listItems[i].firstElementChild);
    
    var selectedElement = listItems[i].firstElementChild;
    var secondElement = listItems[i].lastChild;
    
    selectedElement.addEventListener("click", function() {
        console.log("span clicked");
        selectedElement.classList.toggle("done");
        console.log(selectedElement.classList);
    });
    secondElement.addEventListener("click", function() {
        secondElement.parentElement.closest("li").remove();
    });
}

addButton.addEventListener("click", function() {
    if (textBox.value.length > 0) {
        console.log(textBox.value);
        var list = document.getElementById("shoppingList");
        var listElement = document.createElement("li");
        var spanElement = document.createElement("span");
        var deleteButton = document.createElement("button");    
        
        listElement.classList.add("listItem");
        spanElement.textContent = textBox.value;
        spanElement.addEventListener("click", function() {
            console.log("span clicked");
            spanElement.classList.toggle("done");
            console.log(spanElement.classList);
        });
        
        deleteButton.innerText = "delete";
        deleteButton.addEventListener("click", function() {
            deleteButton.parentElement.closest("li").remove();
        });
        
        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);
        
        list.appendChild(listElement);
        
        console.log(list,listElement,spanElement,deleteButton);
        
    }
});