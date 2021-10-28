describe("Blog site tesing", () => {
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
  it("clicking on upload a blog in Nav bar takes you to post blog page", () => {
    cy.get(":nth-child(2) > .nav-link").click();
    cy.url().should("include", "/postblog");
  });
  it("home page contains title of recent blogs", () => {
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get("h1").should("have.text", "Recent Blogs");
  });
  it("post blog form contains area to submit", () => {
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get("form").contains("Blog content");
    cy.get("form").contains("Blog title");
    cy.get("form").contains("Submit").click();
  });
  it("submitting form takes you back to welcome page", () => {
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get("form").contains("Submit").click();
    cy.url().should("include", "/");
  });
});
