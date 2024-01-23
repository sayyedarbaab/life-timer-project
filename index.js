let isDOBOpen=false
let dateOfBirth;

const settingCogEl=document.getElementById("settingIcon");
const initialTextEl=document.getElementById("initialText")
const afterDOBBtnTxtEl=document.getElementById("afterDOBBtnTxt");

const settingContentEl=document.getElementById("settingContent");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");

const yearEl=document.getElementById("year")
const monthEl=document.getElementById("month")
const daysEl=document.getElementById("day")
const hourEl=document.getElementById("hour")
const mintEl=document.getElementById("mint")
const secondEl=document.getElementById("second")



const toggleDOBSelector=()=>{
    if(isDOBOpen){
        settingContentEl.classList.add("hide")   
    }else{
       settingContentEl.classList.remove("hide")
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
}

const updateAge=()=>{
    const currentDate=new Date();
    const dateDiff=currentDate-dateOfBirth;
    const year=Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365));
    const month=Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365)) % 12;
    const day=Math.floor(dateDiff/(1000 * 60 * 60 * 24)) % 30;
    const hour=Math.floor(dateDiff/(1000 * 60 * 60)) % 60;
    const mint=Math.floor(dateDiff/ 1000 ) % 60;
    const second=Math.floor(dateDiff/ 1000 ) % 60;
    
    yearEl.innerHTML=year;
    monthEl.innerHTML=month;
    daysEl.innerHTML=day;
    hourEl.innerHTML=hour;
    mintEl.innerHTML=mint;
    secondEl.innerHTML=second;
}

const setDOBHandler=()=>{
    const dateString = dobInputEl.value;
    dateOfBirth=new Date(dateString)

    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
        setInterval(() => updateAge(),1000);
    }else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
};

setDOBHandler();




settingContentEl.addEventListener("click",toggleDOBSelector);

dobButtonEl.addEventListener("click",setDOBHandler);
