describe('My login application', () => {
    it('should login with credentials', async () => {
        await (await $('~open menu')).click();
        await driver.pause(2000);
        await (await $("~menu item log in")).click();

        await driver.pause(2000);
        await (await $("~Username input field")).setValue("bob@example.com");
        await (await $("~Password input field")).setValue("10203040");
        await (await $("~Login button")).click();
        await driver.pause(2000);
    });
});
//*Test ktorí otvori appku a počká 5 s
describe('Sample', () => {
    it('Sample test', async () => {
      await driver.pause(5000);
    });
  });
  
