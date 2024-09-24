let url = "https://api.spacexdata.com/v4/company"

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.ceo);

        let name = document.getElementById("NameCompany")
        let text = document.getElementById("textCompany")
        let ceo = document.getElementById("name")
        let coo = document.getElementById("name2")
        let cto = document.getElementById("name3")
        let date = document.getElementById("date")

        name.innerHTML=`
        <h1 id="NameVehicle">${data.name}</h1>
        `
        text.innerHTML=`
        <p id="textCompany">${data.summary}</p>
        `
        ceo.innerHTML=`
        <p>${data.ceo}</p>
        `
        coo.innerHTML=`
        <p>${data.coo}</p>
        `
        cto.innerHTML=`
        <p>${data.cto_propulsion}</p>
        `
        date.innerHTML=`
        <p>${data.founded}</p>
        `
    })
}
Company()