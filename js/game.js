var people;
var randomNumber;
var lastRandomNumber;

$.ajax({
    url: 'people.txt'
  }).done(function(content) {

    // normalize the line breaks, then split into lines
    people = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

    // only set up the click handler if there were lines found
    if (people && people.length) {
      $('#new-game').on('click', function () {
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * people.length);
          // check to prevent infinite loop
          if (people.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#p1-body').text(people[randomNumber]);

        // get the second
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * people.length);
          // check to prevent infinite loop
          if (people.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#p2-body').text(people[randomNumber]);
      });
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * people.length);
          // check to prevent infinite loop
          if (people.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#p1-body').text(people[randomNumber]);

        // get the second
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * people.length);
          // check to prevent infinite loop
          if (people.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#p2-body').text(people[randomNumber]);
    }
  });
$.ajax({
    url: 'contests.txt'
  }).done(function(content) {

    // normalize the line breaks, then split into lines
    contests = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

    // only set up the click handler if there were lines found
    if (contests && contests.length) {
      $('#new-game').on('click', function () {
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * contests.length);
          // check to prevent infinite loop
          if (contests.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#contest').text(contests[randomNumber]);
      });
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * contests.length);
          // check to prevent infinite loop
          if (contests.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#contest').text(contests[randomNumber]);
    }
  });
