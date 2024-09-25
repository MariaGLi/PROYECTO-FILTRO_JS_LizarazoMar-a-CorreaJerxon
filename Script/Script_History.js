let url = "https://api.spacexdata.com/v4/history"
var nextArrow = 0

function Company(){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);

        let title = document.getElementById("titleHistory")
        let text = document.getElementById("textHistory")
        let unix =document.getElementById("date")
        let utc =document.getElementById("date2")
        let arrow = document.getElementById("arrowLeft")
        let arrow2 = document.getElementById("arrowRight")

        document.addEventListener("keydown",(keys)=>{
            if(keys.key === "ArrowRight"){
                Arrow(nextArrow)
                if(nextArrow<=13){
                    nextArrow += 1
                } 
            }
        });
        document.addEventListener("keydown",(keys)=>{
            if(keys.key === "ArrowLeft"){
                Arrow(nextArrow)
                if(nextArrow>=1){
                    nextArrow -= 1
                }
            }
        });

        arrow2.addEventListener('click', ()=>{
            Arrow(nextArrow)
            if(nextArrow<=13){
                nextArrow += 1
            }
        });
        arrow.addEventListener('click', ()=>{
            Arrow(nextArrow)
            if(nextArrow>=1){
                nextArrow -= 1
            }
        });
        function Arrow(LeftRight){
            title.innerHTML=`
            <h1 id="titleHistory">${data[nextArrow].title}</h1>
            `
            text.innerHTML=`
            <p id="textHistory">${data[nextArrow].details}</p>
            `
            unix.innerHTML=`
            <p id="textHistory">${data[nextArrow].event_date_unix}</p>
            `
            utc.innerHTML=`
            <p id="textHistory">${data[nextArrow].event_date_utc}</p>
            `
        }
        Arrow()
    })
}
Company()
list["/Img/fh_performance.mp4","/Img/History/Falcon-1.jpg","https://cdn4.dogonews.com/images/9431701b-d0ae-4118-b654-912a4cdccd2e/27349970361_56da6d98dd_k.jpg","https://images.theconversation.com/files/336822/original/file-20200521-102637-1cyg1v1.jpg?ixlib=rb-4.1.0&rect=18%2C27%2C1964%2C2016&q=45&auto=format&w=926&fit=clip","https://m.media-amazon.com/images/I/617xOakmjpL._AC_SX679_.jpg","https://www.universetoday.com/wp-content/uploads/2015/12/orbcomm_sunrise_resized.jpg","https://www.wfla.com/wp-content/uploads/sites/71/2021/05/SpaceX-Falcon-9.jpg","https://i.pinimg.com/564x/5f/8a/61/5f8a613614dcab1664afda60fa0f99cb.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/CRS-8_%2826239020092%29.jpg/800px-CRS-8_%2826239020092%29.jpg","https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg"]