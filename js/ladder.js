/**
 * Created by jande on 29.01.2016.
 */
$(document).ready(function(){
    updateLadder();
    setInterval(updateLadder, 1000);

    function updateLadder(){
        $.ajax({
            url: 'php/results.php',
            type: 'post',
            data: {getResultsAsHTML: '1'},
            success: function(response) {$('.ladder-section').html(response);}
        });

        //$('.ladder-section').html('<div class="list-group"><a class="list-group-item"><h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text">...</p></a> </div>');
    }
});