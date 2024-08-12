import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class SubTaskFour {
    
    public static void main(String[] args) {
        showDiamond();
    }
    public static String asteriskDiamond(int n) {   

        StringBuilder stringOutPut = new StringBuilder();
            
            if (n <= 0) {
                System.out.println("Please enter a natural number");
            }
            
            if (n % 2 == 0) {
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < n - i - 1; j++) {
                        stringOutPut.append(" ");
                    }
                    for (int k = 0; k < i + 1; k++) {
                        stringOutPut.append(" *");
                    }
                    stringOutPut.append('\n');
                }

                for (int i = 0; i < n - 1; i++) {
                    for (int j = 0; j <= i; j++) {
                        stringOutPut.append(" ");
                    }
                    for (int k = 0; k < n - i - 1; k++) {
                        stringOutPut.append(" *");
                    }
                    stringOutPut.append('\n');
                }

            } else {
                int t = n / 2;
                for (int i = 0; i <= t; i++) {
                    for (int j = 0; j < t - i; j++) {
                        stringOutPut.append("   ");
                    }
                    for (int k = 0; k < 2 * i + 1; k++) {
                        stringOutPut.append(" * ");
                    }
                    stringOutPut.append('\n');
                }
                for (int i = 0; i < t; i++) {
                    for (int j = 0; j <= i; j++) {
                        stringOutPut.append("   ");
                    }
                    for (int k = 0; k < n - 2 * i - 2; k++) {
                        stringOutPut.append(" * ");
                    }
                    stringOutPut.append('\n');
                }
            }
            return stringOutPut.toString();
    }
    public static void showDiamond() {
        FileReader input = null;
        FileWriter output = null;

        try {
            String content = new String(Files.readAllBytes(Paths.get("/home/aakash/amfoss-tasks/task-03/Java/diamondIn.txt")));
            int inputInteger =  Integer.parseInt(content.trim());

            output = new FileWriter("/home/aakash/amfoss-tasks/task-03/Java/diamondOut.txt");
            output.write(asteriskDiamond(inputInteger));
            
        } catch (IOException e) {
            e.printStackTrace();
        } finally { 
            try {
                if (input != null) {
                    input.close();
                }
                if (output != null) {
                    output.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }
}
