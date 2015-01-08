$(document).ready(function() {
    var cities = [
        "New York",
        "Chicago",
        "Phoenix",
        "Boston",
        "Austin",
        "San Francisco",
        "Portand",
        "New Orleans",
    ];
    
    $('#cities').autocomplete({
        source: cities 
    }); 
});