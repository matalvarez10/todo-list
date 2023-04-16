import { allProjects } from "./task";

const modalDom = (() => {
  let modal = document.getElementById("modal");
  let backdrop = document.querySelector(".backdrop");
  const modalDisplay = () => {
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
  let projectSection = document.getElementById("projects");
  projectSection.classList.toggle("hidden");
}

function hideInputSection(){
  let addSection = document.getElementById("wrap-hide");
  addSection.classList.toggle("hidden");
}

export { modalDom, hideDom,hideTables,hideProjectSection,hideInputSection };
