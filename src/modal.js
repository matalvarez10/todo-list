import { allProjects } from "./task";
import { allTasks } from "./task";

const modalDom = (() => {
  let modal = document.getElementById("modal");
  let backdrop = document.querySelector(".backdrop");
  const modalDisplay = () => {

    console.log(allTasks.editFlag);
    modalDom.modal.classList.toggle("flex");
    modalDom.backdrop.style.display = "block";
  };

  const modalClose = () => {
    modalDom.modal.classList.toggle("flex");
    modalDom.backdrop.style.display = "none";
  };
  return { modal, backdrop, modalDisplay, modalClose };
})();

function hideDom() {
  let tables = document.querySelectorAll(".divisiones");
  let classMatch = this.getAttribute("value");
  allProjects.currentSection = this.className;
  tables.forEach((element) =>
    element.getAttribute("value") != classMatch
      ? (element.style.display = "none")
      : (element.style.display = "table")
  );
}

function resaltar(){
  let allSections = document.querySelectorAll(".icon");
  for (let index = 0; index < allSections.length; index++) {
    allSections[index].classList.remove('active');
  }
  this.classList.add("active");
}

function hideTables(){
  let auxTables = document.querySelectorAll('#all-tables>table');
  let classMatch = this.dataset.valor;
  allProjects.currentSection = this.className;
  allProjects.currentTbody = classMatch;
  auxTables.forEach((element) =>
    element.getAttribute("value") != classMatch
      ? (element.style.display = "none")
      : (element.style.display = "table")
  );
}

function hideProjectSection(){
  let allSections = document.querySelectorAll(".main");
  for (let index = 0; index < allSections.length; index++) {
    allSections[index].classList.remove('active');
  }
  this.classList.add("active");
  let projectSection = document.getElementById("projects");
  projectSection.classList.toggle("hidden");
}

function hideInputSection(){
  let addSection = document.getElementById("wrap-hide");
  addSection.classList.toggle("hidden");
}


export { modalDom, hideDom,hideTables,hideProjectSection,hideInputSection,resaltar };
