Scenario: The database verifies a valid account for login.
    Given: a valid account is passed to the authenticator
    When: the authenticator receives the username and password
    Then: the account is verified on the server
    And: the authenticator confirms the login information, to be passed back to the login