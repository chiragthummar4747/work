const addButton = document.querySelector("#add");
const color = []

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  let notes = [];
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
    </div>
    <div class="main ${text ? "" : "hidden"} "> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>  `;
  note.insertAdjacentHTML("afterbegin", htmlData);
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  const colorbutton = note.querySelector(".clr")

  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  colorbutton.addEventListener("click", () => {
    const colores = note.style.backgroundColor = colors
    const textAreaColor = textArea.style.backgroundColor = colores
    localStorage.setItem("color", JSON.stringify(colores))
  })
 
  window.addEventListener("load", () => {
    const bgcolor = note.style.backgroundColor = colors
    const textAreaColor = textArea.style.backgroundColor = bgcolor
  })
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
};
const notes = JSON.parse(localStorage.getItem("notes"));
const colors = JSON.parse(localStorage.getItem("color"))

const array1 = []
array1.push(colors)


const notes1 = JSON.parse(localStorage.getItem("ObjectFormat"))
addButton.addEventListener("click", () => addNewNote());
const array = [];
for (var i = 0; i < notes.length; i++) {
  const object = {
    note: notes[i],
    color: array1[i]

  }
  array.push(object)
}
localStorage.setItem("ObjectFormat", JSON.stringify(array))
const objectdata = (localStorage.getItem("ObjectFormat"))

if (notes1) {
  notes.forEach(note => addNewNote(note))
}
