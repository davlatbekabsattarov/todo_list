let task=document.getElementById('task'),
day=document.getElementById('day'),
time=document.getElementById('time'),
type=document.getElementById('type'),
table=document.querySelector('table')


let alltasks=[]
const render=(arr)=>
{
    table.innerHTML=`
    <tr>
    <th>№</th>
    <th>Task</th>
    <th>Week day</th>
    <th>Time</th>
    <th>Type</th>
    </tr>
    `
    arr.forEach((item,index) => {
      table.innerHTML +=`
      <tr>
      <td>${index+1}</td>
      <td>${item.task}</td>
      <td>${item.day}</td>
      <td>${item.time}</td>
      <td>${item.type}</td>
      <td><button onclick='remove(${index})'>X</button></td>
      </tr>
      `  
    });
}
const addtasks=()=>
{
    let todo={
        task: task.value,
        day: day.value,
        time: time.value,
        type: type.value
    }
    alltasks.push(todo)
    render(alltasks)
    localStorage.setItem('alltasks', JSON.stringify(alltasks))
}



if(localStorage.getItem('alltasks'))
{
    alltasks=JSON.parse(localStorage.getItem('alltasks'))
    render(alltasks)
}

const remove=(k)=>
{
    if( confirm("Do you really want to clear all tasks ?"))
    {
        let del=alltasks.splice(k,1)
        console.log(del);
        localStorage.setItem('alltasks',JSON.stringify(alltasks))
        render(alltasks)

    }
}

const removeAll=()=>
{
    if( confirm("Do you really want to clear all tasks ?"))
{
    let= localStorage.removeItem('alltasks')
    alltasks=[]
    render(alltasks)

}
}
