import { Container, Graphics } from 'pixi.js'

export class Tile extends Container {
    public graphics!: Graphics
    constructor() {
        super()
        this.graphics = new Graphics()
        this.addChild(this.graphics)

        this.eventMode = 'static'
        this.cursor = 'pointer'
        this.on('mouseover', this.handleMouseOver)
        this.on('mouseout', this.handleMouseOut)
        this.on('pointertap', this.handleClick)
    }

    handleClick = (): void => {}
    handleMouseOver = (): void => {}
    handleMouseOut = (): void => {}
}
