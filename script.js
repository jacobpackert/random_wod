$(document).ready(function(){
  wodCreation = function() {
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json',
        dataType: 'jsonp',
        success: function(response) {
        //   $.each(response.feed.entry, function(index, item) {
        //   if(item.gsx$score.$t > 1){
        //     console.log(item.gsx$name.$t + " scored " + item.gsx$score.$t);
        //   };
        // });
            console.log(response.feed.entry[0].gsx$description.$t);
            var wodNumber = Math.floor(response.feed.entry.length * Math.random());
            var data = response.feed.entry[wodNumber];
            wodname = data.gsx$name.$t;
            description = data.gsx$description.$t;
            if (data.gsx$score.$t == 0) {
                oldscore = "nothing. You haven't done this one before!";
            } else {
                oldscore = data.gsx$score.$t
            }
            $('.wodname').html(wodname);
            $('.description').html(description);
            $('.oldscore').html(oldscore);
            $('.descriptiontexts').show();
            $('.newwod').html("Another WOD 💪");
        }
    });
};

$('.newwod').on('click', wodCreation);

// Expanding the project description
$('#whatisthis').click(function(event) {
    event.preventDefault();
    console.log('clicked projectdescription');
    $('#projectdescription').slideToggle();
});

});
