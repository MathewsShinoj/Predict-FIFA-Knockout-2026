let round32 = [
  ["RSA", "CAN"],
  ["GER", "PAR"],
  ["NED", "MAR"],
  ["BRA", "JPN"],
  ["FRA", "SWE"],
  ["CIV", "NOR"],
  ["MEX", "ECU"],
  ["ENG", "COD"],
  ["USA", "BIH"],
  ["BEL", "SEN"],
  ["POR", "CRO"],
  ["ESP", "AUT"],
  ["SUI", "ALG"],
  ["ARG", "CPV"],
  ["COL", "GHA"],
  ["AUS", "EGY"]
];

const goButton = document.getElementById("goButton");


const container = document.getElementById("round32");
const container2= document.getElementById("round16");
const container3 = document.getElementById("quarterfinal");
const container4 = document.getElementById("semifinal");
const container5 = document.getElementById("final");
const container6 = document.getElementById("winner");
let round16 = [];


//round of 32
document.getElementById("round16title").style.display = "none";


for (let i=0;i<round32.length;i++){

let match=document.createElement("div");
match.className = "match-card";


let team1=document.createElement("button");
team1.innerHTML = `
    <img src="Flags/${round32[i][0].toLowerCase()}.svg" class="flag">
    ${round32[i][0]}
`;


let VS=document.createElement("span");
VS.textContent="VS"
 
let team2=document.createElement("button");

team2.innerHTML = `
    <img src="Flags/${round32[i][1].toLowerCase()}.svg" class="flag">
    ${round32[i][1]}
`;

match.appendChild(team1);
match.appendChild(VS);
match.appendChild(team2);
container.appendChild(match);

team1.addEventListener('click',function () {
    team1.classList.add("selected"); 
    team2.classList.remove("selected");

     round16[i]=round32[i][0];
     console.log(round16);
if (Object.keys(round16).length === 16) {
     goButton.style.display = "block";
     goButton.onclick = function(){
     goButton.style.display = "none";
     generateRound16();  
}
}}
)

team2.addEventListener('click',function () {
    team2.classList.add("selected");
    team1.classList.remove("selected");
    round16[i]=round32[i][1];
    console.log(round16);
if (Object.keys(round16).length === 16) {
     goButton.style.display = "block";
     goButton.onclick = function(){
     goButton.style.display = "none";
     generateRound16();
}
}
})
};

//round of 16

const round16Pairs = [
    [1, 4],   // W74 vs W77
    [0, 2],   // W73 vs W75
    [3, 5],   // W76 vs W78
    [6, 7],   // W79 vs W80
    [10,11],  // W83 vs W84
    [8, 9],   // W81 vs W82
    [13,15],  // W86 vs W88
    [12,14]   // W85 vs W87
];


let round8=[];

function generateRound16() {

document.getElementById("round32").style.display = "none";
document.getElementById("round16").style.display = "block";
document.getElementById("round32title").style.display = "none";
document.getElementById("round16title").style.display = "block";  

for (let i=0;i<round16Pairs.length;i++){

let match=document.createElement("div");
match.className = "match-card";
let team1Button=document.createElement("button");
let VS=document.createElement("span");
VS.textContent="VS";

let team2Button=document.createElement("button");

let pair=round16Pairs[i];
let team1=round16[pair[0]];
let team2=round16[pair[1]];
team1Button.innerHTML = `
    <img src="Flags/${team1.toLowerCase()}.svg" class="flag">
    ${team1}
`;

team2Button.innerHTML = `
    <img src="Flags/${team2.toLowerCase()}.svg" class="flag">
    ${team2}
`;
match.appendChild(team1Button);
match.appendChild(VS);
match.appendChild(team2Button);
container2.appendChild(match);

team1Button.addEventListener('click',function () {
    team1Button.classList.add("selected"); 
    team2Button.classList.remove("selected"); 
     round8[i]=round16[pair[0]];
     console.log(round8);
if (Object.keys(round8).length===8){
   goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatequarterfinal();
}
}

})
team2Button.addEventListener('click',function () {
    team2Button.classList.add("selected"); 
    team1Button.classList.remove("selected"); 
    round8[i]=round16[pair[1]];
    console.log(round8);
if (Object.keys(round8).length===8){
 goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatequarterfinal();
}
}

})
}}

document.getElementById("quarterfinaltitle").style.display = "none"; 

// quarter

const quarterFinalPairs = [
    [0, 1],
    [4, 5 ],
    [2, 3],
    [6, 7]
];

let semi=[];

function generatequarterfinal() {

document.getElementById("round32").style.display = "none";
document.getElementById("round16").style.display = "none";
document.getElementById("quarterfinal").style.display = "block";
document.getElementById("round32title").style.display = "none";
document.getElementById("round16title").style.display = "none";  
document.getElementById("quarterfinaltitle").style.display = "block";


for (let i=0;i<quarterFinalPairs.length;i++){

let match=document.createElement("div");
match.className = "match-card";
let team1Button=document.createElement("button");
let VS=document.createElement("span");
VS.textContent="VS";

let team2Button=document.createElement("button");

let pair=quarterFinalPairs[i];
let team1=round8[pair[0]];
let team2=round8[pair[1]];
team1Button.innerHTML = `
    <img src="Flags/${team1.toLowerCase()}.svg" class="flag">
    ${team1}
`;

team2Button.innerHTML = `
    <img src="Flags/${team2.toLowerCase()}.svg" class="flag">
    ${team2}
`;
match.appendChild(team1Button);
match.appendChild(VS);
match.appendChild(team2Button);
container3.appendChild(match);

team1Button.addEventListener('click',function () {
    team1Button.classList.add("selected"); 
    team2Button.classList.remove("selected"); 
     semi[i]=round8[pair[0]];
     console.log(semi);
     if (Object.keys(semi).length===4){
        goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatesemifinal();
}
}

})


team2Button.addEventListener('click',function () {
    team2Button.classList.add("selected"); 
    team1Button.classList.remove("selected"); 
    semi[i]=round8[pair[1]];
    console.log(semi);
    if (Object.keys(semi).length===4){
   goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatesemifinal();
}
}

});}};


//Semi-final
document.getElementById("semifinaltitle").style.display = "none";
const semiFinalPairs = [
    [0, 1],
    [2, 3]
];


let final=[];
function generatesemifinal() {

document.getElementById("round32").style.display = "none";
document.getElementById("round16").style.display = "none";
document.getElementById("quarterfinal").style.display = "none";
document.getElementById("semifinal").style.display = "block";
document.getElementById("round32title").style.display = "none";
document.getElementById("round16title").style.display = "none";  
document.getElementById("quarterfinaltitle").style.display = "none";  
document.getElementById("semifinaltitle").style.display = "block";  




for (let i=0;i<semiFinalPairs.length;i++){

let match=document.createElement("div");
match.className = "match-card";
let team1Button=document.createElement("button");
let VS=document.createElement("span");
VS.textContent="VS";

let team2Button=document.createElement("button");

let pair=semiFinalPairs[i];
let team1=semi[pair[0]];
let team2=semi[pair[1]];
team1Button.innerHTML = `
    <img src="Flags/${team1.toLowerCase()}.svg" class="flag">
    ${team1}
`;

team2Button.innerHTML = `
    <img src="Flags/${team2.toLowerCase()}.svg" class="flag">
    ${team2}
`;
match.appendChild(team1Button);
match.appendChild(VS);
match.appendChild(team2Button);
container4.appendChild(match);
team1Button.addEventListener('click',function () {
    team1Button.classList.add("selected"); 
    team2Button.classList.remove("selected"); 
     final[i]=semi[pair[0]];
     console.log(final);
     if (Object.keys(final).length===2){
    goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatefinal();
}
}

})

team2Button.addEventListener('click',function () {
    team2Button.classList.add("selected"); 
    team1Button.classList.remove("selected"); 
    final[i]=semi[pair[1]];
    console.log(final);
    if (Object.keys(final).length===2){
 goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatefinal();
}
}

})
}}



//final
const FinalPairs = [
    [0, 1]
];

document.getElementById("finaltitle").style.display = "none";



let winner=[];
function generatefinal() {

document.getElementById("full").style.display="none"
document.getElementById("round32").style.display = "none";
document.getElementById("round16").style.display = "none";
document.getElementById("quarterfinal").style.display = "none";
document.getElementById("final").style.display = "block";
document.getElementById("semifinal").style.display = "none";
document.getElementById("round32title").style.display = "none";
document.getElementById("round16title").style.display = "none";  
document.getElementById("quarterfinaltitle").style.display = "none";  
document.getElementById("semifinaltitle").style.display = "none";  
document.getElementById("finaltitle").style.display = "block";



for (let i=0;i<FinalPairs.length;i++){

let match=document.createElement("div");
match.className = "match-card";
let team1Button=document.createElement("button");
let VS=document.createElement("span");
VS.textContent="VS";
let team2Button=document.createElement("button");

let pair=FinalPairs[i];
let team1=final[pair[0]];
let team2=final[pair[1]];
team1Button.innerHTML = `
    <img src="Flags/${team1.toLowerCase()}.svg" class="flag">
    ${team1}
`;

team2Button.innerHTML = `
    <img src="Flags/${team2.toLowerCase()}.svg" class="flag">
    ${team2}
`;
match.appendChild(team1Button);
match.appendChild(VS);
match.appendChild(team2Button);
container5.appendChild(match);
team1Button.addEventListener('click',function () {
    team1Button.classList.add("selected"); 
    team2Button.classList.remove("selected"); 
     winner[i]=final[0];
     console.log(winner);
if (Object.keys(winner).length===1){

    goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatewinner();
}
}

})
team2Button.addEventListener('click',function () {
    team2Button.classList.add("selected");
    team1Button.classList.remove("selected"); 
    winner[i]=final[1];
    console.log(winner);
if (Object.keys(winner).length===1){
goButton.style.display = "block";
   goButton.onclick = function(){
   goButton.style.display = "none";
   generatewinner();
}
}

})
}}
   
document.getElementById("winnertitle").style.display="none"

function generatewinner() {
  document.getElementById("full").style.display = "none";
  document.getElementById("finaltitle").style.display = "block";
  document.getElementById("winnertitle").style.display = "block";
  document.getElementById("final").style.display = "block";

  container6.innerHTML = `
    <div class="winner-card animate-winner">
      <div class="winner-title">🏆 Winner</div>
      <img src="Flags/${winner[0].toLowerCase()}.svg" class="winner-flag">
      <div class="winner-name">${winner[0]}</div>
    </div>
  `;
}
function resetTournament() {
  location.reload();
}
