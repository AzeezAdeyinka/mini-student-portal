var allStudents = []
    if(localStorage.studentDetails){
        allStudents = JSON.parse(localStorage.getItem('studentDetails'))
    }

function signup(){
    var newStudent ={
        firstName : firstname.value,
        lastName: lastname.value,
        phoneNumber :phoneNo.value,
        email:userEmail.value,
        password:userPassword.value,

        
    }
    if(firstname.value, lastname.value, phoneNo.value, userEmail.value, userPassword.value){
        alert("Registration successful")
        allStudents.push(newStudent)
        firstname.value = ""
        lastname.value = ""
        phoneNo.value = ""
        userEmail.value = ""
        userPassword.value = ""
        
        localStorage.setItem("studentDetails",JSON.stringify(allStudents))
        window.location.href = "login.html"
        console.log(allStudents)
   }
    else{
        alert("kindly provide all informations")
    }
    
}

 function search(){
     var confirmSearch = disp.value
     var randomNumber = "SQI" + Math.round(Math.random()*1000000);
     var date = new Date();
     date.getDate;

    var infoStudent = JSON.parse(localStorage.getItem("studentDetails"))
    if (confirmSearch = disp.value){
       result.innerText = "hello, the student's details are " 
       + "first name-- " + allStudents[disp.value].firstName
       + " last name-- " + allStudents[disp.value].lastName 
       + " email-- " + allStudents[disp.value].email
       + " password-- " + allStudents[disp.value].password
        + " Matric No-- " + randomNumber 
        + " date-- " + date
       result.style.fontSize = "20px" 
    }
    else{
        result.innerText = "Invalid search"
    }
}
function logIn(){
    var myUsername = userName.value
    var userPassword = Password.value
    var allStudent = JSON.parse (localStorage.getItem("studentDetails"))
    var found = false
for (let index = 0; index < allStudent.length; index++) {
    if (allStudent[index].firstName==myUsername && allStudent[index].password==userPassword){
        found = true
    alert ("login successfully")
    
    }

if (found){
    window.location.href = "search.html"
}
    else{
    alert("INVALID")
    }
    
}
}

function listOfStudents(){
    window.location.href="studentTable.html"
} 
    function checkTable(){
    var allStudent = JSON.parse (localStorage.getItem("studentDetails"))
    for (var index=0; index<allStudent.length; index++){
    studentData.innerHTML +=`
    <tr>
    <td>${index+1}</td>
    <td>${allStudent[index].firstName}</td>
    <td>${allStudent[index].lastName}</td>
    <td>${allStudent[index].email}</td>
    <td>
       <button>Delete</button>
       <button>Edit</button>
    </td>
    </tr>`
  }
  }