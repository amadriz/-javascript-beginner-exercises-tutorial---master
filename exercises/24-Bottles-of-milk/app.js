// Your code here:
let count = 99;

function bottles(){
    while(count > 0){
        let bottle = count == 1 ? "bottle" : "bottles";
        console.log(count + " " +  bottle + " " + 'of milk on the wall' + " " +  count + " " + 'bottles of milk')
        console.log('take one down and pass it around,' + count + " " + bottle + " of milk on the wall");
        count = count -1;
    }

}

bottles()