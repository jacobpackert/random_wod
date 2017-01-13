$(function() {

    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json',
        // dataType: 'jsonp',
        success: function(response) {
            var wodNumber = Math.floor(response.feed.entry.length * Math.random());
            var data = response.feed.entry[wodNumber];
            console.log("Wodnumber is: " + wodNumber);
            console.log(data);
            wodname = data.gsx$name.$t;
            oldscore = data.gsx$score.$t;
            console.log("wod: " + wodname + " and score: " + oldscore);
            $('.wodname').html(wodname);
            $('.oldscore').html(oldscore);
        }
    });

});

// https://docs.google.com/spreadsheets/d/1tB8QwJrL1fcKw9qcOW8Cs6UPyv18pfpRUjq_eCXCDH0/pub?output=csv

// var wod111 = {
// name: "11.1",
// descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-1",
// };

// wods =
// [
// {name: "11.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-1"},
// {name: "11.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-2"},
// {name: "11.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-3"},
// {name: "11.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-4"},
// {name: "11.5",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-5"},
// {name: "11.6",descriptionurl: "http://games.crossfit.com/workouts/the-open/2011#tabs-6"},
// {name: "12.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2012#tabs-1"},
// {name: "12.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2012#tabs-2"},
// {name: "12.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2012#tabs-3"},
// {name: "12.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2012#tabs-4"},
// {name: "12.5",descriptionurl: "http://games.crossfit.com/workouts/the-open/2012#tabs-5"},
// {name: "14.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-1"},
// {name: "13.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2013#tabs-1"},
// {name: "13.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2013#tabs-2"},
// {name: "13.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2013#tabs-3"},
// {name: "13.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2013#tabs-4"},
// {name: "13.5",descriptionurl: "http://games.crossfit.com/workouts/the-open/2013#tabs-5"},
// {name: "14.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-1"},
// {name: "14.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-2"},
// {name: "14.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-3"},
// {name: "14.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-4"},
// {name: "14.5",descriptionurl: "http://games.crossfit.com/workouts/the-open/2014#tabs-5"},
// {name: "15.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2015#tabs-1"},
// {name: "15.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2015#tabs-2"},
// {name: "15.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2015#tabs-3"},
// {name: "15.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2015#tabs-4"},
// {name: "15.5",descriptionurl: "http://games.crossfit.com/workouts/the-open/2015#tabs-5"},
// {name: "16.1",descriptionurl: "http://games.crossfit.com/workouts/the-open/2016#tabs-1"},
// {name: "16.2",descriptionurl: "http://games.crossfit.com/workouts/the-open/2016#tabs-2"},
// {name: "16.3",descriptionurl: "http://games.crossfit.com/workouts/the-open/2016#tabs-3"},
// {name: "16.4",descriptionurl: "http://games.crossfit.com/workouts/the-open/2016#tabs-4"}
// ];



// //
// //
// var wodnumber = Math.floor(Math.random() * wods.length);
// // document.getElementById('wodname').innerHTML = wods[wodnumber][0];
// // document.getElementById('descriptionurl').href = wods[wodnumber][1];
//
// document.write('<h1>' + wods[wodnumber].name + '</h1>' + '<br><br>' + 'Read the description <a href="' + wods[wodnumber].descriptionurl + '">here</a>.')
