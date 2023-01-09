describe("Recipe List Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("shows a list of all added recipies", () => {
      cy.get("[data-test='recipe-item']");
      cy.get("[data-test='recipe-name']").should("contain", "Cake");
      cy.get("[data-test='recipe-author']").should("contain", "william-hayward");
      cy.get("[data-test='recipe-details']");
      cy.get("[data-test='recipe-ingredients']");
      
    });

    it("Like Button.", () => {
      cy.get("[data-test='like-item']").eq(0).click();
      cy.get('[data-test=like-text-item]').should("contain", "Already in your favourites!");
    });

});
  
  export {}; // this is to fix typescript complaint