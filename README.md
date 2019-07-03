# Helloprint Challenge
## Challenge description
### Step 1

* Build html page that mimics as closes as possible the image page.png.
* Be consistent in your css naming!

### Step 2
* Layout should be responsive to iphone 5 size, using only HTML and CSS for its styling.
* Image header_banner.png must rendered above the form fields and be scalable horizontally with the width of the input field elements proportionally. 
* Dummy Menu should be responsive like on provided image (bonus: get menu items from a json file)
* Dummy Menu items should go to blank pages with only title of the route (bonus: routes should be displayed like /rankings, /tournaments etc.)

### Step 3
* For this challenge you must use the page created in step 2. In this game, 3 players can guess simultaneously or in a random order their numbers.
* To achieve this, each button must trigger an asynchronous call to endpoint https://www.drukzo.nl.joao.hlop.nl/challenge.php 
* These asynch calls must be handled simultaneously.
* The endpoint only allows GET requests with the following parameters in the query string. 
  * player=1 or 2 or 3
  * guess=integer between 0 and 100
* The response will be in a json format:
  * {"player": 1, "guess": "lower"}
  * {"player": 1, "guess": "higher"}
  * {"player": 1, "guess": "Bingo!!!"}
* When one of the players gets the "Bingo!!!" message, all the buttons must be disabled. 
* No javascript libraries or frameworks are allowed.  
