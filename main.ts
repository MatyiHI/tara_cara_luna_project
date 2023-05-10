sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player1.setLife(25)
    mySprite.setPosition(70, 15)
    mySprite2.setPosition(66, 82)
    scene.setBackgroundImage(assets.image`Road`)
    for (let index = 0; index < 30; index++) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 27)
        projectile.follow(mySprite2, 20)
        pause(2000)
    }
    for (let index = 0; index < 34; index++) {
        info.setLife(25)
        mySprite3 = sprites.create(img`
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
            `, SpriteKind.Projectile)
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
            `, mySprite2, 100, 27)
        projectile.follow(mySprite2, 20)
        pause(2000)
    }
    music.play(music.createSong(assets.song`First_Song`), music.PlaybackMode.UntilDone)
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Dark_Bubbles`, SpriteKind.Player)
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`Stage`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`Winter_Tree_Background_Night`)
game.setDialogTextColor(15)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . d d d d d d d d d . . . 
    . . . . d d d d d d d d d . . . 
    . . . . d d f d d d f d d . . . 
    . . . . d d f d d d f d d . . . 
    . . . . d d d d d d d d d . . . 
    . . . . d d d d d d d d d . . . 
    . . . . d d d d d d d d d . . . 
    . . . . d d d d d d d d d . . . 
    `, SpriteKind.Enemy)
info.setLife(23)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(123, 88)
mySprite.setBounceOnWall(true)
info.setLife(100)
mySprite2.follow(mySprite, 10)
