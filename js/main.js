function fizzBuzz(){
    for (var i=1; i<101; i++)
    {
        if (i % 15 == 0)
        document.write( "\n Fizzbuzz \n " + "<br>");
        else if (i % 3 == 0)
        document.write("\n Fizz \n" + "<br>");
        else if (i % 5 == 0)
        document.write("\n Buzz \n" + " <br>");
        else
        document.write(i + "<br>")
    }
}


        function beerSong(){
            var word = "bottles";
            var count = 99;
            while (count > 0) {
                document.write(count + " " + word + " of beer on the wall <br>");
                document.write(count + " " + word + " of beer, <br>");
                document.write("Take one down, pass it a  round, <br>");
                count = count - 1;
                if (count > 0) {
                    document.write(count + " " + word + "of beer on the wall.<br>");
                } else {
                    document.write("No more " + word + "of beer on the wall.<br>");
                }
            }
        }

       function FibonacciSeries(){
           var limit = prompt("Enter the limit'n' to generate fibonacci sequence: ", " ");
           var f1=0;
           var f2 = 1;

           document.write("The limited entered to generate the fibonacci sequence is: ",limit, "<br/>");
           document.write("The fibonacci sequence : ");
           document.write("", f1, " ");
           document.write("", f2, " ");

           var i,f3;
           for(i =2; i < limit ; i++)
           {
               f3 = f1 + f2;
               document.write("", f3, " ");
               f1=f2;
               f2=f3;
           }
       }
