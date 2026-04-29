function add(a, b) {
  const unused = "this will fail lint"
  return a + b;
}

module.exports = {
  add,
};
