import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    { "id": 1, "catId": 1, "name": "Powerpuff Girls", "description": "cukiság és hősiesség kimaxolva", "image": "pindur-pandurok.jpg", "price": 100000, "stock": 3, "featured": false, "active": true },
    { "id": 2, "catId": 2, "name": "Dee Dee", "description": "önmegsemmisítő gomb nem marad érintetlenül", "image": "dee-dee.jpg", "price": 75000, "stock": 1, "featured": true, "active": true },
    { "id": 3, "catId": 3, "name": "Kockásfülű Nyúl", "description": "városnézés a magasból", "image": "kockasfulu-nyul.jpg", "price": 19000, "stock": 1, "featured": false, "active": true },
    { "id": 4, "catId": 4, "name": "Pom Pom", "description": "a multifunkciós lazulás nagymestere. fel....le....hehe", "image": "pom-pom.jpg", "price": 99000, "stock": 1, "featured": true, "active": true },
    { "id": 5, "catId": 3, "name": "Legkisebb Királyfi", "description": "a világ végére és vissza, vele (vagy nélküle...)", "image": "legkisebb-kiralyfi.png", "price": 100000, "stock": 12, "featured": true, "active": true },
    { "id": 6, "catId": 5, "name": "Vuk", "description": "a lelkes kezdő. még sokra viszi. nem buta, csak még keveset tud.róka-béka, vagy béka-róka???", "image": "vuk.jpg", "price": 125000, "stock": 1, "featured": true, "active": true },
    { "id": 7, "catId": 6, "name": "Vizipók-csodapók", "description": "ahová Spider-man nem fér be...", "image": "vizipok-csodapok.png", "price": 99000, "stock": 1, "featured": false, "active": true },
    { "id": 8, "catId": 4, "name": "Shrek", "description": "pillanatok alatt elkészíti pezsgőfürdőjét! iszappakolás, masszázs", "image": "shrek.jpg", "price": 120000, "stock": 3, "featured": true, "active": true },
    { "id": 9, "catId": 5, "name": "Crocodile Dundee", "description": "veszélyesebb küldetéseket is vállal. városi környezetbe nem ajánljuk.", "image": "crocodile_dundee.jpg", "price": 199000, "stock": 1, "featured": true, "active": true },
    { "id": 10, "catId": 7, "name": "James Bond", "description": "mixer, sofőr, stand-up - 3 az 1-ben. elegáns megjelenés, hibátlan fogsor", "image": "james-bond.png", "price": 1000000, "stock": 1, "featured": true, "active": true },
    { "id": 11, "catId": 5, "name": "Indiana Jones", "description": "elveszett a frigyládája? Jones megtalálja!", "image": "indiana-jones.png", "price": 990000, "stock": 5, "featured": true, "active": true },
    { "id": 12, "catId": 8, "name": "Robin Hood", "description": "a vajszívű végrehajtó, minden fillérnek jó gazdája, az újraelosztás fenoménje.", "image": "robin-hood.jpg", "price": 700000, "stock": 9, "featured": true, "active": true },
    { "id": 13, "catId": 9, "name": "Kinizsi Pál", "description": "ha kell, szól a feketeseregnek, okosba'", "image": "kinizsi-pal.png", "price": 10000, "stock": 1, "featured": false, "active": true },
    { "id": 14, "catId": 9, "name": "Toldi Miklós", "description": "vitézember, költöztetést is vállal", "image": "toldi-miklos.png", "price": 15000, "stock": 1, "featured": true, "active": true },
    { "id": 15, "catId": 2, "name": "Pomogácsok", "description": "jönnek! majd megtudod! életre szóló meglepetés", "image": "pomogacs.png", "price": 450000, "stock": 1000, "featured": true, "active": true },
    { "id": 16, "catId": 8, "name": "Ludas Matyi", "description": "tartozásbehajtás. 3x hatékonyabb, mint a versenytársak", "image": "ludas-matyi.png", "price": 300000, "stock": 3, "featured": true, "active": true },
    { "id": 17, "catId": 6, "name": "Süsü", "description": "begyújt, cölöpet ver, ahogy kell...", "image": "susu.jpg", "price": 77000, "stock": 1, "featured": false, "active": true },
    { "id": 18, "catId": 4, "name": "Gombóc Artúr", "description": "most kedvezményes csokiszökökúttal", "image": "gomboc-artur.png", "price": 75000, "stock": 5, "featured": true, "active": true },
    { "id": 19, "catId": 7, "name": "Hüvelyk Matyi", "description": "tolmács, extra adójóváírással, CSOK-kal", "image": "huvelyk-matyi.jpg", "price": 25000, "stock": 2, "featured": false, "active": true },
    { "id": 20, "catId": 6, "name": "7 törpe", "description": "kerti medencéjét kiássák, 7 munkás egy áráért", "image": "het-torpe.jpg", "price": 250000, "stock": 7, "featured": true, "active": true },
    { "id": 21, "catId": 1, "name": "Tündérkeresztanya", "description": "kívánsága parancs, tökökre vigyázni!", "image": "tunderkeresztanya.jpg", "price": 200000, "stock": 3, "featured": true, "active": true },
    { "id": 22, "catId": 2, "name": "Gonosz Mostoha", "description": "professzionális áskálódás, mesterfokon", "image": "gonosz-mostoha.jpg", "price": 999999, "stock": 5, "featured": true, "active": true },
    { "id": 23, "catId": 9, "name": "Karak", "description": "szakterülete a szárnyasok védelme", "image": "karak.png", "price": 45000, "stock": 2, "featured": true, "active": true },
    { "id": 24, "catId": 4, "name": "Hófehérke", "description": "szépségtrükkök tükör nélkül", "image": "hofeherke.jpg", "price": 270000, "stock": 1, "featured": true, "active": true },
    { "id": 25, "catId": 1, "name": "Herceg (fehér lovon)", "description": "szőke, barna és vörös opcióval választható", "image": "herceg-feher-lovon.jpg", "price": 300000, "stock": 3, "featured": false, "active": true },
    { "id": 26, "catId": 1, "name": "Batman", "description": "nananana", "image": "batman.jpg", "price": 1000000, "stock": 9, "featured": true, "active": true },
    { "id": 27, "catId": 6, "name": "Spider-man", "description": "sző, fon, nem takács, ács (létra nélkül)", "image": "spiderman.png", "price": 750000, "stock": 4, "featured": true, "active": true },
    { "id": 28, "catId": 3, "name": "Luke Skywalker", "description": "az erő vele van, nem? de.", "image": "luke-skywalker.png", "price": 10, "stock": 1, "featured": true, "active": true },
    { "id": 29, "catId": 3, "name": "Han Solo", "description": "Kessel futam, 12 parsec alatt", "image": "han-solo.png", "price": 1000000, "stock": 1, "featured": true, "active": true },
    { "id": 30, "catId": 6, "name": "Mekk Mester", "description": "ezermester, mostanában webfejleszt, hacking olcsón", "image": "mekk-mester.png", "price": 5000, "stock": 1000, "featured": true, "active": true },
    { "id": 31, "catId": 6, "name": "Dr.Bubó", "description": "diktál a beteg, írja a doktor...", "image": "dr-bubo.png", "price": 20000, "stock": 1, "featured": false, "active": true },
    { "id": 32, "catId": 1, "name": "Nick Grabowski", "description": "cége mindig az ön rendelkezésére áll, asszonyom", "image": "nick-grabowski.png", "price": 1200000, "stock": 1, "featured": true, "active": true },
    { "id": 33, "catId": 3, "name": "Lusta Dick", "description": "ki tudja mi lesz a vége? izgalmas utazás bárhová, vér- és áldozatmentesen, zenei aláfestéssel rendelhető", "image": "lusta-dick.png", "price": 25000, "stock": 2, "featured": true, "active": true },
    { "id": 34, "catId": 6, "name": "3 kismalac", "description": "házak beépített farkassal vagy anélkül...", "image": "3-kismalac.png", "price": 450000, "stock": 3, "featured": true, "active": true },
    { "id": 35, "catId": 6, "name": "Ursula", "description": "hangsúlyos egyéniség, ha kell egy kis protekció", "image": "ursula-dr-bubo.png", "price": 10000, "stock": 1, "featured": false, "active": true },
    { "id": 36, "catId": 1, "name": "Fekete Lovag (fekete lovon)", "description": "kezek és lábak külön kiegészítőkként bérelhetők", "image": "fekete-lovag.jpg", "price": 500000, "stock": 4, "featured": true, "active": true },
    { "id": 37, "catId": 1, "name": "Merida", "description": "profi medveszelidítő, és primán bánik az íjjal/lidércekkel", "image": "merida.jpg", "price": 450000, "stock": 4, "featured": false, "active": true },
    { "id": 38, "catId": 3, "name": "Aladdin", "description": "egzotikus utakhoz egzotikus útitárs (ajándék dzsinnel)", "image": "aladdin.jpg", "price": 250000, "stock": 5, "featured": true, "active": true },
    { "id": 39, "catId": 7, "name": "Merlin", "description": "kerti-partikra, születésnapokra, céges rendezvényekre", "image": "merlin.jpg", "price": 990000, "stock": 10, "featured": true, "active": true },
    { "id": 40, "catId": 7, "name": "Lovagok, akik azt mondják 'ni!'", "description": "hülye angoloknak, angol hülyéknek", "image": "lovagok-akik-azt-mondjak-ni.jpg", "price": 150000, "stock": 25, "featured": true, "active": true },
    { "id": 41, "catId": 1, "name": "Perselus Piton", "description": "Mindig.", "image": "perselus-piton.png", "price": 750000, "stock": 2, "featured": true, "active": true },
    { "id": 42, "catId": 9, "name": "Dobby", "description": "szabad házimanó, attól is megvéd, amitől nem akarod", "image": "dobby.jpg", "price": 100000, "stock": 1, "featured": true, "active": true },
    { "id": 43, "catId": 8, "name": "Ali baba", "description": "biztonságos befektetések, mesés kamatok", "image": "alibaba.jpg", "price": 75000, "stock": 1, "featured": true, "active": true },
    { "id": 44, "catId": 8, "name": "40 rabló", "description": "Végrehajtó Kamara - a legfelső fokon!", "image": "40-rablo.png", "price": 100000, "stock": 40, "featured": false, "active": true },
    { "id": 45, "catId": 4, "name": "Csipkerózsika", "description": "a kellemes alvás szakértője", "image": "csipkerozsika.jpg", "price": 280000, "stock": 1, "featured": false, "active": true },
    { "id": 46, "catId": 1, "name": "Legolas", "description": "tünde szeme messze lát", "image": "legolas.png", "price": 800000, "stock": 1, "featured": false, "active": true },
    { "id": 47, "catId": 9, "name": "Csavardi Samu", "description": "soha el nem hagy!", "image": "csavardi-samu.png", "price": 78000, "stock": 3, "featured": true, "active": true },
    { "id": 48, "catId": 10, "name": "Superman (háztartási)", "description": "eldugult a mosogató? ráégett a zsír?", "image": "superman.jpg", "price": 1000000, "stock": 8, "featured": true, "active": true },
    { "id": 49, "catId": 9, "name": "Pityke Őrmester", "description": "Marcipán-nal az igazi! (kedvezmények)", "image": "pityke-ormester.png", "price": 50000, "stock": 5, "featured": true, "active": true },
    { "id": 50, "catId": 10, "name": "Hamupipőke", "description": "kiborult a mák? reggelre mindennel is meglesz!", "image": "hamupipoke.jpg", "price": 9990, "stock": 1, "featured": true, "active": true },
    { "id": 51, "catId": 6, "name": "Mézga Aladár", "description": "1 forintért megmondja!", "image": "mezga-aladar.jpg", "price": 120000, "stock": 1, "featured": true, "active": true },
    { "id": 52, "catId": 2, "name": "Rózsaszín Párduc", "description": "a beszerzők beszerzője - se páncél, se riasztó, se csetlő-botló Clouseau felügyelő nem akadály", "image": "rozsaszin-parduc.jpg", "price": 125000, "stock": 2, "featured": true, "active": true },
    { "id": 53, "catId": 2, "name": "Prérifarkas", "description": "professzionális üldözősofőr, beépített csapdafelismerő rendszerrel", "image": "prerifarkas.jpg", "price": 90000, "stock": 1, "featured": true, "active": true },
    { "id": 54, "catId": 2, "name": "Curious George", "description": "unatkozik? fogadjon örökbe kismajmot!", "image": "george-bajkevero.jpg", "price": 50000, "stock": 10, "featured": false, "active": true },
    { "id": 55, "catId": 4, "name": "Sebastian", "description": "zenés gyermekfelügyelet, hidromasszázs-ringatás", "image": "sebastian-kishableany.png", "price": 80000, "stock": 10, "featured": true, "active": true },
    { "id": 56, "catId": 5, "name": "Bigyó felügyelő", "description": "izék és kütyük alkalmazásának nagymestere, feketeöves mindentmegold", "image": "bigyo-felugyelo.jpg", "price": 19000, "stock": 99, "featured": false, "active": true },
    { "id": 57, "catId": 5, "name": "Winnetou", "description": "fő szakterülete a nyomkeresés, észak-amerikai nagyvadak élete, és az őslakos-új telepes kapcsolat", "image": "winnetou.png", "price": 10000, "stock": 2, "featured": true, "active": true },
    { "id": 58, "catId": 5, "name": "Dr. Watson", "description": "józan angol úriember,  másodhegedűs magánnyomozó, kiterjedt IBM-portfólióval", "image": "dr-watson.png", "price": 250000, "stock": 6, "featured": true, "active": true },
    { "id": 59, "catId": 7, "name": "Tigris", "description": "kiapadhatatlan energia, nyaktörő mutatványok", "image": "tigris.jpg", "price": 75000, "stock": 5, "featured": true, "active": true },
    { "id": 60, "catId": 7, "name": "101 kiskutya", "description": "statiszták tömegjelenetekhez, eredeti bundában", "image": "101-kiskutya.jpg", "price": 101101, "stock": 101, "featured": true, "active": true },
    { "id": 61, "catId": 8, "name": "Dagobert bácsi", "description": "ha úszni akar a pénzben...", "image": "dagobert-bacsi.jpg", "price": 45000, "stock": 1, "featured": true, "active": true },
    { "id": 62, "catId": 8, "name": "Kiskakas", "description": "befektetések akár gyémántalapon is, közel-keleti kapcsolatokkal", "image": "kiskakas.jpg", "price": 315000, "stock": 3, "featured": true, "active": true },
    { "id": 63, "catId": 10, "name": "Az erdő állatai", "description": "szoprán énekrangra aktiválódó, az összes háztartási tevékenységre kiterjedő szolgáltatás", "image": "erdo-allatai.jpg", "price": 25000, "stock": 10000, "featured": true, "active": true },
    { "id": 64, "catId": 10, "name": "Micimackó", "description": "zavartalan mézellátás, nem betűzi a szeretetet", "image": "micimacko.jpg", "price": 75000, "stock": 2, "featured": true, "active": true },
    { "id": 65, "catId": 10, "name": "Kisvakond", "description": "kerti munkák, tereprendezés", "image": "kisvakond.jpg", "price": 120000, "stock": 4, "featured": true, "active": true },
    { "id": 66, "catId": 10, "name": "Piroska", "description": "idősgondozás, ételszállítás (arcfelismerésben még fejlődnie kell)", "image": "piroska.jpg", "price": 45000, "stock": 5, "featured": false, "active": true }]

  categoryList: Category[] = [
    { "id": 1, "name": "bajnok", "description": "Mert megérdemli! (választható megjelenéssel)" },
    { "id": 2, "name": "bajkeverő", "description": "ha minden próbálkozása kudarcot vallott. ezotéria, hókusz-pókusz mesterfokon." },
    { "id": 3, "name": "utazásszervezés", "description": "garantáltan vírusmentes közlekedés. megröptetjük a pénzé(ér)t." },
    { "id": 4, "name": "rekreáció", "description": "lazuljon úgy, mint a nagyok. a mesevilág várja önt is." },
    { "id": 5, "name": "nyomozás", "description": "Tűt keres a szénakazalban? Nem találja Waldo-t? Szakértő csapat, teljes diszkréció." },
    { "id": 6, "name": "szaki", "description": "Ezermesterek referenciával, mindent is - igény szerint belülről kizárva vagy kívülről bezárva. Áfa-s számlaadás, regisztrált kivitelezők, korrekt határidők" },
    { "id": 7, "name": "show-műsor", "description": "ámítás, szélhámoskodás anyagi kár nélkül." },
    { "id": 8, "name": "pénzügyi megoldások", "description": "pénztárcabarát megoldások, meggyőző fellépés" },
    { "id": 9, "name": "őrzés-védelem", "description": "Fort-Knox sincsen nagyobb biztonságban" },
    { "id": 10, "name": "háztartási alkalmazott", "description": "szélmalomharc a házimunkában? szuperhőseinkkel játék a háztartás" }]

  constructor() { }

  getAll(): Product[] {
    return this.productList;
  }
  getOne(id: string | number): Product {
    return this.productList.filter(product => product.id === Number(id))[0];
  }
  getAllFeaturedByCatId(catId: string | number): Product[] {
    return this.productList.filter(product => product.catId === Number(catId) && product.featured);
  }
  getFeaturedAll(): Product[] {
    return this.productList.filter(product => product.featured)
  }
  getAllbyCatId(catId: string | number): Product[] {
    return this.productList.filter(product => product.catId === Number(catId));
  }
  getCategory(catId: string | number): Category{
    return this.categoryList.filter(category => category.id === Number(catId))[0];
  }
  getRandom(list: Product[], num: number = 5): Product[] {
    num = num > list.length ? list.length : num;
    const copyList = [...list];
    const result = [];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * copyList.length);
      result.push(copyList[index]);
      copyList.splice(index, 1);
    }
    return result;
  }

}
