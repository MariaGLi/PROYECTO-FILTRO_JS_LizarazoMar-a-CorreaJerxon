class CreateBoxOne extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="caja1">
            <div class="contentSuper">
                <h1>SpaceX's Dragon</h1>
                <p>Flight Control Interface</p>
            </div>
            <div class="content">
                <p>
                    This is a small attempt to recreate the flight control interface of SpaceX’s Crew Dragon spacecraft from one of their demo videos. The interface contains fake data, labels & colours and is by no way associated to SpaceX. If you find any errors or improvements, please feel free to DM me on Twitter
                    (links given below).
                    <br><br>
                    Feel free to share or duplicate it for personal projects. Any attribution is always appreciated.
                </p>
            </div>
            <div class="caja">
                <div class="twit">
                    <div class="a1">
                        <a class="url" href="https://github.com/MariaGLi"></a>
                    </div>
                    <div class="a2">
                        <a class="url2" href="https://github.com/JaynAP1"></a>
                    </div>
                </div>
                <div class="btn">
                    <a class="boton_next" href="public/Rocket.html">Launch</a>
                </div>
            </div>
        </div>
        `
    }
}
class CreateBoxTwo extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <div class="imagen">
            <img src="Storage/img/SpaceX 3D Model Render.png">
        </div>
        <div class="logo">
            <img id="loguito" src="/Storage/img/Space X.jpg">
        </div>
        `
    }
}
customElements.define("box-one",CreateBoxOne);
customElements.define("box-two",CreateBoxTwo);