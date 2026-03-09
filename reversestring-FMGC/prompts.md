# Reverse String Web Page Prompt

## Role
Act as an expert frontend developer specialized in semantic HTML, clean CSS, vanilla JavaScript, and clean product-style UI implementation.

## Task
Build a simple, polished web page that reverses the order of a string using only the seed files `index.html` and `script.js`.

## Important Context
The existing seed files may contain incomplete, incorrect, or unrelated code.
In particular, `script.js` may currently contain non-JavaScript content such as Python code.
You must ignore any incorrect existing logic and fully replace it with valid browser-side JavaScript.

## Objective
Create a lightweight browser interface where the user types text and immediately sees the reversed string in real time.

## UI / UX Direction
The interface must follow a **Notion-inspired UI/UX style**:
- clean, minimal, calm, and highly readable
- generous whitespace
- soft borders
- subtle shadows
- neutral color palette
- modern typography
- simple hierarchy and excellent spacing
- elegant input and button styling
- polished but understated look
- responsive layout that feels like a lightweight productivity tool

Avoid flashy gradients, neon colors, heavy animations, glassmorphism, or overly decorative visuals.

## Requirements

### In `index.html`
- Add a clean, semantic page structure.
- Display a visible page title: `Reverse String`.
- Add a text input where the user can type a word or sentence.
- Add a `Reverse` button.
- Add a visible result area where the reversed string is displayed.
- Add a `Copy` button to copy the reversed output to the clipboard.
- Include basic internal CSS directly inside `index.html`.
- Style the page with a clear **Notion-like UI**, using a soft neutral background, rounded corners, subtle borders, and refined spacing.
- Make the UI modern, simple, elegant, and responsive.

### In `script.js`
- Write valid vanilla JavaScript only.
- Completely replace the current file contents if needed.
- Do not preserve any existing Python or unrelated code.
- Reverse the string character by character.
- Example: `AI4Devs` → `sveD4IA`.
- Update the reversed result in real time while the user types.
- The app must not depend on clicking the `Reverse` button to generate the output.
- The `Reverse` button must still exist, but it should only be visible when the input contains more than 3 characters.
- Update that button visibility dynamically as the user types.
- Pressing `Enter` inside the input should work gracefully and must not break the behavior.
- If the input is empty, the app must not fail; it should show an empty result or a friendly placeholder.
- Implement the `Copy` button using `navigator.clipboard`.
- Add basic error handling in case copying fails.

## Constraints
- Use only `index.html` and `script.js`.
- Do not rename the files.
- Do not create extra files.
- Do not use React, Vue, jQuery, Tailwind, Bootstrap, or any external dependencies.
- Do not explain the solution.
- Return only the final code.
- Format the response in exactly two sections:
  - `index.html`
  - `script.js`

## Acceptance Criteria
The solution is correct only if all of the following are true:
- The page contains an input, a result area, a `Copy` button, and a `Reverse` button.
- The reversed string updates live as the user types.
- The `Reverse` button is hidden when the input has 3 or fewer characters.
- The `Reverse` button appears automatically when the input has more than 3 characters.
- Typing `AI4Devs` displays `sveD4IA`.
- The `Copy` button copies exactly the reversed result.
- `script.js` contains real JavaScript, not Python or pseudocode.
- The page works directly in the browser without extra setup.
- The UI clearly feels inspired by Notion: minimal, refined, neutral, and productivity-focused.
- The code is readable, organized, and easy to maintain.

## Few-Shot Examples

### Example 1
**Input:** `Hello`  
**Expected output:** `olleH`

### Example 2
**Input:** `AI4Devs`  
**Expected output:** `sveD4IA`

### Example 3
**Input:** `ChatGPT`  
**Expected output:** `TPGtahC`

## Notes
- Prioritize correctness and usability over visual effects.
- Focus only on modifying `index.html` and `script.js`.
- The most important behaviors are:
  1. real-time reverse output
  2. conditional visibility of the `Reverse` button
  3. replacing any invalid existing contents in `script.js` with proper JavaScript
  4. implementing a clean Notion-inspired UI/UX
