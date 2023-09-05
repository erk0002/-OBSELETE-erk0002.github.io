document.addEventListener('DOMContentLoaded', function liveAge() {
    var currentDate = new Date();
    var birthdate = new Date('2004-11-28');
    var ageInMilliseconds = currentDate - birthdate;
    var ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

    document.getElementById('p1').innerHTML = "<b>Age:</b> " + (ageInYears);
  });
  