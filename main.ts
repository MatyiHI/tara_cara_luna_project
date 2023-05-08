sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`Road`)
    mySprite4.setPosition(23, 71)
    for (let index = 0; index < 25; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . b 9 1 b . . . . . 
            . . b b . . . b 9 9 b . . . . . 
            . b 9 1 b . . b b b . . b b b . 
            . b 3 9 b . b b b b . b 9 9 1 b 
            . b b b b b 9 9 1 1 b b 3 9 9 b 
            . . . . b 9 d 9 1 1 b b b b b . 
            . . . . b 5 3 9 9 9 b . . . . . 
            . . b b b 5 3 3 d 9 b . . . . . 
            . b 5 1 b b 5 5 9 b b b b . . . 
            . b 5 5 b b b b b b 3 9 9 3 . . 
            . b b b b b b b . b 9 1 1 9 b . 
            . . . b 5 5 1 b . b 9 1 1 9 b . 
            . . . b 5 5 5 b . b 3 9 9 3 b . 
            . . . . b b b . . . b b b b . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite4, 52, 50)
        pause(2000)
    }
})
let projectile: Sprite = null
let mySprite4: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`Stage`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`Winter_Tree_Background_Night`)
game.setDialogTextColor(15)
mySprite4 = sprites.create(assets.image`Snow`, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Enemy)
mySprite4.setPosition(123, 88)
mySprite4.setBounceOnWall(true)
controller.moveSprite(mySprite4, 100, 100)
info.setLife(100)
