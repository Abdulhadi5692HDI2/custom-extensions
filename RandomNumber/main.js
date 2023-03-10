class RNumber {
  getInfo() {
    return {
      id: 'otherstuff',
      name: 'Random Number',
      
      menuIconURI: 'https://abdulhadi5692hdi2.github.io/custom-extensions/RandomNumber/pixil-frame-0.png',
      docsUri: 'https://abdulhadi5692hdi2.github.io',

      blocks: [
        {
          opcode: 'randoma',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Random Number'
        }
      ]
    };
  }

  randoma() {
    return Math.random();
  }
}

Scratch.extensions.register(new RNumber());
console.log("[Random Number] Up and running!");
console.log("[Random Number] opcode: 'randoma' initalized");
