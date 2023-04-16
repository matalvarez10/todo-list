import { format, differenceInDays, parse } from "date-fns";
import { createProject } from "./createTask";
import { hideTables } from "./modal";

class task {
  constructor(date, done, description, project, nombre) {
    this.date = date;
    this.done = done;
    this.description = description;
    this.project = project;
    this.nombre = nombre;
  }

  createTask (){
    //creating table variables
    let tr = document.createElement('tr'); 
    let tdStatus = document.createElement('td');
    let tdDescription = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdEdit = document.createElement('td');
    let tdDelete = document.createElement('td');
  
    //creating icons
    let iconEdit = document.createElement('i');
    iconEdit.classList.add("fas","fa-edit");
    let iconDelete = document.createElement('i');
    iconDelete.classList.add("fas","fa-trash-alt");
  
    let editWrapper = document.createElement('span');
    let deleteWrapper = document.createElement('span');
    editWrapper.append(iconEdit);
    deleteWrapper.append(iconDelete);
  
    //icon events
  
    deleteWrapper.addEventListener('click',()=>{
      tr.remove();
      let index = allTasks.taskArray.indexOf(this);
      allTasks.taskArray.splice(index, 1);
    });
  
    //creating input tag
    let inputCheck = document.createElement('input');
    inputCheck.setAttribute('type','checkbox');
  
  
  
    //asigning values
    tdStatus.append(inputCheck);
    tdDescription.innerText = this.description;
    tdDate.innerText =this.date;
    tdEdit.append(editWrapper);
    tdDelete.append(deleteWrapper);
  
    // creating final row
    tr.append(tdStatus,tdDescription,tdDate,tdEdit,tdDelete);
    return tr;
  
  }
}


class projectClass {
  constructor(table, projectArray, name) {
    this.table = table;
    this.projectArray = projectArray;
    this.name = name;
  }
  createProject (){
    let inputText = document.getElementById('project-input').value;
    

    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.setAttribute('value','project-section');
    projectContainer.setAttribute('data-valor',inputText);
    projectContainer.style.cursor = "pointer";

    projectContainer.addEventListener('click',hideDom);


    let projectIcon = document.createElement('i');
    projectIcon.classList.add('fas','fa-list-ol');

    let projectText = document.createElement('span');
    projectText.innerText = inputText;

    projectContainer.append(projectIcon,projectText);

    // creating project table
    let tableProject = document.createElement('table');
    tableProject.setAttribute('value',inputText);
    tableProject.innerHTML = `
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Due Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody id=${inputText}>
        </tbody>`;

    return [projectContainer,tableProject];

}
}

const allTasks = (() => {
  let taskArray = [];
  let dayTasks = [];
  let weekTasks = [];

  const filterDay = () => {
    allTasks.dayTasks = allTasks.taskArray.filter((element) => {
      //fecha actual
      let fechaString = format(new Date(), "yyyy-MM-dd");
      const date1 = parse(fechaString, "yyyy-MM-dd", new Date());

      //fecha task
      const date2 = parse(element.date, "yyyy-MM-dd", new Date());
      if (differenceInDays(date2, date1) == 0) {
        return true;
      }
    });
  };
  const filterWeek = () => {
    allTasks.weekTasks = allTasks.taskArray.filter((element) => {
      //fecha actual
      let fechaString = format(new Date(), "yyyy-MM-dd");
      const date1 = parse(fechaString, "yyyy-MM-dd", new Date());

      //fecha task
      const date2 = parse(element.date, "yyyy-MM-dd", new Date());
      if (differenceInDays(date2, date1) <= 7) {
        return true;
      }
    });
  };
  return { taskArray, dayTasks, weekTasks, filterDay, filterWeek };
})();

const allProjects = (() => {
  let projectsArray = [];
  let currentSection;
  let currentTbody;
  let projectList = document.getElementById("projects");
  let allTables = document.getElementById("all-tables");
  let index;

  const pushProject = () => {
    let auxProject = createProject();
    console.log(auxProject[0]);
    auxProject[0].addEventListener("click", hideTables);
    let arrayProject = [];
    let tmpProject = new projectClass(
      auxProject[1],
      arrayProject,
      auxProject[1].getAttribute("value")
    );
    allProjects.projectsArray.push(tmpProject);
    allProjects.projectList.append(auxProject[0]);
    allProjects.allTables.append(auxProject[1]);
  };

  const checkProject = (tempTask)=>{
    if(allProjects.currentSection == 'project-container'){
        let tmpTbody = document.querySelector(`[value=${allProjects.currentTbody}]`);
        console.log(allProjects.currentTbody);
        console.log(tmpTbody);
        allProjects.index = allProjects.projectsArray.findIndex(item => item.name == allProjects.currentTbody);
        allProjects.projectsArray[allProjects.index].projectArray.push(tempTask);
        tmpTbody.append(tempTask.createTask());
    }
  };
  return {
    projectsArray,
    currentSection,
    currentTbody,
    pushProject,
    projectList,
    allTables,
    checkProject,
  };
})();

export { task, allTasks, projectClass, allProjects };
