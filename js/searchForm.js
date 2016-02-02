/**
 * Created by jande on 31.01.2016.
 */
$(document).ready(function(){
    $('.search-field').keyup(function(){
        if($('.search-field').val().length >= 1) {
            $.ajax({
                url: 'php/results.php',
                data: {
                    searchWords: $('.search-field').val()
                },
                type: 'post',
                success: function (htmltable) {
                    $('.search-results').html(htmltable);
                }
            });
        }
    });
});