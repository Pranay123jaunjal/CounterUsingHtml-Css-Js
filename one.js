console.log("script loadded")
const text = document.querySelector(".count")
const add = document.querySelector(".add");
const minus = document.querySelector(".minus")
const input=document.querySelector(".input")
const reset=document.querySelector(
    ".reset"
)

add.addEventListener("click", () => {
    console.log("btn clicked")
    const change = parseInt(text.innerText)
       const changebyvalue=parseInt(input.value)

    text.innerText = change + changebyvalue;
})
minus.addEventListener("click", () => {
    console.log("btn clicked")
    const change = parseInt(text.innerText)
    const changee = parseInt(text.innerText)
       const changebyvalue=parseInt(input.value)

    text.innerText = change - changebyvalue;
})
reset.addEventListener("click",()=>{
    console.log("btn clicked")
            text.innerHTML=0;
})