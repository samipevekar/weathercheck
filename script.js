let submit=document.getElementById("sub")
let output=document.getElementById("output")
submit.addEventListener("click",()=>{
    
let input=document.getElementById('weather').value.trim()
    let api ="https://goweather.herokuapp.com/weather/"+input
    if(input===''){
        document.getElementById("output").innerHTML="<span>Enter correct city name</span>"
    }
    else{
    fetch(api)
.then(res=>{        
    return res.json()
  }).then(text =>{
    
    
    document.getElementById('output').innerHTML = '';
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Temperature : ${text.temperature}</p>`)
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Wind : ${text.wind}</p>`)
    document.getElementById('output').insertAdjacentHTML("beforeend",`<p>Weather : ${text.description}</p>`)

    if(text.temperature=='' || text.wind=='' || text.description=='' ){
        document.getElementById("output").innerHTML="Error : enter correct city name"
        output.style.color="red"
        output.style.fontSize="20px"
    }
    else if(text===''){
        document.getElementById("output").innerHTML="Error : application is not working"
    }
    else if(input.value==''){
        document.getElementById("output").innerHTML="Enter your city name"
    }

    
    else{
        output.style.color="black"
    }
    console.log(text)
})}


})

