// game.js
import { createCamera } from './components/camera';
import { createRenderer } from './components/renderer';
import { createLights } from './components/lights';
import { createControls } from './components/controls';
import { Player } from './entities/player';
import { Enemy } from './entities/enemy';
import { createEnvironment } from './entities/environment';
import { initializeAudio } from './systems/audio';

class Game {
  constructor() {
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = new THREE.Scene();
    this.player = new Player();
    this.enemies = [];
    this.controls = createControls(this.camera, this.renderer);

    createLights(this.scene);
    createEnvironment(this.scene);
    initializeAudio();
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.update();
      this.render();
    });
  }

  update() {
    this.player.update();
    this.enemies.forEach(enemy => enemy.update());
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default Game;
