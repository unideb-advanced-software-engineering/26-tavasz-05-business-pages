# Software Requirements Specification for Business Pages

**Version:** 0.1.0 approved  
**Prepared by:** Péter Tímár és Zsolt Szolnoki  
**Organization:** Advanced Software Engineering  
**Date:** 2026. 03. 03.  

---

## Revision History

| Name | Date | Reason For Changes | Version |
| :--- | :--- | :--- | :--- |
| Initial Version | Március 3. | A projektmunkánk kezdeti SRS verziója | 0.1.0 |

---

## 1. Introduction

### 1.1 Purpose
Ebben az SRS-ben a Zamunda Digitális Reneszánsz (ZDR) nevű, állami fejlesztési program első verziójának követelményeit írjuk le. Az SRS a teljes rendszer követelményeit tartalmazza.

### 1.2 Document Conventions
E dokumentum az alábbi jelöléseket, megnevezéseket vezeti be:
* **Rendszer:** Maga a ZDR program, melyről ezen dokumentum szól.
* **Hirdető:** A zamundai vállalkozások.
* **Érdeklődő, látogató:** Az érdeklődő potenciális kliensek.

### 1.3 Intended Audience and Reading Suggestions
Ez az SRS bármely, a projektben résztvevő munkatárs számára érdekes és hasznos lehet, technikai ismeretektől függetlenül.

### 1.4 Product Scope
Zamunda közel egymillió vállalkozásnak ad otthont és rendkívül büszke a hazai termékek minőségére. Viszont az online tért tekintve az ország jelentős lemaradásban van a világ fejlett országaihoz képest. Csupán a vállalkozások egyharmada van jelen valamilyen formában az online világban. A Zamunda Digitális Reneszánsz nevű állami projekt pedig szeretné segíteni a vállalkozásokat, illetve biztatni szeretné őket az online jelenlét megteremtésére, illetve fejlesztésére.

### 1.5 References
A rendszer alapjául szolgáló esettanulmány az alábbi linken található:  
[05: Business Pages | Szoftverrendszer tervezése](https://unideb-advanced-software-engineering.github.io/site/hu/scenarios/05-business-pages/)

---

## 2. Overall Description

### 2.1 Product Perspective
A ZDR egy új, zöldmezős projekt, mely egyáltalán nem rendelkezik előzményekkel, amennyiben nem tekintjük azon vállalkozásokat, melyek rendelkeznek saját weboldallal. A ZDR a vállalkozások segítéséért felelős, magukat a vállalkozásokat nem váltja ki.

### 2.2 Product Functions
A ZDR az alábbi funkcionalitást biztosítja a vállalatok számára:

* **Domain-név kezelés:** Minden hitelesített vállalkozás jogosult egyetlen ingyenes .zamunda végződésű domain név lefoglalására.
* **Statikus tárhely és tartalomkezelés:**
    * *Webtárhely biztosítása:* A rendszer statikus fájlok (HTML, CSS, JS) tárolását és kiszolgálását végzi.
    * *Médiatartalmak kezelése:* Lehetőség van nagyobb méretű képek és videofájlok feltöltésére és tárolására a vállalkozás profiljához rendelt kvótán belül.
    * *Globális elérés:* A tartalom gyors kiszolgálása érdekében a rendszernek biztosítania kell a weboldalak gyors elérését Zamundán belül és nemzetközileg is (alacsony késleltetés).
* **Azonosítás és jogosultságkezelés:**
    * *Zamunda One integráció:* A rendszer kizárólag a hivatalos állami azonosító portálon keresztül engedélyezi a belépést, garantálva, hogy csak bejegyzett vállalkozások vehessék igénybe a szolgáltatást.

### 2.3 User Classes and Characteristics
A rendszer felhasználói az alábbiak:
* **Vállalkozások:** Közel 1 millió potenciális felhasználó. Jellemzőjük a rendkívül heterogén digitális érettség.
* **Érdeklődők:** A világ bármely pontjáról érkező internetfelhasználók, akik a vállalkozások weboldalait tekintik meg.
* **Adminisztrátor:** A Zamunda Digitális Reneszánsz program üzemeltetési csapata.

### 2.4 Operating Environment
A rendszernek egyaránt kell alkalmazkodnia a modern globális elvárásokhoz és a zamundai helyi infrastruktúra sajátosságaihoz. A működési környezetet az alábbi tényezők határozzák meg:
* Zamunda One integrációja
* Webes felület
* GitHub integrációja

### 2.5 Design and Implementation Constraints
* **Zamunda One integrációja**
* **Webes felület**
* **GitHub integrációja**

### 2.6 User Documentation
Mivel egy állami programról van szó, ezért nagyon fontos, hogy minden projekthez megfelelő mennyiségű és minőségű dokumentáció készüljön.

### 2.7 Assumptions and Dependencies
* Zamunda One API rendelkezésre állása
* Megfelelő hálózati lefedettség
* GitHub API elérhetősége

---

## 3. External Interface Requirements

### 3.1 User Interfaces
A rendszer az alábbi felhasználói felületeket biztosítja:
* **Vállalkozói Adminisztrációs Portál:** Ezen a felületen a vállalkozások igényelhetik a .zamunda domaint és kezelhetik a tárhelyüket (fájlok feltöltése, törlése).
* **Publikus Weboldal:** A vállalkozások által feltöltött statikus tartalmakat megjelenítő felület.
* **Adminisztrátori felület:** Ezen a weboldalon a kezelők karbantarthatják a webcímeket, és beállíthatják, hogy ki mennyi tárhelyet használhat. Csak asztali megjelenítés szükséges.

### 3.2 Hardware Interfaces
Nincsenek hardveres komponensek.

### 3.3 Software Interfaces
Az operációs rendszerek, adatbázisok, könyvtárak még ezen a ponton nem ismertek. További szoftveres interfészek:
* **Zamunda One API:** Kötelező interfész az autentikációhoz és a vállalkozói adatok validálásához.
* **GitHub API & Webhooks:** Interfész a verziókezelőből történő automatikus fájlfrissítéshez.
* **Domain Név Szerver (DNS) Interfész:** Kapcsolat a zamundai központi DNS-kezelővel a .zamunda domainek bejegyzéséhez és átirányításához.
* **Object Storage API:** A statikus fájlok (képek, videók) tárolásáért felelős háttértárral való kapcsolat.

### 3.4 Communications Interfaces
* Automatikus visszaigazolás küldése a sikeres domain-regisztrációról vagy a tárhely-kvóta eléréséről: **Email**
* A felületek megjelenítése: **HTTP**
* A forráskód-alapú frissítések kezeléséhez: **Git protokoll**

---

## 4. System Features

### 4.1 Készletbeolvasás
#### 4.1.1 Description and Priority
Magas prioritás. A rendszer lehetővé teszi a vállalkozások számára, hogy statikus weboldalaik forrásfájljait (HTML, CSS, JS, média) feltöltsék és elérhetővé tegyék az interneten.

#### 4.1.2 Stimulus/Response Sequences
* A vállalkozó feltölti a fájlokat a webes felületen keresztül. A rendszer frissíti a tárhely tartalmát.
* A fejlesztő beküldi a fájlokat az API-n keresztül. A rendszer validálja és tárolja a tartalmat.
* Módosítás történik a kapcsolt GitHub repository-ban. A rendszer automatikusan letölti és publikálja az új verziót.
* A felhasználó módosítja a publikációs beállításokat. A rendszer rögzíti az új konfigurációt.

#### 4.1.3 Functional Requirements
* **F-TK-01:** A rendszer biztosít egy böngészőben futó, „drag-and-drop” alapú fájlfeltöltő felületet.
* **F-TK-02:** A rendszer biztosít egy hitelesített REST API-t a programozott tartalomfrissítéshez.
* **F-TK-03:** A rendszer támogatja a GitHub Webhook-okon keresztüli automatikus szinkronizációt.
* **F-TK-04:** A rendszernek kezelnie kell a nagy méretű médiafájlok (képek, videók) feltöltését, megszakadás esetén az újrakezdés lehetőségével.
* **F-TK-05:** A rendszer naplózza a feltöltési előzményeket, és lehetővé teszi a korábbi verziók megtekintését.

---

## 5. Other Nonfunctional Requirements

### 5.1 Performance Requirements
* **NF-TK-01:** A statikus weboldalak betöltési ideje globálisan (CDN-en keresztül) nem haladhatja meg a p90 2 másodpercet, biztosítva a nemzetközi versenyképességet. A p90 jelentése, hogy a feldolgozások 90%-a az említett 2 másodperces határ alá esik; ennél lassabb csak a beküldések 10%-a lehet.
* **NF-TK-02:** A GitHub-on elküldött módosítás (commit) és az éles weboldalon való megjelenés közötti idő p90 60 másodperc alatt kell maradjon.

### 5.2 Safety Requirements
* **NF-SAF-01:** A rendszernek naponta automatikus biztonsági mentést kell készítenie a vállalkozások által feltöltött tartalmakról, hogy adatvesztés esetén 24 órán belüli állapot visszaállítható legyen.

### 5.3 Security Requirements
* **NF-SEC-01:** A GitHub integrációhoz használt hozzáférési tokeneket és API kulcsokat a rendszer titkosítással, titkosított kulcstárolóban kezeli.
* **NF-SEC-02:** A rendszerbe való belépés kizárólag a Zamunda One protokollján keresztül történhet, jelszavakat a rendszer nem tárolhat.

### 5.4 Software Quality Attributes

#### Fenntarthatóság
* *Szcenárió:* Alacsony energiafelhasználású kiszolgálás.
* *Metrika:* A statikus tartalomkiszolgálásnak köszönhetően a szerveroldali CPU-felhasználásnak 70%-kal alacsonyabbnak kell lennie, mintha dinamikus (pl. WordPress) rendszert használnánk.

#### Hálózati rugalmasság
* *Szcenárió:* Fájlfeltöltés gyenge internetkapcsolat mellett.
* *Stimulus:* A vállalkozó vidéki, lassú és szakadozó mobilinternet mellett próbál meg videót feltölteni.
* *Válasz:* A rendszernek támogatnia kell a "chunked upload" (darabolt feltöltés) technikát, amely képes a megszakadt feltöltést onnan folytatni, ahol az félbeszakadt.
* *Metrika:* Egy 10-szer megszakadó feltöltésnek is sikeresen be kell fejeződnie a kapcsolat helyreállása után, újrakezdés nélkül.

#### Skálázhatóság
* *Szcenárió:* Hirtelen megnövekedett forgalom (pl. nemzeti ünnep vagy globális kampány).
* *Stimulus:* Egyszerre több százezer látogató érkezik a zamundai vállalkozások oldalaira.
* *Válasz:* Az elosztott architektúra (CDN) automatikusan kezeli a terhelést anélkül, hogy a központi adminisztrációs szerverek leterhelődnének.
* *Metrika:* A rendszernek ki kell szolgálnia percenként 500 000 kérést anélkül, hogy a válaszidő (latency) 10%-nál nagyobb mértékben növekedne.

### 5.5 Business Rules
A rendszer működését az alábbi, a ZDR program által meghatározott szabályok vezérlik:

* **BR-01:** Minden bejegyzett zamundai vállalkozás pontosan egy darab ingyenes .zamunda végződésű domain névre jogosult. A rendszernek meg kell akadályoznia, hogy egy adószámmal/cégkapuval rendelkező entitás több ingyenes domaint foglaljon le.
* **BR-02:** A vállalkozások számára biztosítani kell a jogot a választott domain név megváltoztatására. Ebben az esetben a korábbi domain névnek azonnal (vagy egy meghatározott türelmi idő után) újra szabaddá és lefoglalhatóvá kell válnia mások számára.
* **BR-03:** A szolgáltatás (domain és statikus tárhely) a vállalkozások számára díjmentes. Emiatt a rendszernek szigorú tárhelykvótákat kell alkalmaznia, hogy elkerülhető legyen az állami erőforrásokkal való visszaélés.
* **BR-04:** Szolgáltatást csak olyan vállalkozás vehet igénybe, amely érvényes regisztrációval rendelkezik a Zamunda One rendszerben. Amennyiben egy vállalkozás megszűnik, a hozzá tartozó digitális szolgáltatások (domain, tárhely) felfüggesztésre kerülnek.
* **BR-05:** Üzleti döntés alapján a rendszer kizárólag statikus weboldalak kiszolgálását támogatja. Dinamikus tartalmak nem helyezhetők el a kormányzati infrastruktúrán.

---

## 6. Other Requirements
Nincsenek egyéb követelmények.

---

## Appendix A: Glossary
*(A dokumentumban nincs tartalom hozzárendelve)*

## Appendix B: Analysis Models
*(A dokumentumban nincs tartalom hozzárendelve)*

## Appendix C: To Be Determined List
*(A dokumentumban nincs tartalom hozzárendelve)*

---
> Copyright © 1999 by Karl E. Wiegers. Permission is granted to use, modify, and distribute this document.