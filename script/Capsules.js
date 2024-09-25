//Box
const Content = document.querySelector(".Content");
const BoxLeft = document.querySelector(".BoxLeft");
const BoxRight = document.querySelector(".BoxRight");
//Objects
const Name = document.getElementById("NameVehicle");

fetch("https://api.spacexdata.com/v4/capsules")
.then(Res => Res.json())
.then(Data =>{
    let Contador = 0
    Data.forEach(Capsulas => {
        Contador += 1
        if(Capsulas.status === "retired"){
            Content.innerHTML += `
            <div data-id="${Contador}" class="BoxInformation">
                <h3>${Capsulas.serial}</h3>
                <p style="color:red">${Capsulas.status}</p>
            </div>
            `
        }
        else if(Capsulas.status === "active"){
            Content.innerHTML += `
            <div data-id="${Contador}" class="BoxInformation">
                <h3>${Capsulas.serial}</h3>
                <p style="color:green">${Capsulas.status}</p>
            </div>
            `
        }
        else if(Capsulas.status === "unknown"){
            Content.innerHTML += `
            <div data-id="${Contador}" class="BoxInformation">
                <h3>${Capsulas.serial}</h3>
                <p style="color:orange">${Capsulas.status}</p>
            </div>
            `
        }
    });

    document.querySelectorAll(".BoxInformation").forEach(SelectionCapsules=>{
        SelectionCapsules.addEventListener("click",()=>{
            let Selection = SelectionCapsules.getAttribute("data-id")
            PrintData(Selection-1)
        })   
    })

    function PrintData(Number){
        let Position = Data[Number]
        Name.textContent = Position.serial

        BoxLeft.innerHTML =`
            <div class="Type">
                <h2>Type</h2>
                <p id="Type">${Position.type}</p>
            </div>
            <div class="Id">
                <h2>iD</h2>
                <p id="id">${Position.id}</p>
            </div>
            <div class="Reuses">
                <h2>Reuses Count</h2>
                <p id="Reuses">${Position.reuse_count}</p>
            </div>
            <div class="LastLanding">
                <h2>Last Landing</h2>
                <p id="Last">${Position.land_landings}</p>
            </div>
        `
        BoxRight.innerHTML = `
            <div class="Status">
                <h2>Status</h2>
                <p id="Status">${Position.status}</p>
            </div>
            <div class="Update">
                <h2>Last Update</h2>
                <p id="Update">${Position.last_update}</p>
            </div>
            <div class="Water">
                <h2>Water Landing</h2>
                <p id="Water">${Position.water_landings}</p>
            </div>
        `
    }
    
})