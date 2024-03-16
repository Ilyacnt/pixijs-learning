import { Assets, type Spritesheet } from 'pixi.js'

export interface Settings {
    grid: {
        'width-tiles': number
        'height-tiles': number
    }
}

export type Resources = any

export class GameLoader {
    loader: typeof Assets
    // settings!: Settings
    spritesheet!: Spritesheet

    constructor() {
        this.loader = Assets
    }

    async loadAll(): Promise<void> {
        await this.loadSettings()
        await this.loadResources()
    }

    async loadSettings(): Promise<void> {
        // this.settings = await fetch('settings.json').then(async (res) => await res.json())
    }

    async loadResources(): Promise<void> {
        this.loader.add({ alias: 'tilemap', src: './src/assets/spritesheet.json' })
        this.spritesheet = await Assets.load('tilemap')

        console.log(this.spritesheet)
    }
}
