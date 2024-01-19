let isDOBOpen=false

const SettingCog=document.getElementById("setIcone")
const SettingContent=document.getElementById("settingContent")



const toggleDOBSelector=()=>{
    if(isDOBOpen === true){
        SettingContent.classList.add("hide")   
    }else{
        SettingContent.classList.remove("hide")
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
}

SettingCog.addEventListener("click",toggleDOBSelector)