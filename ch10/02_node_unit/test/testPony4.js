exports.testPony4 = (test) => {
  test.expect(2);
  if (false) {
    test.ok(false, 'This should not have passed');
    count++;
  }
  
  test.ok(true, 'This should have passed');
  test.done();
}