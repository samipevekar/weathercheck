let submit=document.getElementById("sub")
let output=document.getElementById("output")
submit.addEventListener("click",()=>{
    
let input=document.getElementById('weather').value.trim()
    let api ="https://goweather.herokuapp.com/weather/"+input
    fetch(api)
.then(res=>{
    if(res.ok){
        
    return res.json()

    }
    else{
        document.getElementById('output').insertAdjacentHTML("beforeend",`<h2>Error 404 : try after some time</h2>`)
    }
}).then(text =>{
    
    
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Temperature : ${text.temperature}</p>`)
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Wind : ${text.wind}</p>`)
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Weather : ${text.description}</p>`)

    if(text.temperature=='' || text.wind=='' || text.description=='' ){
        document.getElementById("output").innerHTML="Error : enter your city name"
        output.style.color="red"
        output.style.fontSize="20px"
    }
    else if(text===''){
        document.getElementById("output").innerHTML="Error : application is not working"
    }
    else if(text.input===''){
        document.getElementById("output").innerHTML="Enter your city name"
    }
    
    else{
        output.style.color="black"
    }
    console.log(text)
})


})

