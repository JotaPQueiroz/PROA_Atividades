package listaJAVA;
import java.util.Scanner;

public class Exercicio3 {

    //3) Crie um programa que leia a base e a altura de um triângulo e calcule sua área.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor da base do triângulo: ");
        double base = scanner.nextDouble();
        System.out.print("Digite o valor da altura do triângulo: ");
        double altura = scanner.nextDouble();

        double area = (base * altura) / 2.0;

        System.out.printf("A área do triângulo é: %.2f", area);

        scanner.close();
    }
}
