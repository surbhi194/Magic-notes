console.log("app");
let data=[]
showNotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', function (e) {
    
    note = {
    addtxt : document.getElementById("addtxt").value,
    addtitle:document.getElementById("addnote").value,
    }
    console.log(note);
    
    if(note.addtxt==''||note.addtitle=='')
    {
        alert.innertext='Both fields are required';
    }
    else{
        console.log(note.addtitle);
        appendNotes(note.addtitle,note.addtxt);
    }
    // data.push(addtitle.value,addtxt.value);
    // localStorage.setItem("notes", JSON.stringify(data));
    // addtxt.value = '';
    // addtitle.value = '';
    // showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        data = [];
    }
    else {
        data = JSON.parse(notes);
    }
    let html = '';
    data.forEach(function (element, index, array) {
        html += `
           <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
              <u><b class="card-text">${element.addtitle}</b></u> <br><br>
                  <p class="card-text">${element.addtxt}</p>
                  <button id='${index}' onclick="deleteNote(this.id)" class="btn btn-primary my-2">Delete note</button>
                  </div>
              </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (data.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`;
    }
}
function appendNotes(addtitle,addtxt){
    console.log(data);
    data.push({addtitle,addtxt});
localStorage.setItem("notes", JSON.stringify(data));
showNotes();
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        data = JSON.parse(notes);
    }
data.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(data));
    showNotes();
}