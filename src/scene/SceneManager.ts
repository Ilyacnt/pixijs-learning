import { DefaultScene, IScene } from './DefaultScene'

export abstract class SceneManager {
    // @ts-ignore
    private static _currentScene: IScene = new DefaultScene()

    public static async initialize(): Promise<void> {}

    public static async changeScene(newScene: IScene): Promise<void> {
        this._currentScene = newScene
    }
}
