package helpers;

/**
 * Created by JPMC-PC15 on 12/07/2017.
 */
public class Helpers {

    public int add(int a, int b){
        return a+b;
    }


    public int subtract(int a, int b){
        return a - b;
    }

    public  int multiply(int a, int b){
        return a * b;
    }

    public int divide(int a, int b){
        return a / b;
    }
    public int fibGenerator(int n) {
        int n1=0;
        int n2=1;
        int n3;

        System.out.print( "[" + n2 + "]");

        for ( int i = 2; i <= n; i++) {

            n3=n1+n2;

            System.out.print( "[" + n3 + "]");

            n1=n2;
            n2=n3;
        }
        return n;
    }





}

