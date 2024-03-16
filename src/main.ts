import { Application, Assets } from 'pixi.js'
import './style.css'
import { GameLoader } from './core/GameLoader'
import { LoaderScene } from './scene/LoaderScene'
import { Game } from './core/Game'

async function start(): Promise<void> {
    const app = new Application()
    await app.init({ resizeTo: window, background: 'lightblue' })

    const gameLoader = new GameLoader()
    await gameLoader.loadAll()

    const game = new Game({ app, gameLoader })
    game.setupLayout()

    document.body.appendChild(app.canvas)
}

start()
