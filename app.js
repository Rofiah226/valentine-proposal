const yesBtn = document.querySelector('#yes')
const noBtn= document.querySelector('#no')
const paragraph=document.querySelector('p')
const extraParagraph = document.querySelector('#extrapara')
const sadImage = document.querySelector('#sad-image')
const twoTeddy = document.querySelector('#two-teddies')

paragraph.style.color='green'
// noBtn.style.backgroundColor='red'
twoTeddy.style.display='none'
let clickCount = 0 
noBtn.addEventListener('click',()=>{
    clickCount += 1
    if(clickCount===1){
        noBtn.textContent = 'Are you sure?'
        yesBtn.style.padding = '10px'
    }else if (clickCount === 2){
        noBtn.textContent='Really sure?'
        yesBtn.style.padding ='20px'
        paragraph.style.color='red'
    }else if (clickCount === 3){
        noBtn.textContent='Think again!'
        yesBtn.style.padding ='30px'
         yesBtn.style.fontSize = '1.5rem'
    }else if(clickCount === 4){
        noBtn.textContent='Last chance!'
        yesBtn.style.padding ='40px'
        yesBtn.style.fontSize = '2rem'
    }else if(clickCount === 5){
        noBtn.textContent='Surely not!'
        yesBtn.style.padding ='50px'
    }else if(clickCount === 6){
        noBtn.textContent='You will regret this!'
        yesBtn.style.padding ='55px'
    }else if(clickCount === 7){
        noBtn.textContent='Give it another thought!'
        yesBtn.style.padding ='60px'
         yesBtn.style.fontSize = '2.5rem'
    }else if(clickCount === 8){
        noBtn.textContent='Are you absolutely certain?'
        yesBtn.style.padding ='65px'
    }else if(clickCount === 9){
        noBtn.textContent='This could be a mistake!'
        yesBtn.style.padding ='70px'
    }else if(clickCount === 10){
        noBtn.textContent='Have a heart!'
        yesBtn.style.padding ='80px'
         yesBtn.style.fontSize = '3.5rem'
    }else if(clickCount === 11){
        noBtn.textContent='Don\'t be so cold !'
        yesBtn.style.padding ='85px'
    }else if(clickCount === 12){
        noBtn.textContent='Change of heart?'
        yesBtn.style.padding ='90px'
         yesBtn.style.fontSize = '4rem'
    }else if(clickCount === 13){
        noBtn.textContent='Wouldn\'t you reconsider?'
        yesBtn.style.padding ='95px'
    }else if(clickCount === 14){
        noBtn.textContent='Is that your final answer?'
        yesBtn.style.padding ='100px'
         yesBtn.style.fontSize = '4.5rem'
    }else if(clickCount === 15){
        noBtn.textContent='You\'re breaking my heart :('
        yesBtn.style.padding ='110px'
    }
})
// noBtn.addEventListener('click',()=>{
//     noBtn.textContent='Really sure?'
//     yesBtn.style.padding = '30px'
// })

yesBtn.addEventListener('click',() =>{
//    const newPara = document.createElement('p')
//     newPara.textContent = 'Hi'
sadImage.style.display = 'none'
twoTeddy.style.display='block'
yesBtn.style.display='none'
noBtn.style.display='none'
paragraph.textContent='You are my valentine!!!🌹'


    extraParagraph.appendChild(newPara)
})
