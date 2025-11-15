function RemoveItem(){
    let list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
}

function AddItem(){  
    const newtext = prompt("what item you want to add?");
    const newli = document.createElement("li");
    newli.textContent = newtext;
    let list = document.getElementById("list");
    list.appendChild(newli);

    
}



