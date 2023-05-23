const userName = document.querySelector("#user"); 
const dis = document.querySelector(".dis");
const disp = document.querySelector(".disp");
let time;

const debounce = (call) =>{
    clearTimeout(time)
    time = setTimeout(()=>call(),1500)
}

userName.addEventListener('input', (e) => {
    const val = e.target.value;
    debounce(()=>{
        console.log("fetch data from database without debounce");
    dis.innerHTML = val
    })
    console.log("fetch data from database with debounce");
    disp.innerHTML = val
    

})