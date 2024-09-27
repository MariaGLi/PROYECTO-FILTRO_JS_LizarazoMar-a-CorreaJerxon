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
    });
}
Company()
class CreateBoxOne extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="Rocket">
            <a href="https://www.spacex.com/"><img id="Rocket" src="/Storage/img/Space X.jpg"></a>
            <img id="Shadow" src="/Storage/img/Shadow.png">
        </div>  
        `
    }
}
customElements.define("box-uno",CreateBoxOne);
class CreateBoxTwo extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <nav class="nav2">
            <img id="imagen" src="https://live.staticflickr.com/65535/51929288928_c7609deeac_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/51829734959_651974255c_k.jpg%22">
            <img id="imagen" src="//live.staticflickr.com/65535/51671874407_19ca91229f_k.jpg">
            <img id="imagen" src="//live.staticflickr.com/65535/52218116121_d7828a5069_k.jpg">
            <img id="imagen" src="//live.staticflickr.com/65535/52638916234_f0398f23fa_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/52553136344_ae6da05b8b_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/52382109818_25444b235e_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/52822391709_276e220b7d_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/52739186775_6045f9d2fc_k.jpg">
            <img id="imagen" src="https://live.staticflickr.com/65535/52687306805_126b28e686_k.jpg">
        </nav>
        `
    }
}
customElements.define("box-two",CreateBoxTwo)
class CreateBoxThree extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <footer>
            <div class="CajaBottom">
                <a href="/public/Rocket.html"><i class='bx bxs-rocket'></i></a>
                <a href="/public/Capsules.html"><i id="Capsule" class='bx bxs-diamond'></i></a>
                <a href="/public/History.html"><i class='bx bxs-book'></i></a>
                <i class='bx bxs-factory'  style="color: red;" ></i>
            </div>
        </footer>
        `
    }
}
customElements.define("box-three",CreateBoxThree)