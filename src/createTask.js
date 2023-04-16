import { hideDom } from "./modal";
import { task } from "./task";



/* const createProject = ()=>{
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

};
 */
export{task,createProject};
