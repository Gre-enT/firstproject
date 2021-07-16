import java.util.*;

public class test{
    public static void main(String args[]){
        while(true){

            Scanner scan = new Scanner(System.in);
            int w, h, p, q, t;


            w = scan.nextInt();
            h = scan.nextInt();
            scan.nextLine();
            p = scan.nextInt();
            q = scan.nextInt();
            scan.nextLine();
            t = scan.nextInt();
            scan.nextLine();

            int flagW = 1;
            int flagH = 1;

            System.out.println(w + " " + h + " " + p + " " + q + " " + t);

            if(p>w || q>h || w>40000 || w<2 || h>40000 || h<2 || t>200000000 || t<1 ){
                System.out.println("다시 입력하세요.");
            }
            else{
                break;
            }
        }

        for(int i = 1; i<=t; i++){
            antMove();
        }
    }
}
