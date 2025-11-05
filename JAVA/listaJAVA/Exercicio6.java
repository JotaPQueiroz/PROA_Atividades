package listaJAVA;
import java.util.Scanner;
public class Exercicio6 {
    public static void main(String[] args) {

        //6) Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa.

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número (A): ");
        int a = scanner.nextInt();

        System.out.print("Digite o segundo número (B): ");
        int b = scanner.nextInt();

        System.out.println("Valores Originais: A = " + a + ", B = " + b);

        int auxiliar;
        auxiliar = a;
        a = b;
        b = auxiliar;

        System.out.println("Valores Trocados: A = " + a + ", B = " + b);

        scanner.close();
    }
}
