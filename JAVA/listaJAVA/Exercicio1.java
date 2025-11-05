package listaJAVA;
import java.util.Scanner;
public class Exercicio1 {

    //1) Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.

    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Digite o primeiro número inteiro: ");
            int num1 = scanner.nextInt();

            System.out.print("Digite o segundo número inteiro: ");
            int num2 = scanner.nextInt();

            int soma = num1 + num2;
            int subtracao = num1 - num2;
            int multiplicacao = num1 * num2;
            double divisao = (double) num1 / num2;


            System.out.println("Soma: " + soma);
            System.out.println("Subtração: " + subtracao);
            System.out.println("Multiplicação: " + multiplicacao);
            System.out.printf("Divisão: %.2f", divisao);

            scanner.close();
        }
    }
