@login
Feature: Dispatcher - Login

  As a Dispatcher, I want to login into the system successful when I provide email and password.

  Background: Dispatcher is on the dispatcher login page
    Given I am on the dispatcher login page

  @ui    @login    @smoke-test
  Scenario: As a Dispatcher, I am able to login successful with valid email/password
    When I login with correct email and password
    Then I should see the explore page


  # @ui    @login    @regression-test
  # Scenario: As a Dispatcher, I am unable to login with a wrong password
  #   When I login with valid email but incorrect password
  #   Then I should see the error message notification


  # @ui    @login    @regression-test
  # Scenario: As a Dispatcher, I am unable to login with wrong email into system
  #   When I login with incorrect email and valid password
  #   Then I should see the error message notification


  # @ui    @login    @regression-test
  # Scenario: As a Dispatcher, I am unable to login with empty email into system
  #   When I login with empty email and valid password
  #   Then I should see the button Login is be disabled


  # @ui    @login    @regression-test
  # Scenario: As a Dispatcher, I am unable to login empty password into system
  #   When I login with valid email and empty password
  #   Then I should see the button Login is be disabled


  # @ui    @login    @regression-test
  # Scenario: As a Dispatcher, I should see the button LOGIN is disabled when email/password is empty
  #   Then I should see the button Login is be disabled