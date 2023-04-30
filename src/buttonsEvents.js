import { modalDom } from "./modal";
import { createElement } from "./createElement";
import { allTasks } from "./task";
import { hideDom } from "./modal";
import { createSection } from "./createElement";
import { allProjects } from "./task";
import { hideProjectSection } from "./modal";
import { hideInputSection } from "./modal";

const btnEvent = (() => {
  let btnModal = document.getElementById("modal-trigger");
  let btnClose = document.getElementById("btnCancel");
  let btnAdd = document.getElementById("btnAdd");
  let tbody = document.getElementById("home");
  let sections = document.querySelectorAll(".main");
  let daySection = document.getElementById("1");
  let weekSection = document.getElementById("2");
  let btnProject = document.getElementById("project-confirm");
  let homeSection = document.getElementById("0");
  let projectSectionButton = document.getElementById("3");
  let addProjectBtn = document.getElementById("add-project");
  let btnEdit = document.getElementById("btnEdit")
  
  btnEdit.addEventListener('click',()=>{
    let index = allTasks.btnIndex;
    let inputs = document.querySelectorAll('#modal>input');
    allTasks.trReference.children[2].innerText =inputs[2].value;
    allTasks.trReference.children[1].innerText = inputs[1].value;
    allTasks.taskArray[index].name = inputs[0].value;
    allTasks.taskArray[index].description = inputs[1].value;
    allTasks.taskArray[index].date = inputs[2].value; 
    modalDom.modalClose();
  });
  btnClose.addEventListener("click", modalDom.modalClose);

  btnModal.addEventListener("click", () => {
    let btnAdd= document.getElementById("btnAdd");
    let btnEdit= document.getElementById("btnEdit");
    btnAdd.style.display = "block";
    btnEdit.style.display = "none";
    modalDom.modalDisplay();
  });

  btnAdd.addEventListener("click", () => {
    
    let tempTask = createElement();
    console.log(tempTask);
    allTasks.taskArray.push(tempTask);
    localStorage.setItem("allTasks", JSON.stringify(allTasks.taskArray)); 
    tbody.append(tempTask.createTask());
    allProjects.checkProject(tempTask);
    modalDom.modalClose();
    console.log(allTasks.taskArray);
  });

  for (let index = 0; index < sections.length; index++) {
    sections[index].addEventListener("click", hideDom);
  }

  homeSection.addEventListener("click", () => {
    createSection(allTasks.taskArray, "home");
    console.log(allProjects.projectsArray);
    console.log(allTasks.taskArray);

  });

  daySection.addEventListener("click", () => {
    allTasks.filterDay();
    createSection(allTasks.dayTasks, "today");
  });

  weekSection.addEventListener("click", () => {
    allTasks.filterWeek();
    createSection(allTasks.weekTasks, "weekid");
  });

  btnProject.addEventListener("click", () => {
    let inputText = document.getElementById("project-input");
    let arrayProject = [];
    allProjects.pushProject(inputText.value, arrayProject);
    inputText.value = "";
    hideInputSection();
  });

  projectSectionButton.addEventListener("click", hideProjectSection);

  addProjectBtn.addEventListener("click", hideInputSection);
})();

export { btnEvent };
