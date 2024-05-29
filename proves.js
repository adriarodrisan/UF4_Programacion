public class Llibre {
    String titol;
    String autor;
    boolean disponible;


    public Llibre(String titol, String autor) {
        this.titol = titol;
        this.autor = autor;
        this.disponible = true;
    }


    public void prestar() {
        if (disponible) {
            disponible = false;
            System.out.println(titol + " ha estat prestat.");
        } else {
            System.out.println(titol + " no està disponible.");
        }
    }


    public void retornar() {
        disponible = true;
        System.out.println(titol + " ha estat retornat.");
    }
}


public class Usuari {
    String nom;


    public Usuari(String nom) {
        this.nom = nom;
    }


    public void agafarLlibre(Llibre llibre) {
        llibre.prestar();
    }


    public void tornarLlibre(Llibre llibre) {
        llibre.retornar();
    }
}


public class Biblioteca {
    String nom;
    List<Llibre> llibres;


    public Biblioteca(String nom) {
        this.nom = nom;
        this.llibres = new ArrayList<>();
    }


    public void afegirLlibre(Llibre llibre) {
        llibres.add(llibre);
        System.out.println(llibre.titol + " ha estat afegit a la biblioteca.");
    }


    public Llibre buscarLlibre(String titol) {
        for (Llibre llibre : llibres) {
            if (llibre.titol.equals(titol)) {
                return llibre;
            }
        }
        return null;
    }
}
