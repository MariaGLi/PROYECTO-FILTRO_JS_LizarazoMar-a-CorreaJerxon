let url = "https://api.spacexdata.com/v4/company"

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data.ceo);
        let name = document.getElementById("NameCompany")
        name.innerHTML=`
        <h1 id="NameVehicle">${data.name}</h1>
        `
        let text = document.getElementById("textCompany")
        text.innerHTML=`
        <p id="textCompany">${data.summary}</p>
        `
    })

    list=["https://www.flickr.com/photos/spacex/51929288928/","https://www.flickr.com/photos/spacex/51829734959/","https://www.flickr.com/photos/spacex/51671874407/","https://www.flickr.com/photos/spacex/52218116121/","https://www.flickr.com/photos/spacex/52638916234/","https://www.flickr.com/photos/spacex/52553136344/","https://www.flickr.com/photos/spacex/52382109818/","https://www.flickr.com/photos/spacex/52822391709/","https://www.flickr.com/photos/spacex/52739186775/","https://www.flickr.com/photos/spacex/52687306805/"]
    let img = document.getElementById("imagen")
    img.src= list[0]
}
Company()

/* https://66e45b6ed2405277ed14088d.mockapi.io/Space-X */