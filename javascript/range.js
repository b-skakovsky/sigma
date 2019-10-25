$( function() {
    $('#price-range').slider({
        range: true,
        min: 0,
        max: 10000000,
        values: [0, 10000000],
        slide: function(event, ui) {
            $('#price-min').val(ui.values[0]);
            $('#price-max').val(ui.values[1]);
        }
    });
});
$('#price-min').change(function(event) {
    var minValue = $('#price-min').val();
    var maxValue = $('#price-max').val();
    if ( minValue <= maxValue) {
        $('#price-range').slider("values", 0, minValue);
    } else {
        $('#price-range').slider("values", 0, maxValue);
        $('#price-min').val(maxValue);
    }
}); 

$('#price-max').change(function(event) {
    var minValue = $('#price-min').val();
    var maxValue = $('#price-max').val();
    if ( maxValue >= minValue) {
        $('#price-range').slider("values", 1, maxValue);
    } else {
        $('#price-range').slider("values", 1, minValue);
        $('#price-max').val(minValue);
    }
});
$( function() {
    $('#room-range').slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 300],
        slide: function(event, ui) {
            $('#room-min').val(ui.values[0]);
            $('#room-max').val(ui.values[1]);
        }
    });
});

$('#room-min').change(function(event) {
    var minValue = $('#room-min').val();
    var maxValue = $('#room-max').val();
    if ( minValue <= maxValue) {
        $('#room-range').slider("values", 0, minValue);
    } else {
        $('#room-range').slider("values", 0, maxValue);
        $('#room-min').val(maxValue);
    }
}); 
// This isn't very DRY but it's just for demo purpose... oh well.
$('#room-max').change(function(event) {
    var minValue = $('#room-min').val();
    var maxValue = $('#room-max').val();
    if ( maxValue >= minValue) {
        $('#room-range').slider("values", 1, maxValue);
    } else {
        $('#room-range').slider("values", 1, minValue);
        $('#room-max').val(minValue);
    }
});
$( function() {
    $('#floor-range').slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 300],
        slide: function(event, ui) {
            $('#floor-min').val(ui.values[0]);
            $('#floor-max').val(ui.values[1]);
        }
    });
});

$('#floor-min').change(function(event) {
    var minValue = $('#floor-min').val();
    var maxValue = $('#floor-max').val();
    if ( minValue <= maxValue) {
        $('#floor-range').slider("values", 0, minValue);
    } else {
        $('#floor-range').slider("values", 0, maxValue);
        $('#floor-min').val(maxValue);
    }
}); 
// This isn't very DRY but it's just for demo purpose... oh well.
$('#floor-max').change(function(event) {
    var minValue = $('#floor-min').val();
    var maxValue = $('#room-max').val();
    if ( maxValue >= minValue) {
        $('#room-range').slider("values", 1, maxValue);
    } else {
        $('#room-range').slider("values", 1, minValue);
        $('#room-max').val(minValue);
    }
});
