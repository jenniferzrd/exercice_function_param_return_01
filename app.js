
  // EXERCICE 1
  /**
  * La fonction ci-dessous exécute une alerte et fait apparaître en pop-up un message.
  *
  * @function one
  *
  */
  var exo1 = function one() {
    // alert("ceci est le message de mon choix");
  };
  exo1();

  // EXERCICE 2

  /** La fonction hello renvoie dans votre console un message.
  *
  * @function hello
  *
  */
  var exo2Adele = function hello() {
    console.log("Hello... It's me... I was wondering... If after all these years...You’d like to meet...To go over... Everything...They say that time’s supposed to heal yeah but I ain’t done much healing");
  };
  exo2Adele();
  console.log(exo2Adele()); // Ce console.log vaut undefined

  // EXERCICE 3

  /** La fonction dummyReturn renvoie le paramètre p préalablement écrit dans la fonction.
  *  Cependant, elle retourne la valeur undefined.
  * Il faut pour cela affecter la fonction dummyReturn à une variable et lui
  * envoyer en paramètre une string par exemple, afin qu'elle affiche quelque chose.
  *
  * @function dummyReturn (p)
  *
  */

  var dummyReturn = function dummyReturn(p) {
    return p;
  };
  var x = dummyReturn("hello");
  console.log(x);
  // console.log(dummyReturn());
  // dummyReturn est undefined car p ne vaut "rien"

  // EXERCICE 4

  /** La fonction foo retourne la string "bar", cependant il faut l'affecter à une variable afin
    que le résultat ne soit pas undefined.
  *
  * @function foo ()
  *
  */
  function foo() {
    return "bar";
  }
  var x = foo();
  console.log(x);
  console.log(foo());

  // EXERCICE 5

  /** La fonction helloWho possède le paramètre nom et retourne la string "hello" ainsi
  *  que son paramètre.
  * Son paramètre étant égal à Arya.
  *
  * @function helloWho (nom)
  * @param nom
  *
  */

  var nom = "Arya";
  function helloWho (nom) {
    return "hello " + nom ;
  }
  var x = helloWho(nom);
  console.log(x);
  console.log(helloWho());


  // EXERCICE 6

  /** La fonction isNumber possède le paramètre n
  *
  * Son paramètre étant égal à un nombre, ici 34.
  *
  * @function isNumber (n)
  * @param n
  */

  var n = 34;
  function isNumber(n) {
    if (typeof(n) === 'number') {
      return true;
    }
  }
  console.log(isNumber(n));

  // EXERCICE 7


    /** La fonction contraire possède le paramètre b
    *
    * Son paramètre est égal à un boolean, ici false et est stocké dans une variable b.
    * La condition indique que si cette variable n'est pas une boolean alors elle retourne
    * une erreur.
    * Dans le cas contraire, elle indique qu'elle est un boolean.
    *
    * @function contraire
    * @param b
    */

  var b = false;
  function contraire(b) {
    if(typeof(b) !== 'boolean') {
      return new Error ("not boolean");
    } else {
      return !b;
    }
  }
  var x = contraire(b);
  console.log(x);
  contraire();

  // EXERCICE 8

  /** La fonction isEmpty possède le paramètre p
  *
  * Son paramètre est égal à un objet vide et est stocké dans une variable p.
  * La condition indique que si p est strictement égal ) une string alors elle retourne
  * true.
  * Sinon, si p est un tableau et qu'il est vide, alors elle retourne true
  * Sinon, si p est un objet et que cet objet est vide alors elle retourne true
  * Si il n'est égal à aucune de ces conditions, cela retourne false
  *
  * @function isEmpty
  * @param p
  */

  var p = {};

  function isEmpty(p) {
    if (p === "") {
      return true;
    }
    else if (Array.isArray(p) && p.length === 0) {
      return true;
    }
    else if (typeof(p) === 'object' && Object.getOwnPropertyNames(p).length === 0) {
      return true;
    } else {
      return false;
    }

  }
  console.log("resultat exo 8");
  isEmpty();
  console.log(isEmpty(p));
  var x = !isEmpty(p);
  console.log(x);

  // EXERCICE 9 et 10

  /** La fonction addCSSClass possède le paramètre s
  *
  *
  * @function addCSSClass
  * @param s
  */

  function addCSSClass(s,css) {
    var tab1= [];
    document.querySelectorAll(s).forEach(function(elem){
      elem.classList.contains(css);
      elem.classList.add(css);
      tab1.push(elem);
      console.log(elem);
    });
    return tab1;
  }

  window.onload = function() {
    console.log('####### addClass ######');
    console.log(addCSSClass(".music-genre", "coco"));
    console.log(isEmpty(addCSSClass(".music-genre", "coco")));
  };
