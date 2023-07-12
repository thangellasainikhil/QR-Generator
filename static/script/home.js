function playMusic(){

    document.body.innerHTML="<img src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' /><h1>Loading...</h1>"
    document.body.style.textAlign="center"
    let audio = new Audio("../static/audio/WhatsApp Audio 2022-06-30 at 12.36.35 AM.mpeg")
    audio.play()
    setTimeout(()=>{

        const url = 'http://127.0.0.1:5000/getStalls'
        const response = fetch(url)
        
        window.location.href = 'http://127.0.0.1:5000/getStalls';

    }, 3000)

}