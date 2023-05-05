sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let mySprite2: Sprite = null
    let mySprite3: Sprite = null
    music.play(music.createSong(assets.song`Emty_Song`), music.PlaybackMode.UntilDone)
    scene.setBackgroundImage(assets.image`Road`)
    mySprite3.setPosition(23, 71)
    mySprite4.setPosition(23, 71)
    mySprite2.setPosition(123, 71)
})
let mySprite4: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`green`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`backround`)
game.setDialogTextColor(15)
mySprite4 = sprites.create(assets.image`Snow`, SpriteKind.Player)
mySprite4.setPosition(123, 88)
mySprite4.setBounceOnWall(true)
controller.moveSprite(mySprite4, 100, 100)
info.setLife(100)
