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
        mySprite4 = sprites.create(assets.image`Fireball1`, SpriteKind.Projectile)
        projectile = sprites.createProjectileFromSprite(assets.image`Fireball1`, mySprite, 100, 27)
        projectile.follow(mySprite2, 20)
        pause(2000)
    }
    for (let index = 0; index < 34; index++) {
        info.setLife(25)
        mySprite3 = sprites.create(assets.image`Bubble1`, SpriteKind.Projectile)
        projectile = sprites.createProjectileFromSprite(assets.image`Bubble2`, mySprite2, 100, 27)
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
mySprite = sprites.create(assets.image`Yuki`, SpriteKind.Player)
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`Stage`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`Winter_Tree_Background_Night`)
game.setDialogTextColor(15)
mySprite2 = sprites.create(assets.image`Tombstone`, SpriteKind.Enemy)
info.setLife(23)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(123, 88)
mySprite.setBounceOnWall(true)
info.setLife(100)
mySprite2.follow(mySprite, 10)
