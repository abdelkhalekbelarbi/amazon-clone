///doM
const headerimg =document.querySelectorAll(".header-img");
const controlprev=document.querySelector(".control_prev");
const controlnext=document.querySelector(".control_next");
let n=0;
function changeslide() {
    for (let i = 0; i < headerimg.length; i++) {
        headerimg[i].style.display="none";
    }
    headerimg[n].style.display="block";
}
changeslide();
/////
controlprev.addEventListener("click",(e)=>{
if (n>0) {
    n--;
} else {
    n=headerimg.length-1;
}
changeslide();
})
/////
controlnext.addEventListener("click",(e)=>{
if (n<headerimg.length-1) {
    n++;
} else {
    n=0;
}
changeslide();
})
///dom
//// DOM

const scrollcontainer = document.querySelectorAll(".products");

for (let item of scrollcontainer) {

    item.addEventListener("wheel", (event) => {
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    });

}