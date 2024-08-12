import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class SubTaskTwo {


    public static void main(String[] args) {
        fileReadAndWrite();
    }

    public static void fileReadAndWrite() {
        FileReader fileReader = null;
        FileWriter fileWriter = null;

        try {
            fileReader = new FileReader("/home/aakash/amfoss-tasks/task-03/Java/input.txt");
            StringBuilder data = new StringBuilder();
            int character;

            while ((character = fileReader.read()) != -1) {
                data.append((char) character);
            }

            fileWriter = new FileWriter("/home/aakash/amfoss-tasks/task-03/Java/output.txt");
            fileWriter.write(data.toString());
            
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (fileReader != null) {
                    fileReader.close();
                }
                if (fileWriter != null) {
                    fileWriter.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
