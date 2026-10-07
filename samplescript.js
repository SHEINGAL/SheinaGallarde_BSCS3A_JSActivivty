const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const changebackground = document.getElementById('changeBackground');
const prof = document.getElementById('profile');
const toggledetails = document.getElementById('toggleDetails');
const detalye = document.getElementById('details');
let chill = false;

buttonname.addEventListener("click", function(){
        studentname.textContent = "Maria Santos";
    }
)

changebackground.addEventListener("click", function(){
        if (chill == false){
            prof.style.backgroundColor = "#abece1e1";
            chill = true;
        }
        else{
            prof.style.backgroundColor = "";
            chill = false;
        }
    }
)

toggledetails.addEventListener("click", function(){

        detalye.classList.toggle("hidden");

        if (detalye.classList.contains("hidden")){
            toggledetails.textContent = "Show Details";
        }
        else{
            toggledetails.textContent = "Hide Details";
        }
    }
)