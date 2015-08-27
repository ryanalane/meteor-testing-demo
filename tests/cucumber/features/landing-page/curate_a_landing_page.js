module.exports = function () {
  this.Given(/^I have created a landing page with the heading "([^"]*)"$/, function (heading) {
    // Write code here that turns the phrase above into concrete actions
    return this.server.call("page/create", { path: "/", heading: heading });
  });
  
  this.When(/^a user navigates to the landing page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return this.client.url(process.env.ROOT_URL);
  });
  
  this.Then(/^they see the heading "([^"]*)"$/, function (heading) {
    // Write code here that turns the phrase above into concrete actions
    return this.client.
      waitForExist("h1").
      getText("h1").should.become(heading);
  });
};
