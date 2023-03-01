
import { Particule } from "./js/Particule.js";
import { Game } from "./js/Game.js";


const mouse = {
    x: undefined,
    y: undefined,
}

// canvas.addEventListener('click', function(event) {
//     mouse.x = event.x
//     mouse.y = event.y

//     let numberParticule = 200

//     for (i = 0; i < numberParticule; i++) {
//         particulesArray.push(new Particule())
//     }

// });



window.addEventListener('load', function() {

 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const game = new Game()

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    
    })

    this.window.addEventListener('click', function(event) {
        let x = event.x
        let y = event.y
        console.clear()
        let nb = 100
        let numberParticule = Math.floor(Math.random() * nb + 1)
        game.newParticule(x, y, numberParticule)
        console.log("Nb Particule a traiter :", game.particules.length)
    
    });

    function animate() {
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(0,0,0,0.4)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }
    
    animate()

})



