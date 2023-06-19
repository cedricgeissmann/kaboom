import kaboom from "./kaboom.mjs"

kaboom({
  height: 480,
  width: 640,
})

scene("level-1", () => {

  setGravity(1600)

  const player = add([
    rect(20, 20),
    outline(4),
    pos(20, 0),
    anchor("top"),
    area(),
    body(),
    color(127, 200, 255),
  ]);

  // Floor
  add([
    rect(width() - 100, 40),
    outline(4),
    pos(0, height()),
    anchor("botleft"),
    area(),
    body({isStatic: true}),
    color(127, 200, 255),
  ]);

  onKeyPress('space', () => {
    if(player.isGrounded()) { player.jump(800) }
  })

  onKeyDown('d', () => {
    player.move(200, 0)
  })
  onKeyDown('a', () => {
    player.move(-200, 0)
  })

  onUpdate(() => {
    if (player.pos.x > 620) {
      go("win")
    }
  })
})

scene("win", () => {
  add([
    text("Bravo!!!"),
    pos(width() / 2, height() / 2),
    scale(2),
    anchor("center"),
]);
  add([
    text('Press "space" to restart...'),
    pos(width() / 2, height() / 2 + 100),
    scale(1),
    anchor("center"),
]);
  onKeyPress('space', () => {
    go("level-1")
  })
})

go("level-1")