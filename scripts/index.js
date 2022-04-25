// Store the wallet amount to your local storage with key "amount"
let arr=JSON.parse(localStorage.getItem("amount")) || [];
let sum=0
for(let i=0; i<arr.length;i++){
    sum+=Number(arr[i])
}

let output=document.querySelector("#wallet")
output.innerHTML=sum

function myFun(){
    // console.log("hittu")
    let input=document.querySelector("#amount").value; 
    arr.push(input)
    localStorage.setItem("amount",JSON.stringify(arr))
window.location.reload()



}