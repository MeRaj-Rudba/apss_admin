//btn variables
const flatOwnersBtn = document.getElementById("flat-owners-btn");
const flatMembersBtn = document.getElementById("flat-members-btn");
const staffsBtn = document.getElementById("staffs-btn");
const servantsBtn = document.getElementById("servants-btn");
const noticesBtn = document.getElementById("notices-btn");
const serviceChargesBtn = document.getElementById("service-charges-btn");
const entryExitLogBtn = document.getElementById("entry-exit-log-btn");

//div variables
const flatOwnersDiv = document.getElementById("flat-owners");
const flatMembersDiv = document.getElementById("flat-members");
const staffsDiv = document.getElementById("staffs-btn");
const servantsDiv = document.getElementById("servants");
const noticesDiv = document.getElementById("notices");
const serviceChargesDiv = document.getElementById("service-charges");
const entryExitLogDiv = document.getElementById("entry-exit-log");


//Button's Event Listeners
flatOwnersBtn.addEventListener("click", myFunction);
flatMembersBtn.addEventListener("click", myFunction);
staffsBtn.addEventListener("click", myFunction);
servantsBtn.addEventListener("click", myFunction);
noticesBtn.addEventListener("click", myFunction);
serviceChargesBtn.addEventListener("click", myFunction);
entryExitLogBtn.addEventListener("click", myFunction);






//Button's Event Functions to hide other div
const flatMemberFunction = () => {
    flatMembersDiv.style.display = "block";
    flatOwnerDiv.style.display = "none";
    staffsDiv.style.display = "none";
    servantsDiv.style.display = "none";
    noticesDiv.style.display = "none";
    serviceChargesDiv.style.display = "none";
    entryExitLogDiv.style.display = "none";
}


const radioCheckForOwner = () => {
    if (document.getElementById('insert').checked) {
        document.getElementById('insert-operation').style.display = "block";
        document.getElementById('update-operation').style.display = "none";
        document.getElementById('delete-operation').style.display = "none";
    }
    else if (document.getElementById('update').checked) {
        document.getElementById('insert-operation').style.display = "none";
        document.getElementById('update-operation').style.display = "block";
        document.getElementById('delete-operation').style.display = "none";
    }
    else if (document.getElementById('delete').checked) {
        document.getElementById('insert-operation').style.display = "none";
        document.getElementById('update-operation').style.display = "none";
        document.getElementById('delete-operation').style.display = "block";
    }
}


