var todolist = [];
//For Fetching Previous Todo's
var temp = JSON.parse(localStorage.getItem('todolist'));
console.log("temp",temp);
if(temp)
{
  for(var k=0;k<temp.length;k++)
  {
    todolist.push(temp[k]);
  }
}

console.log("hello",todolist);
//localStorage.setItem('todolist',JSON.stringify(todolist));



// TODO CLASS
function Todo(todo){
  this.todo = todo;
  this.check = false;
}


// Function To Add Todo
function addTodo(){
  var text = document.getElementById("my").value;
  if(text == "")
  alert("Empty Input Field");
  else {
    func1();
  }
}


// Function To Create new Todo Object and add it to the todolist
function func1(){
  var text = document.getElementById("my").value;
  var list = document.getElementById("todolist");
  let todo = new Todo(text);
  var temp = JSON.parse(localStorage.getItem('todolist'));
  if(temp)
  temp.push(todo);
  else {
    temp = [];
    temp.push(todo);
  }
  var ui = document.createElement('ui');
  ui.className = "list-group";

  localStorage.setItem("todolist", JSON.stringify(temp));
  todolist = [];
  for(var k=0;k<temp.length;k++)
  {
    todolist.push(temp[k]);
  }
  for(var i=0;i<todolist.length;i++)
  {
    var li =document.createElement('li');
    li.className = "list-group-item";
    li.innerText = todolist[i].todo;
    li.style.fontSize = "30px";
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.className="radio-inline";
    x.style.margin="10px";
    x.style.width="30px";
    x.style.height= "30px";
    if(todolist[i].check)
    {
      x.click();
      li.innerHTML = (todolist[i].todo).strike();
      li.style.color="red";
    }
    li.prepend(x);
    x.id=i;

    if(i!=(todolist.length)-1)
    {
      var down = document.createElement('button');
      down.innerText = "DOWN";
      down.className = "btn btn-outline-primary fas fa-arrow-alt-circle-down fa-lg";
      down.id = i;
      down.style.marginLeft="5px";
      down.style.float = "right";
      li.appendChild(down);
      down.addEventListener("click", moveDown);
    }
    if(i!=0 )
    {
      var up = document.createElement('button');
      up.innerText = "UP";
      up.id = i;
      up.className = "btn btn-outline-primary fas fa-arrow-alt-circle-up fa-lg";
      up.style.marginLeft="20px";
      up.style.marginRight="5px";
      up.style.float = "right";
      li.appendChild(up);
      up.addEventListener("click", moveUp);
    }
    x.addEventListener("click", markDone);
    ui.appendChild(li);
  }
  list.removeChild(list.lastChild);
  list.appendChild(ui);
  document.getElementById("my").value="";
}


//Function to display the updated result
function refresh(){
  var list = document.getElementById("todolist");
  var ui = document.createElement('ui');
  for(var i=0;i<todolist.length;i++)
  {
    var li =document.createElement('li');
    li.innerText = todolist[i].todo;
    li.className = "list-group-item";
    li.style.fontSize = "30px";
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.className= "filled-in form-check-input";
    x.className="radio-inline";
    x.style.margin="10px";
    x.style.width="30px";
    x.style.height= "30px";
    if(todolist[i].check)
    {
      x.click();
      li.innerHTML = (todolist[i].todo).strike();
      li.style.color="red";
    }
    x.id=i;
    li.prepend(x);
    if(i!=(todolist.length)-1)
    {
      var down = document.createElement('button');
      down.innerText = "DOWN";
      down.className = "btn btn-outline-primary fas fa-arrow-alt-circle-down fa-lg";
      down.id = i;
      down.style.marginLeft="5px";
      down.style.float = "right";
      li.appendChild(down);
      down.addEventListener("click", moveDown);
    }
    if(i!=0 )
    {
      var up = document.createElement('button');
      up.innerText = "UP";
      up.id = i;
      up.className = "btn btn-outline-primary fas fa-arrow-alt-circle-up fa-lg";
      up.style.marginLeft="20px";
      up.style.marginRight="5px";
      up.style.float = "right";
      li.appendChild(up);
      up.addEventListener("click", moveUp);
    }
    x.addEventListener("click", markDone);
    ui.appendChild(li);
  }
console.log("hell",list);
  if(list.lastChild)
  {
    list.removeChild(list.lastChild);
  }

  list.appendChild(ui);
}


// To move up the todo
function moveUp(){
  var temp = todolist[this.id];
  todolist[this.id] = todolist[this.id - 1];
  todolist[this.id-1]=temp;
  //console.log(todolist);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh();
}


//to move down the todo
function moveDown(){
  //console.log(todolist);
  var temp = todolist[this.id];
  todolist[this.id] = todolist[parseInt(this.id) + 1];
  todolist[parseInt(this.id) + 1]=temp;
  //console.log(todolist);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh();
}


//marking done or undone of todo
function markDone(){
  var todo =  todolist[this.id];
  //console.log(todo);
  if(this.checked)
  {
    //console.log("yoooooooo");
    todo.check = true;
  }
  else {
    todo.check=false;
  }
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh();
}


//Delete All Checked Todo
function deleteTodo(){
  for(var i=0;i<todolist.length;i++)
  {
    if(todolist[i].check)
    {
      todolist.splice(i,1);
      //console.log(todolist);
      i=i-1;
    }
  }
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh();
}


//Sort the Todo's Unchecked First Then Checked
function sort(){
  todolist.sort(function(a, b){
    return a.check-b.check
  })
  localStorage.setItem("todolist", JSON.stringify(todolist));
  refresh();
}
//window.onload(refresh());
