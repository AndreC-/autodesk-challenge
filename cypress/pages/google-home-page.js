class GoogleHomePage{

    elements = {
        searchBar: () => cy.get('textarea[title="Search"]'),
        searchForm: () => cy.get('form'),
    }

    navigate(){
        cy.visit('/')
    }

    enterTextInSearchBar(text){
        this.elements.searchBar().clear().type(text);
    }

    submitSearchForm(){
        this.elements.searchForm().submit();
    }
}
export default GoogleHomePage