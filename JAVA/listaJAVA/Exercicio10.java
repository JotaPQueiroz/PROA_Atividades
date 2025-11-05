package listaJAVA;
import java.util.Scanner;
public class Exercicio10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o salário atual do funcionário: R$ ");
        double salarioAtual = scanner.nextDouble();

        double novoSalario = salarioAtual * 1.15;


        System.out.println("O salário com 15% de aumento é: R$\n" + novoSalario);

        scanner.close();
    }
}
