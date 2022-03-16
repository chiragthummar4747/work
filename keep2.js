const addButton = document.querySelector("#add");
const colorsarray = []
const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];

  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};


const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");


  const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
        <button class="clr1" value="orange"><i class="fas fa-palette"></i></button>
        <button class="clr2" value="yellow"><i class="fas fa-palette"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"} "> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>  `;

  note.insertAdjacentHTML("afterbegin", htmlData);


  // getting the References
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  const colorbutton = note.querySelector(".clr1")
  const colorbutton2 = note.querySelector(".clr2")

  // deleting the node
  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  // toggle using edit button
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;

    updateLSData();
  });

  document.body.appendChild(note);
  // it appeds a node as the last child of  a node

  colorbutton.addEventListener("click", () => {
    const color = note.style.backgroundColor = "orange"
    const textAreaColor = textArea.style.backgroundColor = color
    localStorage.setItem("color", JSON.stringify(color))
  })
  // window.addEventListener("load",()=>{
  //   const colores = note.style.backgroundColor = "orange"
  //   const textAreaColor = textArea.style.backgroundColor = colors
  // })

  colorbutton2.addEventListener("click", () => {
    const color1 = note.style.backgroundColor = "yellow"
    const textAreaColor = textArea.style.backgroundColor = color1
    localStorage.setItem("color1", JSON.stringify(color1))
  })
  // window.addEventListener("load",()=>{
  //   const colores = note.style.backgroundColor = "yellow"
  //   const textAreaColor = textArea.style.backgroundColor = colors
  // })

  console.log(colorsarray)


};



// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    notes.forEach((note) => addNewNote(note));
  }
  
  
  const colors = JSON.parse(localStorage.getItem("color"))
  const colors1 = JSON.parse(localStorage.getItem("color1"))

  colorsarray.push(colors,colors1)
addButton.addEventListener("click", () => addNewNote());

const objarray = []
for (i = 0; i < notes.length; i++) {
  const myobject = {
    notes: notes[i],
    colors: colorsarray[i]  
  }
  objarray.push(myobject)
}
localStorage.setItem("ObjectFormat", JSON.stringify(objarray))
const objectdata = (localStorage.getItem("ObjectFormat"))
// if (notes2) {
//   notes2.forEach((note) => addNewNote(note));
// }