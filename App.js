console.log("welcome to Notes_App");
showNotes();
let add_btn = document.getElementById("btn_");
add_btn.addEventListener("click", function (e) {
    var addtxt = document.getElementById("textarea");
    var add_title=document.getElementById("note_title");
    if (addtxt.value != "" && add_title.value!="") {
        var note = localStorage.getItem("notes");
        var n_title=localStorage.getItem("n_titles"); 
        if (note == null && n_title == null){
            noteObj = [];
            titleObj=[];
        }
        else {
            noteObj = JSON.parse(note);
            titleObj = JSON.parse(n_title);
        }
        noteObj.push(addtxt.value);
        titleObj.push(add_title.value);

        localStorage.setItem("notes", JSON.stringify(noteObj));
        localStorage.setItem("n_titles",JSON.stringify(titleObj));

        addtxt.value = "";
        add_title.value="";
        showNotes();
    }
    else {
        window.alert("Please Add Your Notes !!");
    }
});

function showNotes() {
    var note = localStorage.getItem("notes");
    var n_title=localStorage.getItem("n_titles"); 
    if (note == null && n_title == null){
        noteObj = [];
        titleObj=[];
    }
    else {
        noteObj = JSON.parse(note);
        titleObj = JSON.parse(n_title);
    }
    let html = "";
    noteObj.forEach(function (element,index ) {
        html += `
        <div class="my-3 mx-2 card noteCard" style="width: 18rem; background-color: rgb(44, 43, 43); color: white">
            <div class="card-body">
            
                <h5 class="card-title">${titleObj[index]}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deletNode(this.id)" class="btn btn-primary">Delete</button>
            </div>
        </div>
        `;
        index+=1;
    });
    let notesElm = document.getElementById("notes");
    // let notes_title_Elm = document.getElementById("n_titles");
    if (noteObj.length != 0 && titleObj.length) {
        // notes_title_Elm.innerHTML = html;
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "nothing";
    }


}
function deletNode(index) {
    var note = localStorage.getItem("notes");
    var n_title=localStorage.getItem("n_titles"); 
    if (note == null && n_title == null){
        noteObj = [];
        titleObj=[];
    }
    else {
        noteObj = JSON.parse(note);
        titleObj = JSON.parse(n_title);
    }
    titleObj.splice(index, 1);
    noteObj.splice(index, 1);
    localStorage.setItem("n_titles", JSON.stringify(titleObj));
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function() {
    
    let inputval = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element) {

        let cardTxt1 = element.getElementsByTagName("h5")[0].innerText;
        let cardTxt2 = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt1.includes(inputval) || cardTxt2.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

let searchBtn = document.getElementById("btn_val");
searchBtn.addEventListener("click",function() {
    console.log("jhvk")
    
    let inputval = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element) {

        let cardTxt1 = element.getElementsByTagName("h5")[0].innerText;
        let cardTxt2 = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt1.includes(inputval) || cardTxt2.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

