// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let arr=JSON.parse(localStorage.getItem("amount")) || [];
let sum=0
for(let i=0; i<arr.length;i++){
    sum+=Number(arr[i])
}
let output=document.querySelector("#wallet")
output.innerHTML=sum

let arr2=JSON.parse(localStorage.getItem("movie")) || [];
console.log(arr2);
arr2.map(function(el){
  let h1=document.createElement("h2");
  h1.innerText=el.Title;
  let img=document.createElement("img");
  img.src=el.Poster;
  document.querySelector("#movie").append(h1,img)
})


let arr3=JSON.parse(localStorage.getItem("amount")) || [];
document.querySelector("#confirm").addEventListener("click",myFun)
function myFun(){
    // console.log("hittu")
let seat=document.querySelector("#number_of_seats").value;  
// console.log(seat)
if(seat>sum){
    alert("Insufficient Balance !")
}
else if(seat<=sum){
    alert("Booking Succesful !")
    arr3.push(sum-seat)
    // console.log(arr3)
    localStorage.setItem("amount",JSON.stringify(arr3))
    window.location.reload()
}

}