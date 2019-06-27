describe('Char Sheet', function() {

  it('should give the character a name based on user input', function() {
    var testChar = new Character(Erin)
    expect(testChar.name).toEqual(Erin)
    });

});
