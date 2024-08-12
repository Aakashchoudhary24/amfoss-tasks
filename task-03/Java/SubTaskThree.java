import java.util.Scanner;

public class SubTaskThree{

    public static void main(String[] args) {
        asteriskDiamond();
    }

        public static void asteriskDiamond() {

            Scanner sc = new Scanner(System.in);

            System.out.print("Enter the width of the biggest row: ");

            int n = sc.nextInt();
            
            if (n <= 0) {
                System.out.println("Please enter a natural number");
            }
            
            if (n % 2 == 0) {
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < n - i - 1; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 0; k < i + 1; k++) {
                        System.out.print(" *");
                    }
                    System.out.println();
                }

                for (int i = 0; i < n - 1; i++) {
                    for (int j = 0; j <= i; j++) {
                        System.out.print(" ");
                    }
                    for (int k = 0; k < n - i - 1; k++) {
                        System.out.print(" *");
                    }
                    System.out.println();
                }

            } else {
                int t = n / 2;
                for (int i = 0; i <= t; i++) {
                    for (int j = 0; j < t - i; j++) {
                        System.out.print("   ");
                    }
                    for (int k = 0; k < 2 * i + 1; k++) {
                        System.out.print(" * ");
                    }
                    System.out.println();
                }
                for (int i = 0; i < t; i++) {
                    for (int j = 0; j <= i; j++) {
                        System.out.print("   ");
                    }
                    for (int k = 0; k < n - 2 * i - 2; k++) {
                        System.out.print(" * ");
                    }
                    System.out.println();
                }
            }
            
            sc.close();
    }
}
