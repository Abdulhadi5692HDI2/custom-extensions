class RNumber {
  getInfo() {
    return {
      id: 'otherstuff',
      name: 'Random Number',

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
