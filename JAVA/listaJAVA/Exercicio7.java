package listaJAVA;
import java.util.Scanner;
public class Exercicio7 {

    //7) Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor do depósito mensal: R$ ");
        double depositoMensal = scanner.nextDouble();

        System.out.print("Digite a taxa de juros mensal (Ex: 0.01 para 1%): ");
        double taxaJuros = scanner.nextDouble();

        double montante = 0.0;


        for (int i = 1; i <= 12; i++) {

            montante = montante + depositoMensal;

            montante = montante * (1 + taxaJuros);
        }

        System.out.printf("O montante após 12 meses será de: R$ %.2f\n", montante);

        scanner.close();
    }
}
