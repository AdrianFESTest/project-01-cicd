function getMessage() {
  return "world";
}

function createMessage(name) {
  if (!name) {
    return "Hello, guest!";
  }

  return `Hello, ${name}!`;
}

module.exports = {
  getMessage,
  createMessage,
};
