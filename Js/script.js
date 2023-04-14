console.log("create a slider Using JavasSript")

let slide = document.querySelectorAll(".slider");
let next = document.querySelector(".slider_arrow_right");
let perv = document.querySelector(".slider_arrow_left");
let counter = 0


slide.forEach((element, index) => {
    element.style.left = `${index * 100}%`
    console.log("good")
});


next.addEventListener("click", ()=>{
    counter++
    sliderShow()
    console.log('next')
})
perv.addEventListener("click", ()=>{
    counter--
    sliderShow()
    
})


// loop 

const sliderShow = () => {
    slide.forEach(Element => {
        Element.style.transform = `translateX(-${counter * 100}%)`
        
    })

    if(counter == slide.length){
        counter = 0
        Element = 0
    }
    if(counter ===! 0){
        counter = 0
        Element = 0
    }
}
