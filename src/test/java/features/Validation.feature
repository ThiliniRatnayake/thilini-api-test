Feature:
  Verify user validation


  Scenario: Verify user gets 401 when register without API key
    Given I register without API key
    Then I get a 401 response
