'use strict'

/**
 * Exemplo versão 02
 * - ECMAScript 6
 * - touch controls
 * - botão de fullscreen para mobile
 * - tileMap
 */

const config = {}
config.RES_X = 800 // resolucao HD
config.RES_Y = 480

config.PLAYER_ACCELERATION = 300
config.PLAYER_TURN_VELOCITY = 350
config.PLAYER_MAX_VELOCITY = 400//250
config.PLAYER_HEALTH = 3
config.PLAYER_DRAG = 300
config.PLAYER_JUMP = 650
config.PLAYER_SCALE = 1.25
config.PLAYER_X = 50 
config.PLAYER_Y = 200
config.PLAYER_X_LEVEL1 = 150 
config.PLAYER_Y_LEVEL1 = 100
config.PLAYER_X_LEVEL2 = 150 
config.PLAYER_Y_LEVEL2 = 100

config.BULLET_FIRE_RATE = 20
config.BULLET_ANGLE_ERROR = 0.1
config.BULLET_LIFE_SPAN = 750
config.BULLET_VELOCITY = 600

config.SPIDER_VELOCITY = 100
config.BAT_VELOCITY = 250
config.ONE_EYED_VELOCITY = 400
config.GOBLIN_VELOCITY = 150
config.BOUNCE_SPEED = 200

config.SAW_VELOCITY = 150


class Game extends Phaser.Game {
    constructor() {
        super(config.RES_X, config.RES_Y, Phaser.CANVAS,
            'game-container')
        // registrando as telas (Phaser.State) do jogo
        this.state.add('Boot', BootState, false)
        this.state.add('Title', TitleState, false)
        this.state.add('Game', GameState, false)
        this.state.add('GameOver', GameOverState, false)
        this.state.start('Boot')
    }
}

// cria jogo
let GAME = new Game()
/*
window.onload = function() {
    // funciona como singleton
    GAME = new Game()
}
*/