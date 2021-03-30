function getColor(colorname) {
    switch (colorname.toLowerCase()) {
        // Add more options here
        case 'red':
            console.log('red');
            return true;
            break
        case 'green':
            console.log('green');
            return true;
            break
        case 'blue':
            console.log('blue');
            return true;
            break
        default:
            return false; //returns false because the user picked an unavailable color
    }
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);


if (isAvailable){
    console.log('Good news! That color is available');
    } else {
    console.log('We are sorry, that color is not available');
    }