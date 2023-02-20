Janna = {
    gold: 3200,
    name: "Janna",
    AP: 340,
    AD: 13232,
    Armor: 100,
    Health: 1920,
    Mana: 320,
    Speed: 32.2,
    "Attack Speed": 32.2,
    move() {
        console.log("Janna:Upon the wind.")

    },
    taunt() {
        console.log("And you thought it was just a harmless breeze!")
    },

}
Olaf = {
    gold: 120,
    name: "Olaf",
    AP: 320,
    AD: 42023,
    Armor: 320,
    Health: 3200,
    Mana: 559,
    Speed: 28,
    "Attack Speed": 25.2,
    move() {
        console.log("Olaf:Urge to kill, rising!")
    },
    taunt() {
        console.log("C'mon, I won't hurt you. I promise!")
    }
}


function borba(heroj1, heroj2) {
    heroj1.move()
    heroj2.move()
    console.log("Winner")
    if (heroj1.AD > heroj2.AD) {
        heroj1.taunt()
        return heroj1.name


    }
    else if (heroj2.AD > heroj1.AD) {
        heroj2.taunt()
        return heroj2.name
    }
}

console.log(borba(Janna, Olaf))
heroji = [
    Janna,
    Olaf
]



rezultat = 0
for (heroj of heroji) {
    rezultat = rezultat + heroj.gold

}
console.log(rezultat)

