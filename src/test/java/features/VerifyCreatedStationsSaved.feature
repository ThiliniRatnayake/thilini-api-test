Feature:
  Verify two stations created added to the database

  Scenario: Verify GET method returns stations created
    Given I do a GET operation
    Then values for new stations get returned