import { Sprite, type Application } from 'pixi.js'
import { GameLoader } from './GameLoader'

export class Game {
    public app: Application
    public gameLoader: GameLoader

    constructor({ app, gameLoader }: { app: Application; gameLoader: GameLoader }) {
        this.app = app
        this.app.stage.interactive = true
        this.gameLoader = gameLoader
        this.app.ticker.add(this.handleAppTick)
        this.app.stage.on('pointertap', this.handleClick)
    }

    setupLayout(): void {
        const { textures, animations } = this.gameLoader.spritesheet
        console.log(textures)
        this.app.stage.addChild(new Sprite(textures['chicken-000.png']))
    }

    handleAppTick = (): void => {}
    handleClick = (): void => {
        console.log('click')
    }
}
