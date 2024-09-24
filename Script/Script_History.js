let url = "https://api.spacexdata.com/v4/history"

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);

        let title = document.getElementById("titleHistory")
        let text = document.getElementById("textHistory")

        title.innerHTML=`
        <h1 id="titleHistory">${data[0].title}</h1>
        `
        text.innerHTML=`
        <p id="textHistory">${data[0].details}</p>
        `
    })
}
Company()