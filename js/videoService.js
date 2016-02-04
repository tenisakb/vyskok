$(document).ready(function(){
    console.log('hi');
    var video = $('.video-source');
    video.get(0).play();

    var interval = setInterval(pauseVideo, 4025 + getUrlParameter('score') * 40);

    function pauseVideo(){
        video.get(0).pause();
        clearInterval(interval);
    }

    /*Function for fetching parameters from url*/
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
});