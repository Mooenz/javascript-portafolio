/** ¿Sabías que existen idiomas, como el Hebreo, en donde no existen letras para las vocáles? Lo bueno es que podemos ignorarlas y aún entender lo que está escrito con puras consonantes.
 * El reto del día de hoy es eliminar las vocales de un párrafo y tratar de leerlo.
 * ¿Sabes a qué obra pertenece este párrafo? También puedes hacer el reto con tu párrafo favorito.*/

const parrafo = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años. Era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímiles se deja entender que se llamaba «Quijana». Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad.';

const vocales = new RegExp (/[aeiouáéíóú]/, 'gi');

const eliminarVocales = () => {
  return console.log(parrafo.replace(vocales,''));
}

eliminarVocales();

/** Solucion
 * n n lgr d l Mnch, d cy nmbr n qr crdrm, n h mch tmp q vv n hdlg d ls d lnz n stllr, drg ntg, rcn flc y glg crrdr. n ll d lg ms vc q crnr, slpcn ls ms nchs, dls y qbrnts ls sbds, lntjs ls vrns, lgn plmn d ñddr ls dmngs, cnsmn ls trs prts d s hcnd. l rst dll cncln sy d vlrt, clzs d vlld pr ls fsts, cn ss pntfls d l msm, y ls ds d ntrsmn s hnrb cn s vllr d l ms fn. Tn n s cs n m q psb d ls crnt y n sbrn q n llgb  ls vnt, y n mz d cmp y plz q s nsllb l rcn cm tmb l pddr. Frsb l dd d nstr hdlg cn ls cncnt ñs. r d cmplxn rc, sc d crns, njt d rstr, grn mdrgdr y mg d l cz. Qrn dcr q tn l sbrnmbr d «Qjd»,  «Qsd», q n st hy lgn dfrnc n ls trs q dst cs scrbn, nq pr cnjtrs vrsmls s dj ntndr q s llmb «Qjn». Pr st mprt pc  nstr cnt: bst q n l nrrcn dl n s slg n pnt d l vrdd.
 */