controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zaydan.isHittingTile(CollisionDirection.Bottom)) {
        Zaydan.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Zaydan.vx = -100
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Zaydan.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Zaydan.vx = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Zaydan.vx = 100
})
let Zaydan: Sprite = null
Zaydan = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b b . . 8 . . . 
    . . . . . b b b . b . . 8 . . . 
    . . . . . b . . . b b . 8 . . . 
    . . . . . b 2 . 2 . b . 8 . . . 
    . . . . . b . . . . b . 8 . . . 
    . . . . . b b b b b b 8 8 8 8 . 
    . . . . . b b b b b b . 8 . . . 
    . 7 7 7 7 b b b b b b 7 7 7 . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b . . b b . . . . . 
    . . . . . b b . . b b . . . . . 
    . . . . . b b . . b b . . . . . 
    `, SpriteKind.Player)
Zaydan.ay = 400
let KingDuck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . b b . b . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . 5 2 2 2 2 . . . . . . . 
    . . . 5 5 2 d d 2 . . . . . . . 
    . . 5 5 5 2 d d 2 . . . . . . . 
    . . . 5 5 2 d d 2 . . . . . . . 
    . . . . 5 2 2 2 2 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . 9 d d 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Zaydan.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.forestTiles2], TileScale.Sixteen))
