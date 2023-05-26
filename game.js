class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        // title text
        this.add.text(this.w/2, this.h/2, "Roly Poly: To the End")
            .setOrigin(0.5).setFontSize(100);
        
        // rectangle and text for button
        this.button = this.add.rectangle(this.w/2, this.h/2 + 200, 500, 200, 0xfacff0)
            .setInteractive().setOrigin(0.5);
        this.continue = this.add.text(this.w/2, this.h/2 + 200, "continue")
            .setOrigin(0.5).setFontSize(80);
        
        // button animation on pointerover/pointerout
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
        
        // message text
        this.add.text(this.w/2, this.h/2, "Watch out for slugs!")
            .setOrigin(0.5).setFontSize(70);
        
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('gameplay1');
        });
    }
}

class Gameplay1 extends Phaser.Scene {
    constructor() {
        super('gameplay1');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;

        // transition from last scene
        this.cameras.main.fadeIn(2000, 51, 38, 40);
        
        // descriptor of gameplay scene
        this.add.text(this.w/2, this.h/2, "gameplay: two slugs")
            .setOrigin(0.5).setFontSize(60);

        // instructions to simulate win/loss conditions
        this.add.text(this.w * 0.99, this.h * 0.99, 
            ["press \'w\' to simulate win condition",
            "press \'l\' to simulate loss condition"], {align: 'right'})
            .setOrigin(1).setFontSize(40);

        // keybinds for win/loss conditions
        this.win = this.input.keyboard.addKey('w');
        this.win.on('down', () => this.scene.start('message2'));

        this.lose = this.input.keyboard.addKey('l');
        this.lose.on('down', () => this.scene.start('title'));
    }
}

class Message2 extends Phaser.Scene {
    constructor() {
        super('message2');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0xa4deed); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // message text
        this.add.text(this.w/2, this.h/2, "That's good work!")
            .setOrigin(0.5).setFontSize(70);
    
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('message3');
        });
    }
}

class Message3 extends Phaser.Scene {
    constructor() {
        super('message3');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0x95bda6); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // message text
        this.add.text(this.w/2, this.h/2, "Watch out for snails!")
            .setOrigin(0.5).setFontSize(70);
        
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('gameplay2');
        });
    }
}

class Gameplay2 extends Phaser.Scene {
    constructor() {
        super('gameplay2');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // transition from last scene
        this.cameras.main.fadeIn(2000, 51, 38, 40);

        // descriptor of gameplay scene
        this.add.text(this.w/2, this.h/2, "gameplay: two snails")
            .setOrigin(0.5).setFontSize(60);

        // instructions to simulate win/loss conditions
        this.add.text(this.w * 0.99, this.h * 0.99, 
            ["press \'w\' to simulate win condition",
            "press \'l\' to simulate loss condition"], {align: 'right'})
            .setOrigin(1).setFontSize(40);

        
        // keybinds for win/loss conditions
        this.win = this.input.keyboard.addKey('w');
        this.win.on('down', () => this.scene.start('message4'));

        this.lose = this.input.keyboard.addKey('l');
        this.lose.on('down', () => this.scene.start('message3'));
    }
}

class Message4 extends Phaser.Scene {
    constructor() {
        super('message4');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0xa4deed); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // message text
        this.add.text(this.w/2, this.h/2, "Good job!")
            .setOrigin(0.5).setFontSize(70);
    
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('message5');
        });
    }
}

class Message5 extends Phaser.Scene {
    constructor() {
        super('message5');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0x95bda6); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // message text
        this.add.text(this.w/2, this.h/2, "This is the last level!")
            .setOrigin(0.5).setFontSize(70);
        
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('gameplay3');
        });
    }
}

class Gameplay3 extends Phaser.Scene {
    constructor() {
        super('gameplay3');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // transition from last scene
        this.cameras.main.fadeIn(2000, 51, 38, 40);

        // descriptor of gameplay scene
        this.add.text(this.w/2, this.h/2, "gameplay: three slugs and snails")
            .setOrigin(0.5).setFontSize(60);

        // instructions to simulate win/loss conditions
        this.add.text(this.w * 0.99, this.h * 0.99, 
            ["press \'w\' to simulate win condition",
            "press \'l\' to simulate loss condition"], {align: 'right'})
            .setOrigin(1).setFontSize(40);

        
        // keybinds for win/loss conditions
        this.win = this.input.keyboard.addKey('w');
        this.win.on('down', () => this.scene.start('message6'));

        this.lose = this.input.keyboard.addKey('l');
        this.lose.on('down', () => this.scene.start('message5'));
    }
}

class Message6 extends Phaser.Scene {
    constructor() {
        super('message6');
    }
    preload() {
        this.cameras.main.setBackgroundColor(0xa4deed); 
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // message text
        this.add.text(this.w/2, this.h/2, "The roly poly gets a badge!")
            .setOrigin(0.5).setFontSize(70);
    
        // click to progress
        this.input.on('pointerdown', () => {
            this.scene.start('victory');
        });
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    create() {
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        
        // descriptor of victory scene
        this.add.text(this.w/2, this.h/2, "victory scene!")
            .setOrigin(0.5).setFontSize(70);

        // click to go back to start
        this.input.on('pointerdown', () => {
            this.scene.start('title');
        });

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