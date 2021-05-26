'use strict';
const submitButton = document.querySelector("#generateList");
const groceryList = document.querySelector("#myList");
let inputs = document.querySelectorAll(".input")


submitButton.addEventListener("click", function()
{
    let inputMap = Array.prototype.map.call(inputs, function(x)
    {
        return x.value
    })

    inputMap.forEach(element => {
        const newListElement = document.createElement("li");
        newListElement.innerText = element;
        groceryList.append(newListElement);
    });

})