---
title: "Case Study"
---

# 05: Business Pages 

## Háttér

> Az [Amerikába jöttem](https://port.hu/adatlap/film/tv/amerikaba-jottem-coming-to-america/movie-11018) és az [Amerikába jöttem 2.](https://port.hu/adatlap/film/tv/amerikaba-jottem-2-coming-2-america/movie-212064) című filmek története alapján.

Jaffe Jofer király halála után Zamunda trónját immár fia, Akeem foglalhatta el. Hallva azonban az idők szavát, Akeem király úgy döntött: az uralkodásba bevonja lányát, Meekát is.

Meeka a modern kor eszközeit használva szeretné felvirágoztatni Zamundát. Felismerte, hogy a fejlődés zálogát a digitális transzformáció jelenti: független IT infrastruktúra és digitális államigazgatás, kombinálva a megújuló energiaforrások és a klímabarát megoldások használatával.

Ez a digitális transzformációs program a Zamunda Digitális Reneszánsz (ZDR).

### A ZDR program általános követelményei

- Mivel egy állami programról van szó, ezért nagyon fontos, hogy minden projekthez megfelelő mennyiségű és minőségű dokumentáció készüljön.
- Zamunda nem szegény ország, de feleslegesen nem is akarja szórni a pénzt: a projektek tervezésénél törekedni kell a takarékosságra. Szintén ezt igénylik a klímabarát célok!
- Figyelembe kell venni, hogy az ország bizonyos területeienek internetlefedettsége hagy némi kívánnivalót maga után. Ahol van internet, ott is előfordulhatnak magasabb késleltetések, alacsonyabb sávszélességek.

## Leírás

Az országban majdnem egymillió vállalkozás működik, ezek kétharmadának ugyanakkor szinte semmilyen online jelenléte nincs. Mondani sem kell, hogy napjainkban ez mekkora versenyhátrányt jelent.

Elősegítendő a vállalkozások online megjelenését, Zamunda a következőket szeretné kínálni minden vállalkozás számára:
- Pontosan egy darab ingyenes, `.zamunda` végződésű domain.
- A domainhez rendelt ingyenes tárhely, mellyen statikus weboldalak üzemeltethetők.

### Valós kapcsolódás

- [Static.app](https://static.app/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Netlify](https://www.netlify.com/)

## Felhasználók

- A Zamundában bejegyzett vállalkozások (közel egymillió vállalkozás).

## Követelmények

- Minden bejegyzett vállalkozás legfeljebb egy domaint választhat. A választott domain bármikor megváltoztatható.
- A szolgáltatás annyi tárhelyet biztosít, amely elegendő kisebb mennyiségű médiatartalom feltöltésére is (képek, videók).
- Fontos, hogy a weboldalak gyorsan elérhetők legyenek, akár Zamundán kívül is, elősegítve ezzel a nemzetközi versenyképességet.
- A feltöltött fájlok adminisztrálására többféle lehetőséget kell biztosítani:
  - Webes felület.
  - API.
  - GitHub integráció. 
- Az autentikációhoz és autorizációhoz a Zamunda One nevű API-t kell integrálni, mely kizárólag vállalkozásokat enged bejelentkezni.
  - Valós kapcsolódás: [SZEUSZ Cégkapu](https://szeusz.gov.hu/szeusz/cegkapu)  

## Kiegészítések

- Nem kell a DNS részleteibe belemenni.
