# wordle-solver

Helper to solve the daily word of wordle

Game website: [https://wordle.danielfrg.com/](https://wordle.danielfrg.com/)

Write a simple regex into `input/pattern.txt`

The words have always 5 letters matching `^[a-z]{5}$`.

Remember:

- `.` matches any character
- `*` matches 0 or more of the previous character
- `+` matches 1 or more of the previous character
- `?` matches 0 or 1 of the previous character

Examples:

- `a.r..`
  - has `a` and `r` at a static positions
  - `any other char` where the `.` is

Execute `yarn start` and see the coincidences.

Example:

- With the input: `a.r..`
- The output will be:

  ```
  [
    'abril', 'abrir', 'acroy',
    'adral', 'adrar', 'agraz',
    'agror', 'airar', 'aireo',
    'aorta', 'arras', 'arraz',
    'arria', 'arroz', 'atril',
    'atrio', 'atroz'
  ]
  ```

In the folder `esp_words` you can find all the words in spanish dictionary.

The files including `_clean` in the name, are the words filtered with only chars and 5 of length
