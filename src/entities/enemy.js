// enemy.js
export class Enemy {
  constructor(type) {
    this.type = type;
    this.health = type === 'Squeak Trooper' ? 50 : type === 'Rocket Rodent' ? 75 : 100;
  }

  update() {
    // Update enemy logic
  }
}
