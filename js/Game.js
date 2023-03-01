
import { Particule } from "./Particule.js"

export class Game {
    constructor() {

        this.particules = []
        
    }
    update() {

        this.particules.forEach((particule, i) => {

            particule.update()
            if (particule.size <= 1) {
                this.particules.splice(i, 1)
            }

        })

        // console.log("Nb Particule :" , this.particules.length)

    }
    draw(context) {

        this.particules.forEach((particule, i) => {

            particule.draw(context)
            if (particule.size <= 1) {
                this.particules.splice(i, 1)
            }
           
        })

        if (this.particules.length === 1) console.log ("Traitement des partiules terminées!")

    }

    newParticule(x, y, numParticule) {

        for (let i = 0 ; i < numParticule ; i++) {
            this.particules.push(new Particule(this, x, y))
        }

    }
}