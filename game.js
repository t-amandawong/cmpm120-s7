class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        this.add.text(this.w/2, this.h/2, "Roly Poly: To the End")
        .setOrigin(0.5).setFontSize(70);
        
        this.button = this.add.rectangle(this.w/2, this.h/2 + 200, 500, 200, 0xfacff0)
        .setInteractive().setOrigin(0.5);

        this.continue = this.add.text(this.w/2, this.h/2 + 200, "continue")
        .setOrigin(0.5).setFontSize(100);
        
        this.button.on('pointerover', ()=> {
            this.button.setScale(1.1);
            this.continue.setScale(1.1);
        })
        .on('pointerout', ()=> {
            this.button.setScale(1);
            this.continue.setScale(1);
        })
        .on('pointerdown', ()=> this.scene.start('message1'));
    }
}

class Message1 extends Phaser.Scene {
    constructor() {
        super('message1');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0x95bda6); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        this.add.text(this.w/2, this.h/2, "Watch out for slugs!")
        .setOrigin(0.5).setFontSize(70);
        
        this.input.on('pointerdown', () => this.scene.start('gameplay1'));
    }
}

class Gameplay1 extends Phaser.Scene {
    constructor() {
        super('gameplay1');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        this.add.text(this.w/2, this.h/2, "gameplay: two slugs")
        .setOrigin(0.5).setFontSize(50);

        this.win = this.input.keyboard.addKey('w');
        this.win.on('down', () => this.scene.start('message2'));

        this.lose = this.input.keyboard.addKey('l');
        this.lose.on('down', () => this.scene.start('title'))
    }
}

class Message2 extends Phaser.Scene {
    constructor() {
        super('message2');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Message3 extends Phaser.Scene {
    constructor() {
        super('message3');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Gameplay2 extends Phaser.Scene {
    constructor() {
        super('gameplay2');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Message4 extends Phaser.Scene {
    constructor() {
        super('message4');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Message5 extends Phaser.Scene {
    constructor() {
        super('message5');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Gameplay3 extends Phaser.Scene {
    constructor() {
        super('gameplay3');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Message6 extends Phaser.Scene {
    constructor() {
        super('message6');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
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