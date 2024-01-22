let isDOBOpen=false
let dateOfBirth;

const settingCogEl=document.getElementById("settingIcon");
const initialTextEl=document.getElementById("initialText")
const afterDOBBtnTxtEl=document.getElementById("afterDOBBtnTxt");

const settingContentEl=document.getElementById("settingContent");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");



const toggleDOBSelector=()=>{
    if(isDOBOpen){
        settingContentEl.classList.add("hide")   
    }else{
       settingContentEl.classList.remove("hide")
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
}

const setDOBHandler=()=>{
    dateOfBirth = dobInputEl.value;
    if(dateOfBirth){
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
    }else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
};

setDOBHandler();

settingContentEl.addEventListener("click",toggleDOBSelector);

dobButtonEl.addEventListener("click",setDOBHandler);
