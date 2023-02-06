class JBM {
  getInfo() {
    return {
      id: 'jbm',
      name: 'Just More Blocks!',
      docsUri: 'https://abdulhadi5692hdi2.github.io',

      blocks: [
        {
          "opcode": "jsalert",
          "blockType": "command",
          "text": "alert [string]",
          "arguments": {
            "string": {
              "type": "string",
              "defaultValue": "Hello World!"
            }
          }
        }
      ]
    };
  }
  jsalert(string) {
    window.alert(string);
    return string;
  }
}

Scratch.extensions.register(new JBM());
