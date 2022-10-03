const score = document.querySelector(".score")
let count = 0
const smartob = document.querySelector('.smartbob')
const pipe = document.querySelector('.pipe')
const jump = () => {
    smartob.classList.add('jump')

    setTimeout(() => {
        smartob.classList.remove('jump')
    }, 500)
}



    const loop = setInterval((click) => {

        const pipePosition = pipe.offsetLeft
        const smartbobPosition = +window.getComputedStyle(smartob).bottom.replace('px', '')
        
        count++
        score.innerHTML = `Score: ${count}`


        if(pipePosition <= 120 && pipePosition > 0 && smartbobPosition < 80){

            
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px` 

            smartob.style.animation = 'none'
            smartob.style.bottom = `${smartbobPosition}px` 
        
            // smartob.scr = ['./framessmartbob/smartbob-dead.gif'] //erro na troca de imagem
            
            alert("game over :(\nClque 'ok' para recomeçar\n" + score.innerHTML);
            // document.body.innerHTML = '<h4 class="game-over""> Atualize a página e jogue novamente </h4>'; // criando título ao final do jogo

            window.location.href = './inicio.html' // Troca de tela

            clearInterval(loop)
        }

    }, 10)

document.addEventListener('keydown', jump)