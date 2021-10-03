import java.awt.geom.Point2D;
import java.util.Scanner;

public class Point2dTest {
    public static void main (String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.println("-- Input the first coordinate (P1) --");
        System.out.print("x1 : ");
        double x1 = input.nextDouble();
        System.out.print("y1 : ");
        double y1 = input.nextDouble();

        System.out.println("\n-- Input the second coordinate (P2) --");
        System.out.print("x2 : ");
        double x2 = input.nextDouble();
        System.out.print("y2 : ");
        double y2 = input.nextDouble();

        Point2D p1 = new Point2D.Double(x1, y1);
        Point2D p2 = new Point2D.Double(x2, y2);

        System.out.println("\nThe first coordinate is : " + p1.toString());
        System.out.println("The second coordinate is : " + p2.toString());

        System.out.println("\nThe distance between two coordinates is : " + p1.distance(p2));
    }
}
