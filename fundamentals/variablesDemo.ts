


var Sname: string = 'sohan'

var Sage = 12

console.log(`The name of the student is ${Sname} of age ${Sage}`);


function varScope() {
    if (true) {
        var msg = "hello world";

        console.log(msg);

    }

    console.log(msg);

}


varScope()

function blockScope() {
    if (true) {
        let msg1 = "hello world";

        const msg2 = "hello Const";

        console.log(msg1);

        console.log(msg2);


    }

    // console.log(msg1); -> cannot access

    // console.log(msg2); -> cannot access


}


blockScope()

function scopeDiff() {
    if (true) {

        var num1 = 12;

        let num2 = 34;

        const num3 = 56;

        /* console.log(num1);

        console.log(num2);

        console.log(num3); */


    }

    console.log(num1);

    // console.log(num2);// not accessible

    // console.log(num3);// not accessible


}


scopeDiff()

