exports.testPony = (test) => {
  let isPony = true;
  test.ok(isPony, 'This is not a pony');
  test.done();
}
