# bingo
Barebones Web Based Bingo Number Calling System (HTML/CSS/JS)

A simple barebones template that randomly calls bingo numbers and populates a table to show which numbers have been called
Based on 90 ball UK bingo

**ToDo: 90 number card generator**
- Clssic British Bingo card
- Using all 90 numbers
- Generates a 'book' of 5 game tickets
- each ticket is 3 rows by 9 columns
- each ticket has 15 numbers
- each line must have 5 numbers
- each colmun must have ONE or TWO numbers... ZERO or THREE numbers per column are not valid
- each column takes a group of numbers eg;
  - col1 = 0-9 (9 nums)
  - col2 = 10-19 (10 nums)
  - ...
  - col9 - 80-90 (11 numbers)
- NB: col1 can choose from 9 numbers (0-9), all other columns apart from col9 can choose from 10 numbers (n0-n9), col9 can choose from 11 numbers (80-90)


**ToDo: Misc**
- make table of called numbers display properly on mobile devices in portrait mode (stop using <TABLE> for layout)
- last called number should be different colour to other called numbers
- build an auto calling feature so that numbers are called automatically ever _n_ seconds.
- config.php - friendly front end to edit the game parameters (auto call on/off, speed of number calls, audio on/off, 
- better audio (non syntheitc speech)
- proper bingo number calling (two little ducks, legs eleven, unlucky for some etc)
- better looking numbers/balls
- POSSIBLE: bingo card generetor
  - make it interactive... or even autofill... requires some sort of microservice to get numbers and feedback if they've won.
- links to affiliate links to bingo ball machines in Amazon
- links to any resources I've used

Example Site: https://www.rootsquare.com/bingo/
