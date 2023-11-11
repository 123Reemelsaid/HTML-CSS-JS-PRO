const btn=document.getElementById("btn")
const joke=document.getElementById("joke")
 apikey='qLydIetDSmLgQRKQtPOUHw==ScZfEpvd4oupyyZc';
const options={
method:"GET",
headers :{
    "X-Api-Key":apikey,
},
}
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit="

async function getjoke(){
try {
    joke.innerText="updating...";
btn.disabled=true;
btn.innerText="loading...";

const response=await fetch(apiURL,options)
const data=await response.json()

btn.disabled=false;
btn.innerText="Tell me a Joke";
joke.innerText=data[0].joke;
} catch (error) {

    joke.innerText="an error happened,try again later"
    console.log(error)
}


}



btn.addEventListener("click",getjoke)




