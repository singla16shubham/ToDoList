let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('task-counter');

console.log('Working');
function addTaskToDOM(task)
{  const li=document.createElement('li');
li.innerHTML=
`
<input type = "checkbox" id="${task.id}" ${task.done ? 'checked': ''} class="custom-checkbox">
<label for="${task.id}">${task.text}</label>
<img src="trash.png" class="delete" data-id="${task.id}"/>

`;
taskList.append(li);
}

function renderList () {
    taskList.innerHTML='';
    for(let i=0;i<tasks.length;i++)
    {
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML=tasks.length;
}


function toggleTsk(taskId)
{
    const task=tasks.filter(function(task)
    { console.log(tasks.id);
        return task.id===taskId;
    })
    if(task.length>0)
    {
        const currentTask=task[0];
        currentTask.done=!currentTask.done;
        renderList();
        showNotification("Toggled Successfully");
        return;
    }
    showNotification("cannot toggle");
}

function deleteTask (taskId) {
    const newtasks=tasks.filter(function(task)
    { console.log(tasks);
      
        return task.id!==taskId;
    })
    // let newtasks=[];
    // for(let i=0;i<tasks.length;i++)
    // {
    //     if(tasks[i].id===taskId)
    //     {
    //         continue;
    //     }
    //     else{
    //        newtasks.push(tasks[i]);
    //     }
    // }
   
    tasks=newtasks;
    // console.log(newtasks);
    renderList();
    showNotification("Task Deleted Successfully");
    return;
}

function addTask (task) {
    if(task)
    {
    tasks.push(task);
    renderList();
    showNotification("Task added Successfully");
    return;
    }
    showNotification("Task cannot be added");
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e)
{ if(e.key==="Enter")
{
    const text=e.target.value;
    console.log(text);
    if(!text)
    {
        showNotification("Task cannot be Empty");
        return;
    }
    const task={
        text,
        id:Date.now().toString(),
        done:false
    }
    e.target.value='';
    addTask(task);

}

}
function handleClickListener(e)
{
    const target=e.target;
    console.log(target);
    if(target.className==="delete")
    {
        //  console.log(target.dataset.id);
      const taskId=target.dataset.id;
      deleteTask(taskId);
      return;
    }
    else if(target.className==="custom-checkbox")
    {
        const taskId=target.id;
        console.log(taskId);
        toggleTsk(taskId);
        return;
    }
     

}
function initializeApp()
{
    addTaskInput.addEventListener("keyup",handleInputKeypress);
document.addEventListener('click',handleClickListener);

}
initializeApp();
