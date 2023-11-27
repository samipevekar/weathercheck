let submit=document.getElementById("sub")
let output=document.getElementById("output")
submit.addEventListener("click",()=>{
    
let input=document.getElementById('weather').value
    let api ="https://goweather.herokuapp.com/weather/"+input
    fetch(api)
.then(res=>{
    return res.json()
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

    
    else{
        output.style.color="black"
    }
    console.log(text)
}).catch(err=>{
    document.getElementById("output").innerHTML=""
    
    document.getElementById('output').insertAdjacentHTML("beforeend",`<span>Enter your city name</span>`)
})


})

