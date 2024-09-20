const NameVehicle = document.getElementById("NameVehicle");

//Boxs
const Box18 = document.querySelector(".Box18");
const FirstProgressBar = document.querySelector(".FirstProgressBar");
const SecondProgressBar = document.querySelector(".SecondProgressBar");
const HistoryContent = document.querySelector(".HistoryContent");

//Objects
const RocketImg = document.getElementById("Rocket");

//Icons
const Check1 = document.getElementById("Check1");
const Check2 = document.getElementById("Check2");
const Check3 = document.getElementById("Check3");
const Check4 = document.getElementById("Check4");
const Check5 = document.getElementById("Check5");
const Check6 = document.getElementById("Check6");
const Check7 = document.getElementById("Check7");

fetch("https://api.spacexdata.com/v4/rockets")
.then(Res =>Res.json())
.then(Data =>{
    
    //Rocket Position

    let Position = 0

    //Operations

    let KgVehicle = (Data[Position].mass.kg)/1000 +"kg";
    let HeightVehicle = (Data[Position].diameter.meters)+"m"
    let LowEarthOrbitVehicle = (Data[Position].payload_weights[0].kg)+"kg"
    let DiameterRocketShield = (Data[Position].second_stage.payloads.composite_fairing.height.meters)+"m"
    let HeightRocketShield = (Data[Position].second_stage.payloads.composite_fairing.diameter.meters)+"m"
    let ThrustSeaLevel = Data[Position].first_stage.thrust_sea_level.kN+"Kn"
    let ThrustVacuum = Data[Position].first_stage.thrust_vacuum.kN+"Kn"

    //Name Vehicle
    NameVehicle.textContent = Data[Position].name


    //Content Boxes

    HistoryContent.innerHTML = `<p>${Data[Position].description}</p>`;

    RocketImg.src = Data[Position].flickr_images[0]

    Box18.innerHTML = `
        <h2>Engine</h2>
        <HR style="border-color:#9499c3;"></HR>
        <div class="Text">
            <p class="MainText">Number</p>
            <p>${Data[Position].engines.number}</p>
        </div>
        <div class="Text">
            <p class="MainText">Type</p>
            <p>${Data[Position].engines.type}</p>
        </div>
        <div class="Text">
            <p class="MainText">Version</p>
            <p>${Data[Position].engines.version}</p>
        </div>
        <div class="Text">
            <p class="MainText">Layout</p>
            <p>${Data[Position].engines.layout}</p>
        </div>
    `

    FirstProgressBar.innerHTML = `
        <div class="Box8">
            <div class="Bar">
                <p>Rocket Weight</p>
                <div class="ProgressBar1"></div>
            </div>
            <h3>${KgVehicle}</h3>  
        </div>
        <div class="Box9">
            <div class="Bar">
                <p>Low Earth Orbit</p>
                <div class="ProgressBar2"></div>
            </div>
            <h3>${LowEarthOrbitVehicle}</h3>  
        </div>
        <div class="Box10">
            <div class="Bar">
                <p>Rocket Diameter</p>
                <div class="ProgressBar3"></div>
            </div>
            <h3>${HeightVehicle}</h3>  
        </div>
        <div class="Box11">
            <div class="Bar">
                <p>Diameter Rocket Shield</p>
                <div class="ProgressBar4"></div>
            </div>
            <h3>${HeightRocketShield}</h3>  
        </div>
        <div class="Box12">
            <div class="Bar">
                <p>Height Rocket Shield</p>
                <div class="ProgressBar5"></div>
            </div>
            <h3>${DiameterRocketShield}</h3>  
        </div>
    `

    SecondProgressBar.innerHTML = `
        <div class="Box13">
            <div class="Bar">
                <p>Thrust Sea Level<p>
                <div class="ProgressBar6"></div>
            </div>
            <h3>${ThrustSeaLevel}</h3>
        </div>
        <div class="Box14">
            <div class="Bar">
                <p>Thrust Vacuum</p>
                <div class="ProgressBar7"></div>
            </div>
            <h3>${ThrustVacuum}</h3>
        </div>
    `
})
function WaitsColor(){
    
}