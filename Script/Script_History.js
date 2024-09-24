let url = "https://api.spacexdata.com/v4/history"

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);

        let title = document.getElementById("titleHistory")
        let text = document.getElementById("textHistory")
        let unix =document.getElementById("date")
        let utc =document.getElementById("date2")

        title.innerHTML=`
        <h1 id="titleHistory">${data[0].title}</h1>
        `
        text.innerHTML=`
        <p id="textHistory">${data[0].details}</p>
        `
        unix.innerHTML=`
        <p id="textHistory">${data[0].event_date_unix}</p>
        `
        utc.innerHTML=`
        <p id="textHistory">${data[0].event_date_utc}</p>
        `
    })
}
Company()