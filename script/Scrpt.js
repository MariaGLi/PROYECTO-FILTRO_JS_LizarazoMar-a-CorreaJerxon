const NameVehicle = document.getElementById("NameVehicle");

//Boxs
const Box18 = document.querySelector(".Box18");

fetch("https://api.spacexdata.com/v4/rockets")
.then(Res =>Res.json())
.then(Data =>{
    console.log(Data)

    NameVehicle.textContent = Data[0].name

    Box18.innerHTML = `
        <h2>Engine</h2>
        <HR style="border-color:#9499c3;"></HR>
        <div class="Text">
            <p class="MainText">Number</p>
            <p>${Data[0].engines.number}</p>
        </div>
        <div class="Text">
            <p class="MainText">Type</p>
            <p>${Data[0].engines.type}</p>
        </div>
        <div class="Text">
            <p class="MainText">Version</p>
            <p>${Data[0].engines.version}</p>
        </div>
        <div class="Text">
            <p class="MainText">Layout</p>
            <p>${Data[0].engines.layout}</p>
        </div>
    `

})