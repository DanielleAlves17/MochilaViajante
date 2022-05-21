import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        String jogador1, jogador2;
        System.out.println("Nome do jogador1: ");
        Scanner nome1 = new Scanner(System.in);
        jogador1=nome1.nextLine();

        System.out.println("Nome do jogador2: ");
        Scanner nome2 = new Scanner(System.in);
        jogador2= nome2.nextLine();

        System.out.println("jogador 1:" + jogador1+ "\n jogador 2: " + jogador2 );

        int score1 = 0;
        int score2 = 0;
        System.out.println("Jogador 1 escolha sua opção: \n1.Pedra \n2.Papel \n3.Tesoura");
        Scanner j1 = new Scanner(System.in);
        int jogada1 = j1.nextInt();

        System.out.println("Jogador 2 escolha sua opção: \n1.Pedra \n2.Papel \n3.Tesoura");
        Scanner j2 = new Scanner(System.in);
        int jogada2 = j2.nextInt();

        if(jogada1 == jogada2){
            System.out.println("deu empate");
        }else if (jogada1 == 1 && jogada2 == 2) {
            System.out.println("Papel cobre pedra");
            score1++;

        } else if(jogada1 == 2 && jogada2 ==1) {
            System.out.println("Papel cobre pedra");
            score2++;

        } else if (jogada1 == 2 && jogada2 == 3) {
            System.out.println("Tesoura corta papel");
            score1++;
        } else if (jogada1 == 3 && jogada2 == 2) {
            System.out.println("Tesoura corta papel");
            score2++;
        } else if (jogada1 == 1 && jogada2 == 3){
            System.out.println("Pedra quebra tesoura");
            score1++;
        } else if(jogada1 == 3 && jogada2 == 1){
            System.out.println("Pedra quebra tesoura");
            score2++;

        }

        {
            if (score1 > score2){
                System.out.println("jogador 1 ganhou");
            }else{
                System.out.println("jogador 2 ganhou");
            }


        }
    }
    }