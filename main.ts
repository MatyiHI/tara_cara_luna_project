sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSong(assets.song`First_Song`), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(assets.image`Doodle`, mySprite2, 100, 27)
    projectile.follow(mySprite4, 20)
    scene.setBackgroundImage(assets.image`Road`)
})
let projectile: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(assets.image`Ghost_2`, SpriteKind.Enemy)
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`Stage`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`Winter_Tree_Background_Night`)
game.setDialogTextColor(15)
mySprite4 = sprites.create(assets.image`Snow`, SpriteKind.Player)
mySprite4.setPosition(123, 88)
mySprite4.setBounceOnWall(true)
controller.moveSprite(mySprite4, 100, 100)
info.setLife(100)
mySprite2.follow(mySprite4, 10)
