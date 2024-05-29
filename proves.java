public class proves {
    public static final void main (String[] args) {
    public ClasseA(); //que assigna els valors 5 i 10 als dos atributs, respectivament.
    public ClasseA(int vp);// que assigna “vp” a “valorPrimari” i el valor 10 a “valorSecundari”.
    public ClasseA(int vp, int vs);// que assigna “vp” i “vs” als dos atributs, respectivament.
        ClasseA a = new ClasseA();
        ClasseA b = new ClasseA(20);
        ClasseA c = new ClasseA(20, 40);
        System.out.println("L'objecte _a:_ conté: " + a.getPrimari() + ", " + a.getSecundari());
        System.out.println("L'objecte _b:_ conté: " + b.getPrimari() + ", " + b.getSecundari());
        System.out.println("L'objecte _c:_ conté: " + c.getPrimari() + ", " + c.getSecundari());
    }
  } 