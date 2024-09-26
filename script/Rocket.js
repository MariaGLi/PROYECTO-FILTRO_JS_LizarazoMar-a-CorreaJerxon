//Boxs
const Box17 = document.querySelector(".Box17");
const Box18 = document.querySelector(".Box18");
const FirstProgressBar = document.querySelector(".FirstProgressBar");
const SecondProgressBar = document.querySelector(".SecondProgressBar");
const HistoryContent = document.querySelector(".HistoryContent");
const SoyModal = document.getElementById("Soymodal");
const Browse = document.querySelectorAll(".Browse");

//Objects
const RocketImg = document.getElementById("Rocket");
const NameVehicle = document.getElementById("NameVehicle");
const Left = document.getElementById("Left");
const Right = document.getElementById("Right");
const BotonCerrarModal=document.getElementById("CerrarModal");
const PCheck = document.querySelectorAll("#PCheck");
const Check = document.querySelectorAll("#Check");

//Variables
let SumVariable = 0

var AnchoVentana = window.innerWidth

if (AnchoVentana > 500){
    document.addEventListener("DOMContentLoaded",()=>{
        SoyModal.showModal();
        BotonCerrarModal.addEventListener("click",()=>{
            SoyModal.close();
        })
    })
}



fetch("https://api.spacexdata.com/v4/rockets")
.then(Res =>Res.json())
.then(Data =>{

    Operations(SumVariable)
    
    document.addEventListener("keydown",(keys)=>{
        if(keys.key === "ArrowRight"){
            if(SumVariable < 3){
                SumVariable +=1
            }
            Operations(SumVariable)
        }
        else if(keys.key === "ArrowLeft"){
            if(SumVariable >= 1){
                SumVariable-=1
            }
            
            Operations(SumVariable)
        }
    })

    //Navigation
    Browse.forEach(Obj =>{
        Obj.addEventListener("click",()=>{
            Obj.style="background-color: #1e2031;"
            let SumVariable =  Obj.getAttribute('data-id')
            Operations(SumVariable-1)
        })
    })

    //Operations
    function Operations(Position){
        let KgVehicle = (Data[Position].mass.kg)/1000 +"kg";
        let HeightVehicle = (Data[Position].diameter.meters)+"m"
        let LowEarthOrbitVehicle = (Data[Position].payload_weights[0].kg)+"kg"
        let DiameterRocketShield = (Data[Position].second_stage.payloads.composite_fairing.height.meters)+"m"
        let HeightRocketShield = (Data[Position].second_stage.payloads.composite_fairing.diameter.meters)+"m"
        let ThrustSeaLevel = Data[Position].first_stage.thrust_sea_level.kN+"Kn"
        let ThrustVacuum = Data[Position].first_stage.thrust_vacuum.kN+"Kn"

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
        let PositionImg = 0

        document.addEventListener("keydown",(keyss) => {
            if(keyss.key === "ArrowUp"){
                if(SumVariable = 0){
                    if(PositionImg < 1){
                        PositionImg +=1
                    }
                }
                else if(SumVariable = 1){
                    if(PositionImg < 2){
                        PositionImg +=1
                    }
                }
                else if(SumVariable = 2){
                    if(PositionImg < 3){
                        PositionImg +=1
                    }
                }
                else if(SumVariable = 3){
                    if(PositionImg < 4){
                        PositionImg +=1
                    }
                }
                RocketImg.src = Data[Position].flickr_images[PositionImg]
            }
            else if(keyss.key === "ArrowDown"){
                if (PositionImg > 0){
                    PositionImg -=1
                }
                RocketImg.src = Data[Position].flickr_images[PositionImg]
            }
        })  
        //Name Vehicle
        NameVehicle.textContent = Data[Position].name

        //Content Boxes

        HistoryContent.innerHTML = `<p>${Data[Position].description}</p>`;

        RocketImg.src = Data[Position].flickr_images[PositionImg]    
        
        Box17.innerHTML = `
                <div class="Circle1" style="--Porcen: 120">
                    <svg width="142px" heigth="152px">
                        <circle r="50" cx="50%" cy="50%" pathlengh="100"></circle>
                    </svg>
                    <span>50%</span>
                </div>
                <div class="Circle2" style="--Porcen: 260">
                    <svg width="142px" heigth="152px">
                        <circle r="50" cx="50%" cy="50%" pathlengh="100"></circle>
                    </svg>
                    <span>80%</span>
                </div>
        `

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
        }
        setInterval(ColorCheckesG,2000)
        setInterval(Checkes,5000)
        
})
function Checkes(){
    PCheck.forEach(Charge =>{
        Charge.textContent="Normal"
    })
    
}
function ColorCheckesG(){
    Check.forEach(Checks=>{
        Checks.style ="color:green"
    })
    setInterval(ColorCheckesN,3000)
}
function ColorCheckesN(){
    Check.forEach(Checks=>{
        Checks.style ="color:#9499c3"
    })
}

