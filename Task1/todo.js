function func1(){
	var text = document.getElementById("my").value;
	var ui = document.getElementById("todolist");
	var but = document.createElement('button');
	var up = document.createElement('button');
	var down = document.createElement('button');
	but.innerText = "Delete";
	up.innerText = "UP";
	down.innerText = "DOWN";
	but.style.marginLeft="10px";
	up.style.marginLeft="10px";
	down.style.marginLeft="10px";
	var li =document.createElement('li');
	li.innerHTML=text;
	li.ClassName="li";
	li.appendChild(but);
	li.appendChild(up);
	li.appendChild(down);
	ui.appendChild(li);
	but.addEventListener("click", itemDone);
	up.addEventListener("click",moveUp);
	down.addEventListener("click",moveDown);
}

function moveUp(){
	if(this.parentNode.previousSibling){
		var ref = this.parentNode.previousSibling;
		var newNode = this.parentNode;
		ref.parentNode.insertBefore(newNode, ref);
	}
	else{
		alert("can't be move up already on the top");
	}

}

function moveDown(){
	if(this.parentNode.nextSibling){
		var ref = this.parentNode.nextSibling;
		var newNode = this.parentNode;
		ref.parentNode.insertBefore(newNode, ref.nextSibling);
	}
	else{
		alert("can't be move down already at the bottom");
	}
}


function itemDone(){
	var parent = this.parentNode.parentNode;
	var child = this.parentNode;
	parent.removeChild(child);
}
