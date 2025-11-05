package listaJAVA;
import java.util.Scanner;

public class Exercicio2 {

    //2) Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o raio do círculo: ");
        double raio = scanner.nextDouble();
        double area = Math.PI * Math.pow(raio, 2);
        double perimetro = 2 * Math.PI * raio;

        System.out.printf("Área do círculo: %.2f", area);
        System.out.printf("Perímetro (Circunferência) do círculo: %.2f", perimetro);

        scanner.close();
    }
}
