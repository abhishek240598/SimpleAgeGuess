const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your birthdate? DD/MM/YYYY `, (name) => {
  console.log(getAge(name));
  readline.close()
});
function getAge(dateString) {

    var dates = dateString.split("/");
    var d = new Date();

    var userday = dates[0];
    var usermonth = dates[1];
    var useryear = dates[2];

    var curday = d.getDate();
    var curmonth = d.getMonth()+1;
    var curyear = d.getFullYear();

    var dayInMonth=[31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];
    console.log("user birthdate is "+userday+"/"+usermonth+"/"+useryear);
    console.log("current date is "+curday+"/"+curmonth+"/"+curyear);

    userday = dayInMonth[usermonth - 1] - userday + 1;

      userday = userday + d.getDate();
      usermonth = (12 - usermonth) + d.getMonth();
      useryear = d.getFullYear() - useryear - 1;
          
        if(userday >=30){
          usermonth = usermonth+ 1;
          userday = userday - 30;
        }

        if (usermonth >= 12)
        {
        useryear = useryear + 1;
        usermonth = usermonth - 12;
        }



    console.log("user age is "+useryear+"years "+usermonth+"month "+userday+"day");

    //return ageyear;
}

