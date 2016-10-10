// Counts down the remaining time to next_meetup specified below, and puts output in <div id="countdown">

// Follows structure as given below:
//
// <div id="countdown">
//     <div id = "days"></div>
//     <div id = "hours"></div>
//     <div id = "mins"></div>
//     <div id = "secs"></div>
// </div>



var next_meetup = "2017-01-01 0:00:00"; //specify date(yyyy-mm-dd) time(h:m:s) in ISO format; example "2016-10-11 0:00:00" 
countdown(next_meetup);

function countdown(to)
{
    setInterval(function(){time_diff(to);}, 500);
}

function time_diff(to)
{
    to = new Date(to);
    now = Date();

    var time_left = Date.parse(to) - Date.now();

    var ms_in_a_sec = 1000;
    var ms_in_a_min = 60 * ms_in_a_sec;
    var ms_in_an_hour = 60 * ms_in_a_min;
    var ms_in_a_day = 24 * ms_in_an_hour;

    var days = Math.floor(time_left / ms_in_a_day);
    time_left %= ms_in_a_day;
    
    var hours = Math.floor(time_left / ms_in_an_hour);
    time_left %= ms_in_an_hour;

    var mins = Math.floor(time_left / ms_in_a_min);
    time_left %= ms_in_a_min;

    var secs = Math.floor(time_left / ms_in_a_sec);

    time_left = {d:days, h:hours, m:mins, s:secs};
    document.getElementById("countdown").innerHTML = "<div id='days'>" + time_left.d + " Days</div><div id='hours'>" + time_left.h + " Hours</div><div id='mins'>" + time_left.m + " Minutes</div><div id='secs'>" + time_left.s + " Seconds</div>";

    return time_left; // returns associative array of days, hours, minutes and seconds remaining
}
