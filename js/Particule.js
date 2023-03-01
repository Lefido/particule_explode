


export class Particule {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        // this.x = Math.random() * canvas.width
        // this.y = Math.random() * canvas.height
        this.size = Math.random() * 90 + 2
        this.rayon = Math.random() * 40 + 10
        this.speedX = Math.random() * this.rayon - (this.rayon/2)
        this.speedY = Math.random() * this.rayon - (this.rayon/2)
        this.gravity = 0.5
        this.masse = this.size / 45
        this.hue = Math.random() * 200 + 1
        this.images = document.querySelectorAll('.rock')

        let randomizeImage = Math.floor(Math.random() * this.images.length)
        // console.log(randomizeImage)
        this.image = this.images[randomizeImage]
        this.va = Math.random() * 0.8 - 0.4
        this.angle = 0
        // this.bounce = 10
        
    }
    update() {

        this.angle += this.va
        this.x += this.speedX
        this.speedY += this.masse * this.gravity
        this.y += this.speedY
        if (this.size > 1) this.size -= 0.5

        if (this.x + this.size >= canvas.width || this.x <= 0 ) {

            this.speedX *= -0.7

            if (this.x + this.size >= canvas.width) this.x = canvas.width - this.size
            if (this.x <= 0 ) this.x = 0
            
        }

        if (this.y + this.size > canvas.height) {

            this.speedY *= -0.9

            this.y = canvas.height - this.size

        }

    }
    draw(context) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(this.angle)

        // context.fillStyle = "hsl(" + this.hue + "deg" + ",100%, 50%)";
        // context.beginPath()
        // context.arc(this.x, this.y, this.size , 0 , Math.PI * 2)
        // context.fill();

        context.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size )
        context.restore()
    }
}
