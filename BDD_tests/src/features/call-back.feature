@call-back_form
Feature: Call-back form

@valid-credentials
Scenario Outline: User should provide valid credentials
  Given I open "main" page
  When I type "<Name>" in Name Input
  And I type "<Email>" in Email Input
  And I type "<Phone>" in Phone Input
  And I type "<Subject>" in Subject Input
  And I click Submit button
  Then Alert window should "be displayed"

Examples: 
  |Name|Email|Phone|Subject|
  |Kate|kate@gmail.com|+995558555555|Finance|
  |George|george@gmail.com|+995558777777|Stocks|

    