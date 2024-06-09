# Iventis Pokedex

This application allows users to view a list of pokemon accessed via the `https://pokeapi.co/` api, and view further details about specific pokemon.

## Yoda

Clicking the settings icon in the bottom right of the application opens a side drawer allowing users to toggle their preferred language between english and yoda.
When yoda is selected the effects of each pokemon are automatically translated.

When the `https://funtranslations.com/api/yoda` rate-limit is reached the language is automatically switched back to english and an appropriate message is displayed
to the user..

## Setup

Follow these steps to run correctly on your machine.

1. Clone this repository.
2. Run ```npm install``` in your terminal.
3. To start the application locally, enter ```npm run dev```.
4. To run tests use the command ```npm run test```, optionally run ```npm run test:ui``` for the vitest UI interface.