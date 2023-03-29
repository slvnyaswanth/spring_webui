
const get = document.getElementById("get");
const del  = document.getElementById("del");
const getdata = document.getElementById("getdata");
const put = document.getElementById("put");

get.addEventListener("click", getbyid);
getdata.addEventListener("click", getbyname);
del.addEventListener("click", delbyid);put
put.addEventListener("click", putbyid);

function putbyid(){
  
  var info = {
    "name": document.getElementById("name").value,
    "id": document.getElementById("id").value,
    "language":document.getElementById("lang").value,
    "framework":document.getElementById("frame").value

  };
  console.log("given input")
  console.log(JSON.stringify(info));
  info=JSON.stringify(info);
putid1={ "name":"yaswanth", "id":"008","language":"javascript","framework":"Framework"  };
  fetch("http://localhost:8082/addserver/", {
    method: "PUT", 
    body: info,
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function (response) {
  let v=document.getElementById("out");
    if(response.status!==200){
      v.innerHTML="server not added ";

    }else{
      v.innerHTML="server added ";
    }
    
  })
}
function delbyid(){
  
  
  let delid = document.getElementById("delid").value;
  
        console.log("given input");
        console.log(delid);
  fetch("http://localhost:8082/deleteserver/"+delid, {
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function (response) {
  let v=document.getElementById("out");
    if(response.status!==200){
      v.innerHTML="id not exist to delete server";

    }else{
    v.innerHTML="deleted the server";
    }
  })
}



function getbyid(){
  
  
  let getid = document.getElementById("forget").value;
  console.log("giveninput");
  console.log(getid);

  if(getid==""){
    getall();
  } 
  else{
        
  fetch("http://localhost:8082/allserverdetails/"+getid, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function (response) {
  let v=document.getElementById("out");
    if(response.status!==200){
      v.innerHTML="id not exist to search server";

    }
    response.json().then(function (data1){
    console.log(JSON.stringify(data1));
    
    v.innerHTML=JSON.stringify(data1)+"";
    })
  })
}}
function getall(){
  
  
  
        
  fetch("http://localhost:8082/allserverdetails/", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function (response) {
  let v=document.getElementById("out");
    if(response.status!==200){
      v.innerHTML="no server found";
    }
    response.json().then(function (data1){
    console.log(JSON.stringify(data1));
    
    //v.innerHTML=JSON.stringify(data1)+"";
    })
  })
}
function getbyname(){
  
  
  let getid = document.getElementById("getname").value;
  console.log("giveninput");
  console.log(getid);
  
        
  fetch("http://localhost:8082/getserver/"+getid, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(function (response) {
  let v=document.getElementById("out");
    if(response.status!==200){
      v.innerHTML="name not exist to search server";

    }
    response.json().then(function (data1){
    console.log(JSON.stringify(data1));
    
    v.innerHTML=JSON.stringify(data1)+"";
    })
  })
}


