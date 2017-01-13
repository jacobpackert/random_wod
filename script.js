$(function() {
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json',
        dataType: 'jsonp',
        success: function(response) {
            var wodNumber = Math.floor(response.feed.entry.length * Math.random());
            var data = response.feed.entry[wodNumber];
            wodname = data.gsx$name.$t;
            oldscore = data.gsx$score.$t;
            $('.wodname').html(wodname);
            $('.oldscore').html(oldscore);
        }
    });
});
