class Title extends Phaser.Scene {
    constructor() {
        super('title')
    }
}

class Message1 extends Phaser.Scene {
    constructor() {
        super('message1')
    }
}

class Gameplay1 extends Phaser.Scene {
    constructor() {
        super('gameplay1')
    }
}

class Message2 extends Phaser.Scene {
    constructor() {
        super('message2')
    }
}

class Message3 extends Phaser.Scene {
    constructor() {
        super('message3')
    }
}

class Gameplay2 extends Phaser.Scene {
    constructor() {
        super('gameplay2')
    }
}

class Message4 extends Phaser.Scene {
    constructor() {
        super('message4')
    }
}

class Message5 extends Phaser.Scene {
    constructor() {
        super('message5')
    }
}

class Gameplay3 extends Phaser.Scene {
    constructor() {
        super('gameplay3')
    }
}

class Message6 extends Phaser.Scene {
    constructor() {
        super('message6')
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory')
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    backgroundColor: 0xd8a0e8,
    scene: [Title, Message1, Gameplay1, Message2, Message3, Gameplay2, Message4, Message5, Gameplay3, Message6, Victory],
    title: "Roly Poly: To the End",
});