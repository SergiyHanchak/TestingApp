Feature: Checking our calculator with valid data

  Scenario Outline: Action with the 2 valid input data
    Given the user go to "http://juliemr.github.io/protractor-demo/"
    When the user inputs <value1> in the first input field
    Then the user inputs <value2> in the second input field
    Then the user choose <action> from the dropdown list
    Then the user press the gobutton
    Then the result <result> value is shown on the main page

    Examples:
      | value1 | value2 | action | result |
      | 5      | 6      | 0      | 11     | #ADDITION
      | 10     | 12     | 0      | 22     | #ADDITION
      | 15     | 3      | 3      | 45     | #MULTIPLICATION
      | 10     | 10     | 1      | 1      | #DIVISION
      | 4      | 2      | 2      | 0      | #MODULO
      | 8      | 5      | 2      | 3      | #MODULO
      | 100    | 1      | 4      | 99     | #SUBTRACTION
      | 5      | 2      | 4      | 3      | #SUBTRACTION
      | 5      | 6      | 3      | 30     | #MULTIPLICATION
      | 10     | 255    | 3      | 2550   | #MULTIPLICATION
