describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("localhost:9090");
  });
  it("Visits main page which contains title page text", () => {
    cy.get(".text-center").should(
      "have.text",
      "Welcome to the Tech Savvy Blog"
    );
  });
  it("clicking on home in Nav bar takes you to home page with all blogs", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.url().should("include", "/allblogs");
  });
});
