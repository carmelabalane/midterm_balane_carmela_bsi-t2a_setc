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

        function Fibonacci(){
            var a,b, result;

            a=0;
            b=1;
            for(var i=1; i<100; i++)
            {
                document.write(result+"<br>");
                result = a+b;
                a=b;
                b=result;
            }
        }