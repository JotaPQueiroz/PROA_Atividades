package listaJAVA;
import java.util.Scanner;
public class Exercicio8 {

    //8) Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número para ver a tabuada: ");
        int numero = scanner.nextInt();

        System.out.println("Tabuada:" + numero );

        for (int i = 1; i <= 10; i++) {
            int resultado = numero * i;
            System.out.println(numero + " x " + i + " = " + resultado);
        }

        scanner.close();
    }
}
