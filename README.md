# React Native Course for Beginners in 2024 👋

This is an example of why React Native fails.  This was a follow along of the first 30 minutes of [JavaScript Mastery's](https://www.youtube.com/@javascriptmastery) YouTube Tutorial "[React Native Course for Beginners in 2024 | Build a Full Stack React Native App
](https://www.youtube.com/watch?v=ZBCUegTZF7M)."  The tutorial's source code is available [here](https://github.com/adrianhajdin/aora).

## What worked

1. Initializing the project

   ```bash
   npx create-expo-app
   ```

2. Installing dependencies

   ```bash
    npm install
   ```

3. Making small modifications to the app

4. Running the app

   ```bash
    npx expo start
   ```

## What didn't work

1. Setting up nativewind

Nativewind installs correctly, and all steps taken in the tutorial are followed to the letter, but all styling done with nativewind has no effect on the app.

## Why it didn't work

* The tutorial followed was a month old, so it is possibly outdated, but if the tech stack breaks after a month, it is immature (even though it's 9 years old) and not suitable for building anything.
* Nativewind is between version 2 and version 4, but neither package works.
* React Native does not use the latest version of React.  React Native appears to be built on top of React, but never uses the current version of React.  React Native will always be reliant on outdated libraries and again is not suitable for building anything that works.