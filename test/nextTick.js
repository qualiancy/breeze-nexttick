describe('nextTick', function () {
  it('should provide process.nextTick shim', function (done) {
    var called = false;

    nextTick(function () {
      called = true;
      setTimeout(done, 10);
    });
    called.should.be.false;
  });
});
