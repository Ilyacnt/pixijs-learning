import { Container } from 'pixi.js'

export interface IScene {
    handleUpdate: (deltaMS: number) => void
    handleResize: (options: { viewWidth: number; viewHeight: number }) => void
}

export class DefaultScene extends Container implements IScene {
    handleUpdate(): void {}
    handleResize(): void {}
}
