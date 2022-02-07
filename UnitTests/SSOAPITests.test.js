const testRegistration = require('./SSOAPITests')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('registers new account, resolves to 200', async ()=>{
    await expect(testRegistration()).resolves.toBe(200)
})