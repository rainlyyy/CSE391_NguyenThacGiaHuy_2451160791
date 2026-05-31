const images = [
"https://placehold.co/800x400?text=Image+1",
"https://placehold.co/800x400?text=Image+2",
"https://placehold.co/800x400?text=Image+3",
"https://placehold.co/800x400?text=Image+4",
"https://placehold.co/800x400?text=Image+5",
"https://placehold.co/800x400?text=Image+6",
"https://placehold.co/800x400?text=Image+7",
"https://placehold.co/800x400?text=Image+8",
"https://placehold.co/800x400?text=Image+9"
];

let currentIndex = 0;

const image =
document.querySelector("#galleryImage");

function showImage(index){

currentIndex = index;

image.src =
images[currentIndex];
}

document
.querySelector("#nextBtn")
.addEventListener("click",()=>{

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

showImage(currentIndex);
});

document
.querySelector("#prevBtn")
.addEventListener("click",()=>{

currentIndex--;

if(currentIndex < 0){
currentIndex =
images.length - 1;
}

showImage(currentIndex);
});

let interval = null;

function toggleSlideShow(){

if(interval){

clearInterval(interval);

interval = null;

document.querySelector("#playBtn")
.textContent = "Play";

return;
}

interval = setInterval(()=>{

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

showImage(currentIndex);

},2000);

document.querySelector("#playBtn")
.textContent = "Pause";
}

document
.querySelector("#playBtn")
.addEventListener(
"click",
toggleSlideShow
);

const palette =
document.querySelector("#palette");

const commandInput =
document.querySelector("#commandInput");

function openPalette(){

palette.classList.remove("hidden");

commandInput.focus();
}

function closePalette(){

palette.classList.add("hidden");
}

document.addEventListener(
"keydown",
e=>{

if(
e.ctrlKey &&
e.key.toLowerCase() === "k"
){

e.preventDefault();

openPalette();
}

if(e.key === "Escape"){

closePalette();
}

if(e.key === "ArrowRight"){

document
.querySelector("#nextBtn")
.click();
}

if(e.key === "ArrowLeft"){

document
.querySelector("#prevBtn")
.click();
}

if(e.code === "Space"){

e.preventDefault();

toggleSlideShow();
}

const num =
parseInt(e.key);

if(num >= 1 && num <= 9){

showImage(num - 1);
}
}
);

commandInput
.addEventListener(
"input",
()=>{

const keyword =
commandInput.value
.toLowerCase();

document
.querySelectorAll(
"#commandList li"
)
.forEach(li=>{

li.style.display =
li.textContent
.toLowerCase()
.includes(keyword)
?
"block"
:
"none";
});
}
);

document
.querySelectorAll(
"#commandList li"
)
.forEach(li=>{

li.addEventListener(
"click",
()=>{

const cmd =
li.dataset.command;

if(cmd === "dark"){
document.body.classList.toggle(
"dark-mode"
);
}

if(cmd === "gallery"){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

closePalette();
});
});