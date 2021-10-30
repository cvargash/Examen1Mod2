var listwork = document.getElementById("listwork");

function callApi(){

    listwork.replaceChildren();
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        console.log(data)
    for (let i = 0; i < data.data.length; i++) {
        var btndelete = document.createElement("span")
        btndelete.classList.add("material-icons")
        btndelete.innerHTML="delete";
        btndelete.onclick= ()=> deleteTask(data.data[i].id,data.data[i].value)
        var work = document.createElement("div");
        work.classList.add("work")
        work.innerHTML=data.data[i].value;
        work.append(btndelete)
        work.appendChild(document.createElement("br"))
        console.log(data.data[i].id)
        listwork.appendChild(work)
    }

    });

}

function addTask(){
    listwork.replaceChildren();
    let work=document.getElementById("inputwork").value;

    $.post("https://immense-plateau-68535.herokuapp.com/add",
    {
        todoitem: work+"- Carlos V"
    },
    function(data){
        console.log(data)
    });
    callApi();
}

function deleteTask(id,userName){
    listwork.replaceChildren();
    nCarlos= "-"+userName.split("-").pop();

    if(nCarlos == "- Carlos V"){

        $.post("https://immense-plateau-68535.herokuapp.com/remove",
        {
            todoitemId:id,
            userName:userName
        },
        function(data){
            console.log(data)
        });
        callApi();
    }else{
        alert("No puedes eliminar esta tarea ")
        callApi();
    }

}


