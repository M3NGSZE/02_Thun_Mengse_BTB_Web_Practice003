let taskData = []

function addTask(){
    let task = validateTaskName()
    let date = validateDaTe()
    if(task && date){
        taskData.push(task)
        taskData.push(date)
        console.log(taskData);
        clearInput()
    }
    
    
}

function validateTaskName(){
    const regex = /^[^\s].*/;
    let taskName = document.getElementById('task').value

    if(regex.test(taskName)){
        console.log(taskName)
        document.getElementById('taskName').setAttribute('hidden', true);
        return taskName
        
    }else {
        document.getElementById('taskName').removeAttribute('hidden')
    }
}

function validateDaTe(){
    let date = document.getElementById('datepicker-title').value
    if(date != ""){
        console.log(date)
        document.getElementById('taskDate').setAttribute('hidden', true);
        return date
    }else{
        document.getElementById('taskDate').removeAttribute('hidden')
    }
}

function valiatePriority(){
    let date = document.getElementById('datepicker-title').value
    if (date != "") {
        console.log(date)
        document.getElementById('taskDate').setAttribute('hidden', true);
        return date
    } else {
        document.getElementById('taskDate').removeAttribute('hidden')
    }
}

function clearInput(){
    document.getElementById('task').value = ""
    document.getElementById('datepicker-title').value = ""
}