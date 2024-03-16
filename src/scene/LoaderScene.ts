import { Container, Assets, type AssetsManifest } from 'pixi.js'
import { IScene } from './DefaultScene'

const manifest: AssetsManifest = {
    bundles: [
        {
            name: 'bundle-1',
            assets: {
                spritesheet: './src/assets/spritesheet.json',
                // spritesheet: './public/spritesheet.json',
                // background: './background.png',
                // font: './font.woff2',
            },
        },
    ],
}

export class LoaderScene extends Container implements IScene {
    async initializeLoader(): Promise<void> {
        await Assets.init({ manifest })
        await Assets.loadBundle(
            manifest.bundles.map((bundle) => bundle.name),
            this.downloadProgress
        )
    }

    private readonly downloadProgress = (progressRatio: number): void => {
        console.log(progressRatio)
    }
}
