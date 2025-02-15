let stars = document.getElementsByClassName("star");
let i = 0;
function rating(n) {
    remove(); 

    for(i = 0;i < n;i++) {
        if(n == 1) {
            cls = "one";
        }
        else if(n == 2) {
            cls = "two";
        }
        else if(n == 3) {
            cls = "three";
        }
        else if(n == 4) {
            cls = "four";
        }
        else if(n == 5) {
            cls = "five";
        }
        stars[i].className = "star " + cls;
    }
}

function remove() {
    for(i = 0;i < 5;i++) {
        stars[i].className = "star";
    }
}
