let url = "https://api.spacexdata.com/v4/company"

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.ceo);
        let name = document.getElementById("NameVehicle")
        name.innerHTML=`
        <h1 id="NameVehicle">${data.name}</h1>
        `
    })
}
Company()