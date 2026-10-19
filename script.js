let start = "Images/start.jpg";
let crash = "Images/crash.jpg";
let win = "Images/win.jpg";

let photo = 1;
let story = 1;

function comeback() {
    story = 1;
    photo = 1;
    document.getElementById("storyTitle").innerHTML = "The comeback";
    document.getElementById("storyTitle").style.color = "green";
    document.getElementById("raceImage").src = start;
    document.getElementById("caption").innerHTML = "The driver prepares for the race";
}

function downfall() {
    story = 2;
    photo = 1;
    document.getElementById("storyTitle").innerHTML = "The downfall";
    document.getElementById("storyTitle").style.color = "darkred";
    document.getElementById("raceImage").src = win;
    document.getElementById("caption").innerHTML = "The driver celebrates the win";
}

function nextPhoto() {
    photo = photo + 1;
    if (story == 1) {
        if (photo == 2) {
            document.getElementById("raceImage").src = crash;
            document.getElementById("caption").innerHTML = "an accident puts drivers dreams at risk";
        }
        if (photo == 3) {
            document.getElementById("raceImage").src = win;
            document.getElementById("caption").innerHTML = "the driver wins the race";
        }
    }
   if (story == 2) {
        if (photo == 2) {
            document.getElementById("raceImage").src = start;
            document.getElementById("caption").innerHTML = "champion prepares for anothher race";
        }    
    if (photo == 3) {
            document.getElementById("raceImage").src = crash;
            document.getElementById("caption").innerHTML = "an unexpected event ends race";

        }
    }

    if (photo== 4) {
        if (story == 1) {
            comeback();
        }
        if (story == 2) {
            downfall();
        }
    }
}

document.getElementById("story1").addEventListener("click", comeback);
document.getElementById("story2").addEventListener("click", downfall);
document.getElementById("nextButton").addEventListener("click", nextPhoto);

