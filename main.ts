sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSong(assets.song`test_song`), music.PlaybackMode.UntilDone)
    scene.setBackgroundImage(assets.image`road`)
    mySprite3.setPosition(23, 71)
    mySprite4.setPosition(23, 71)
    mySprite2.setPosition(123, 71)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundImage(assets.image`green`)
game.setDialogTextColor(15)
game.showLongText("Press A to start", DialogLayout.Center)
scene.setBackgroundImage(assets.image`blue`)
game.setDialogTextColor(15)
mySprite4 = sprites.create(assets.image`Luna`, SpriteKind.Player)
mySprite4.setPosition(123, 88)
mySprite4.setBounceOnWall(true)
controller.moveSprite(mySprite4, 100, 100)
info.setLife(100)
mySprite2 = sprites.create(assets.image`couch`, SpriteKind.Enemy)
if (controller.B.isPressed()) {
    sprites.destroy(mySprite4)
} else {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite3)
    }
}
