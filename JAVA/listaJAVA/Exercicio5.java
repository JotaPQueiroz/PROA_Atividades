package listaJAVA;
import java.util.Scanner;
public class Exercicio5 {

    //5) Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o salário base: R$ ");
        double salarioBase = scanner.nextDouble();

        double comissao = salarioBase * 0.05;
        double salarioLiquido = salarioBase + comissao;

        System.out.println("Salário Base: R$ " + salarioBase);
        System.out.println("Comissão (5%): R$ " + comissao);
        System.out.println("Salário Líquido: R$ " + salarioLiquido);

        scanner.close();
    }
}
