# Project Blueprint: Lotto Number Generator

## Overview

This project is a simple web application that generates random lottery numbers. It provides a user-friendly interface to generate and display a set of 6 unique numbers between 1 and 45.

## Implemented Features

*   **Initial Setup:**
    *   Basic HTML structure with `index.html`.
    *   Linked `style.css` for styling.
    *   Linked `main.js` for functionality.

## Current Task: Create Lotto Number Generator

### Plan

1.  **Update `index.html`:**
    *   Set the page title to "Lotto Number Generator".
    *   Create a main container with the ID `app`.
    *   Add a heading: "Lotto Number Generator".
    *   Create a `div` with the ID `lotto-numbers` to display the generated numbers.
    *   Create a button with the ID `generate-btn` to trigger the generation.

2.  **Update `style.css`:**
    *   Add a subtle texture to the background.
    *   Center the `app` container.
    *   Style the main heading with a modern font and drop shadow.
    *   Style the `lotto-numbers` container to display numbers in a row.
    *   Create styles for the individual number balls, including colors, shadows, and a "lifted" effect. The color of the ball will change based on the number range.
    *   Style the `generate-btn` with a "glow" effect on hover/focus.
    *   Ensure the layout is responsive and mobile-friendly.

3.  **Update `main.js`:**
    *   Implement the `generateLottoNumbers` function:
        *   It will generate an array of 6 unique random integers between 1 and 45.
    *   Implement the `displayNumbers` function:
        *   It will take the array of numbers.
        *   For each number, it will create a `div` element representing a lotto ball.
        *   It will assign a background color to the ball based on the number's value (e.g., 1-10: yellow, 11-20: blue, etc.).
        *   It will append the balls to the `lotto-numbers` container.
    *   Add an event listener to the `generate-btn` that calls the generation and display functions.
