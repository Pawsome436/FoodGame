scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (double_active > 0) {
        info.changeLifeBy(1)
    }
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Next_Level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (Spray > 0) {
        info.changeLifeBy(1)
        Spray += -1
        tiles.setTileAt(location, assets.tile`transparency16`)
        if (Spray_quest_accepted == 1) {
            Spray_quest += 1
        }
        if (double_active > 0) {
            info.changeLifeBy(1)
        }
    } else {
        info.changeLifeBy(-1)
        tiles.setTileAt(location, assets.tile`transparency16`)
        if (double_active > 0) {
            info.changeLifeBy(-1)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (double_active > 0) {
        info.changeScoreBy(1)
    }
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.changeLifeBy(2)
    if (double_active > 0) {
        info.changeLifeBy(2)
    }
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
    if (Jump_quest_accepted == 1) {
        Jump_quest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    info.changeScoreBy(-5)
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (double_active > 0) {
        info.changeScoreBy(-5)
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    double_active += 3
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    Spray_quest_accepted = 1
    Next_Level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    Spray += 3
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    info.changeLifeBy(3)
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeScoreBy(3)
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (Spray > 0) {
        info.changeScoreBy(3)
    } else {
        info.changeScoreBy(-8)
        tiles.setTileAt(location, assets.tile`transparency16`)
        if (Spray_quest_accepted == 1) {
            Spray_quest += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    info.changeScoreBy(1)
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (Food_quest_accepted == 1) {
        Food_quest += 1
    }
    if (double_active > 0) {
        info.changeScoreBy(1)
        info.changeLifeBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (Spray > 1) {
        info.changeScoreBy(1)
        Spray += -1
        tiles.setTileAt(location, assets.tile`transparency16`)
        if (double_active > 0) {
            info.changeScoreBy(1)
        }
        if (Spray_quest_accepted == 1) {
            Spray_quest += 1
        }
    } else {
        if (double_active > 0) {
            info.changeScoreBy(-5)
        }
        info.changeScoreBy(-5)
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    Jump_quest_accepted = 1
    Next_Level()
})
function Next_Level () {
    Level += 1
    if (Level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (Level == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else if (Level == 3) {
        tiles.setTilemap(tilemap`level3`)
    } else if (Level == 4) {
        tiles.setTilemap(tilemap`level4`)
        game.splash("Oh yes I forgot to tell you something...")
        game.splash("The spray can turn bad things to good things.")
        game.splash("It only lasts 3 uses though. D:")
        game.splash("For example if you had a spray.")
        game.splash("And you walked into a bad burger.")
        game.splash("Then instead of loosing 5 points you gain 1!")
        game.splash("Cool right? Now carry on with your journey brave human!")
    } else if (Level == 5) {
        tiles.setTilemap(tilemap`level5`)
    } else if (Level == 6) {
        tiles.setTilemap(tilemap`level6`)
    } else if (Level == 7) {
        tiles.setTilemap(tilemap`level7`)
        game.splash("I am very sorry to interrupt you on you quest once more... ")
        game.splash("But my terrible memory has remembered one more thing.")
        game.splash("The yellow + red chips are fabulous!")
        game.splash("They give you 1 health and 1 point!")
        game.splash("But the pink and orange ones are not so good... }: ")
        game.splash("They take away 1 health and 5 points!")
        game.splash("You can't even use the spray on those naughty chips!")
        game.splash("So with the new foods in mind go eat, eat, eat!")
    } else if (Level == 8) {
        tiles.setTilemap(tilemap`level8`)
    } else if (Level == 9) {
        tiles.setTilemap(tilemap`level9`)
    } else if (Level == 10) {
        Quest_reward = 30
        game.splash("Hello again my friend.")
        game.splash("Me coming here once more has nothing to do with my memory btw.")
        game.splash("I had predicted this would happen at some point.")
        game.splash("These people are in need of some help.")
        game.splash("Every 10 levels you may choose to accept 1 and only 1.")
        game.splash("To accept there quest( which they will say)")
        game.splash("You simply need to walk into them.")
        game.splash("If you do not want to do a quest then walk into the can.")
        game.splash("But doing a quest can get you some extra points or hearts!")
        tiles.setTilemap(tilemap`level10`)
        game.splash("Hello, I am the black dude for my quest you must use the spray 9 times.")
        game.splash("Hi, I am the red dude and for my quest you must jump 50 times!")
        game.splash("hello? hello, i am the blue dude and for my quest could you please eat 30 pieces of good food.")
        controller.moveSprite(mySprite, 100, 100)
        mySprite.ay = 0
    } else if (Level == 11) {
        controller.moveSprite(mySprite, 100, 0)
        mySprite.ay = 500
        tiles.setTilemap(tilemap`level11`)
    } else if (Level == 12) {
        tiles.setTilemap(tilemap`level12`)
    } else if (Level == 13) {
        tiles.setTilemap(tilemap`level13`)
        game.splash("Greeting, brave and hungry human.")
        game.splash("I shall tell you that all of the different types of food are hard to remember.")
        game.splash("I shall also tell you that I have forgot to tell you about another food.")
        game.splash("It is a mix of bad and good - it is half mustard half ketchup.")
        game.splash("Like the spray it lasts 3 uses.")
        game.splash("But unlike the spray it doubles whatever you touch insteaded of converting.")
        game.splash("This happens to all foods even chips!")
        game.splash("Now you may continue scoffing as many foods you like.")
    } else if (Level == 14) {
        tiles.setTilemap(tilemap`level14`)
    } else if (Level == 15) {
        tiles.setTilemap(tilemap`level15`)
    } else if (Level == 16) {
        tiles.setTilemap(tilemap`level16`)
        game.splash("We cross paths once more because of my lack of remembering foods.")
        game.splash("There are 2 new foods, 1 good and 1 bad.")
        game.splash("They are different types of chicken 1 heals 1 damages.")
        game.splash("The orange normal looking one heals 2 and the blue damages 2.")
        game.splash("They do not take the effect of spray but do of the mustard/ketchup.")
        game.splash("See you again, traveller and consumer of all foods.")
    } else if (Level == 17) {
        tiles.setTilemap(tilemap`level17`)
    } else if (Level == 18) {
        tiles.setTilemap(tilemap`level18`)
    } else if (Level == 19) {
        tiles.setTilemap(tilemap`level19`)
    } else if (Level == 20) {
        controller.moveSprite(mySprite, 100, 100)
        mySprite.ay = 0
        game.splash("So travel some more quests coming up from the dish!")
        game.splash("There could be another person in need of your help if you are lucky!")
        tiles.setTilemap(tilemap`level20`)
        game.splash("So, you know me the black dude same quest, 9 sprays!")
        game.splash("Oi, I have seen you from somewhere anyway I am red and it would nice if you jumped 50 times for me!")
        game.splash("i know you would you be nice enough to do my quest. It is eat 30 good foods.")
        game.splash("How'dy partner. Have'nt seen you round these areas at all. No matter can you do this for me? You must reach level 25 without touching ANY bad meat.")
        Quest_reward = 35
    } else if (Level == 21) {
        controller.moveSprite(mySprite, 100, 0)
        mySprite.ay = 500
        tiles.setTilemap(tilemap`level21`)
    } else if (Level == 22) {
        tiles.setTilemap(tilemap`level22`)
    } else if (Level == 23) {
        tiles.setTilemap(tilemap`level23`)
        game.splash("It is unfortunate that I of all people have to guide you.")
        game.splash("As I may of had another duo of foods taken out of my head.")
        game.splash("The cherries. They can be sprayed but not ketchup/mustard-ified!")
        game.splash("The orange bad one takes away 8 points while the red adding 3.")
        game.splash("So you may pass this interruption and continue to demolish these delicious foods")
    } else if (Level == 24) {
        tiles.setTilemap(tilemap`level24`)
    } else if (Level == 25) {
        tiles.setTilemap(tilemap`level25`)
        if (Bad_meat_quest_accepted == 1) {
            if (Bad_meat_quest == 1) {
                info.changeScoreBy(Quest_reward)
            }
        }
    } else if (Level == 26) {
        tiles.setTilemap(tilemap`level26`)
        game.splash("As per usual I have failed to remember another type of food.")
        game.splash("This time it's... ")
        game.splash("PIZZA! you get 3 lives when you walk into a good one and lose 3 if it's bad.")
        game.splash("They are not effected by spray or mustard/ketchup either!")
    } else {
        game.splash("Well done young adventurer you have finally completed the quest")
        game.splash("Remember to mention me on the news - just not my forgetfulness.")
        info.setScore(info.score() + info.life())
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeLifeBy(-2)
    if (double_active > 0) {
        info.changeLifeBy(-2)
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
    if (Bad_meat_quest_accepted == 1) {
        Bad_meat_quest = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    Food_quest_accepted = 1
    Next_Level()
})
let Bad_meat_quest = 0
let Bad_meat_quest_accepted = 0
let Quest_reward = 0
let Jump_quest = 0
let Jump_quest_accepted = 0
let Spray_quest = 0
let Spray_quest_accepted = 0
let Spray = 0
let Food_quest = 0
let Food_quest_accepted = 0
let double_active = 0
let Level = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . 3 f 3 f 3 . . . . 
    . . . . . . . 3 3 3 3 3 . . . . 
    . . . . . . . 3 f 3 f 3 . . . . 
    . . . . . . . 3 f f f 3 . . . . 
    . . . . . 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 4 4 4 8 8 8 8 . 
    . . . 4 4 8 8 8 4 4 4 8 . 8 4 4 
    . . . 4 4 . . 8 4 4 4 8 . . 4 4 
    . . . . . . . 8 4 4 4 8 . . . . 
    . . . . . . . 8 4 4 4 8 . . . . 
    . . . . . . . 4 4 4 4 4 . . . . 
    . . . . . . . 4 4 4 4 4 . . . . 
    . . . . . . . 4 4 . 4 4 . . . . 
    . . . . . . . 4 4 . 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
Level = 0
info.setScore(0)
info.setLife(3)
Next_Level()
mySprite.ay = 500
game.splash("Burgers give you 1 point.")
game.splash("Bad burgers take 5 points away from you.")
game.splash("Hot dogs gain you 1 life.")
game.splash("Bad hot dogs take 1 life away from you.")
game.splash("The swirly blue and purple thing is where you spawn.")
game.splash("The red and white can takes you to the next level.")
game.splash("To move you use joy stick/arrow keys/WASD.")
game.splash("To jump you use A button or press q.")
game.splash("Good luck!")
controller.moveSprite(mySprite, 100, 0)
forever(function () {
    if (Food_quest == 30) {
        info.changeScoreBy(Quest_reward)
        Food_quest = 0
        Food_quest_accepted = 0
    }
    if (Jump_quest == 50) {
        info.changeScoreBy(Quest_reward)
        Jump_quest = 0
        Jump_quest_accepted = 0
    }
    if (Spray_quest == 9) {
        info.changeScoreBy(Quest_reward)
        Spray_quest = 0
        Spray_quest_accepted = 0
    }
})
