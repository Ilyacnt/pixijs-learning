import { Container, Graphics, Sprite, Texture } from 'pixi.js'

export class StartModal extends Container {
    public background!: Graphics
    public text!: Text
    public icon!: Sprite

    constructor(texture: Texture) {
        super()
        this.setup(texture)
        this.draw()
    }

    setup(texture: Texture): void {
        this.background = new Graphics()
        this.addChild(this.background)

        this.text = new Text('Привет Habr!')
        this.addChild(this.text)

        this.icon = new Sprite(texture)
        this.addChild(this.icon)
    }

    draw(): void {
        this.background.beginFill(0xff00ff)
        this.background.drawRoundedRect(0, 0, 500, 500, 5)
        this.background.endFill()
    }
}
