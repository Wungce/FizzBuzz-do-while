 function myNumber(number){
    let i = 1;
  

    do{

        if( i % 3 == 0 && i %  5 == 0){

            console.log("FizzBuzz");


        }else if (i % 3 == 0){

         console.log("Fizz");

        }else if(i % 5 == 0){

            console.log("Buzz");


        }else{

            console.log(i);


        }
        i++;

    }

    
    while( i <= number);


}


myNumber(15);