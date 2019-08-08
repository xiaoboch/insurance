Feature: Home page nagigation

    I want to navigate to user page from home page
    
    @focus
    Scenario: Opening a social network page
        Given I open home page
        When I click on the try-out button
        Then I see user page

    