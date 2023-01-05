const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})


const Pages=document.querySelectorAll(".hidden")
Pages.forEach((el)=>observer.observe(el))



const observer1= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("slideShow")
        }
        else{
            entry.target.classList.remove("slideShow")
        }
    })
})

const destinationBox=document.querySelectorAll(".slide")
destinationBox.forEach((el)=>observer1.observe(el))



const observer2= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("position")
        }
        else{
            entry.target.classList.remove("position")
        }
    })
})

const aboutBox=document.querySelectorAll(".angular")
aboutBox.forEach((el)=>observer2.observe(el))



const observer4= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show1")
        }
        else{
            entry.target.classList.remove("show1")
        }
    })
})

const hidden1=document.querySelectorAll(".hidden1")
hidden1.forEach((el)=>observer4.observe(el))




const observer3= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("position1")
        }
        else{
            entry.target.classList.remove("position1")
        }
    })
})




const eventBox=document.querySelectorAll(".angular1")
eventBox.forEach((el)=>observer3.observe(el))

const observer5= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }
        else{
            entry.target.classList.remove("show2")
        }
    })
})


const hidden2=document.querySelectorAll(".hidden2")
hidden2.forEach((el)=>observer5.observe(el))



const box1=document.querySelectorAll(".front");
box1.forEach((box)=>{
    box.style.transform=`Perspective(1000px)`+`rotateX(-1.38deg)`+`rotateY(-21.73deg)`+`scale3D(1,1,1)`;
})


const box=document.querySelectorAll(".back");
box.forEach((box)=>{
    box.style.transform=`Perspective(1000px)`+`rotateX(1.38deg)`+`rotateY(21.73deg)`+`scale3D(1,1,1)`;
})