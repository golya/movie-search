Feature: As a user I would like search in movie database
  so that I can get more information about the movie

  Scenario: The user search for a movie
    Given the movie database has a movie with title "The Matrix"
    When the user search for "The Matrix"
    Then the user see the movie with title "The Matrix"

  Scenario: The user get the movies from cache
    Given the movie database has a movie with title "The Matrix"
    Given the user search for "The Matrix"
    Given the user see the movie with title "The Matrix"
    When the user search for "The Matrix"
    Then the administrator see 1 for cache count

  Scenario: The user get the movies from cache
    Given the movie database has a movie with title "The Matrix"
    Given the movie database has a movie with title "The Matrix 2"
    Given the movie database has a movie with title "The Matrix 3"
    Given the user search for "The Matrix"
    Given the user see the movie with title "The Matrix"
    When the user step to page 2
    Then the user see the movie with title "The Matrix 2"
    When the user step to page 3
    Then the user see the movie with title "The Matrix 3"

