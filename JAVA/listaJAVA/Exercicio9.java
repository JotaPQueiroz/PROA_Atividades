package listaJAVA;
import java.util.Scanner;
public class Exercicio9 {

//9) Escreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem.

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        final int DIAS_POR_ANO = 365;
        final int DIAS_POR_MES = 30;

        System.out.print("Digite quantos anos completos você tem: ");
        int anos = scanner.nextInt();

        System.out.print("Digite quantos meses completos você tem: ");
        int meses = scanner.nextInt();

        System.out.print("Digite quantos dias você tem: ");
        int dias = scanner.nextInt();

        int totalDias = (anos * DIAS_POR_ANO) + (meses * DIAS_POR_MES) + dias;

        System.out.println("Você tem aproximadamente " + totalDias + " dias de vida.");

        scanner.close();
    }
}
