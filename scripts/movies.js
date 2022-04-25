// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let arr=JSON.parse(localStorage.getItem("amount")) || [];
let sum=0
for(let i=0; i<arr.length;i++){
    sum+=Number(arr[i])
}
let output=document.querySelector("#wallet")
output.innerHTML=sum





function myFun(){
    let input=document.querySelector("#search").value; 
    const url=`https://www.omdbapi.com/?apikey=d9edf37f&s=${input}`
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res.Search)
        append(res.Search)

    }).catch(function(err){
        console.log("Movie not available")
    })

}

function append(data){
    document.querySelector("#movies").innerHTML=null;
    data.map(function(el){
        let box=document.createElement("div");
        box.setAttribute("class","movie_tab")
        let img=document.createElement("img");
         img.src=el.Poster;
         let p=document.createElement("p");
         p.innerText=el.Title;
         let btn=document.createElement("button")
         btn.innerText="Book Now"
         btn.setAttribute("class","book_now")
         btn.addEventListener("click",function(){
           bookNow(el)
         })
         
         box.append(img,p,btn)
         document.querySelector("#movies").append(box)
        
    
    })
   
}
let id;
function debounce(func,delay){
   if(id){
       clearTimeout
   }
   id=setTimeout(function(){
       func();
   },delay)
}



let arr2=JSON.parse(localStorage.getItem("movie")) || [];
function bookNow(data){
console.log(data)
arr2.push(data)
localStorage.setItem("movie",JSON.stringify(arr2))
window.location.href="checkout.html"
}