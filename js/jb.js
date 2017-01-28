document.addEventListener( 'DOMContentLoaded', function () {
    particleground( document.getElementById( 'particles' ), {
        //dotColor: '#bfbebe',
        dotColor: '#e4e3e3',
        //lineColor: '#bfbebe',
        lineColor: '#e4e3e3',
        minSpeedX: 0.2,
        maxSpeedX: 1.0,
        minSpeedY: 0.2,
        maxSpeedY: 1.0,
        //Can be one of 'center', 'left' or 'right'. 'center' means
        //that the dots will bounce off the edges of the canvas.
        directionX: 'center',
        directionY: 'center',
        density: 9000,
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: false,
        proximity: 90, //How close two dots need to be, in pixels, before they join.
        parallax: true,
        parallaxMultiplier: 5 // The lower the number, the more extreme the parallax effect wil be.
    });
    var intro = document.getElementById( 'intro' );
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false );
document.oncontextmenu = function () {
    return false;
};

function animateMe( docid, effect ) {
    var classList = document.getElementById( docid ).classList;
    if ( classList.contains( "animated" ) == false ) {
        classList.add( "animated" );
        classList.add( effect );
        document.getElementById( docid ).classList = classList;
    } else {
        classList.remove( "animated" );
        classList.remove( effect );
        document.getElementById( docid ).classList = classList;
    }
}

