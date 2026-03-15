# Architekturális stílus

A projekthez választott architekturális stílusok az alábbiak:
- Service-based architecture.
- Event-driven architecture.

## Miért két stílus?

A Zamunda Digitális Reneszánsz (ZDR) rendszer funkcionálisan és műszakilag két jól elkülöníthető részre osztható, amelyek eltérő minőségi elvárásokkal (ASR-ekkel) rendelkeznek:

- Üzleti adminisztrációs és domain kezelő rendszer: Stabil, következetes tranzakciókat igénylő modulok.

- Tartalompublikációs és fájlfeldolgozó rendszer: Nagy mennyiségű adatot aszinkron módon kezelő modulok.

Annak érdekében, hogy a rendszer egyszerre legyen megbízható és képes legyen kezelni a zamundai hálózati anomáliákat, elviseljük a hibrid megoldásból fakadó:

- magasabb fejlesztési komplexitást,

- az elosztott rendszerek nehezebb hibakeresését (debugging),

- az üzenetküldő sorok (message broker) extra üzemeltetési költségét.

## Miért EDA?

### Illeszkedés

A weboldalak publikálása és a fájlok (HTML, média) feldolgozása során a responzivitás és a hibatűrés (fault-tolerance) a legfontosabb szempont, főként a problémás helyi internetlefedettség miatt:

- **Hálózati szakadások kezelése:** Az aszinkronitás miatt a feltöltés után a rendszer azonnal válaszol, a tényleges publikálást pedig eseményvezérelten végzi el. Ha a kapcsolat megszakad a tárhellyel, az esemény sorban marad, és a hálózat helyreállásakor automatikusan folytatódik.

- **Skálázhatóság:** A tartalomterítés (CDN frissítés) erőforrásigényes; az EDA lehetővé teszi, hogy a rendszer dinamikusan kezelje a hirtelen megugró feltöltési számokat.

- **Laza csatolás:** Új publikációs csatornák (pl. GitHub Webhook, API) hozzáadása nem igényel módosítást a központi magban.

### Kompromisszumok

- **Esetleges konzisztencia (Eventual consistency):** A változtatások nem jelennek meg azonnal minden szerveren, ami rövid idejű eltérést okozhat a feltöltött és a publikált tartalom között.

- **Bonyolultabb tesztelés:** Az események sorrendisége és az időzítések miatt a tesztelési folyamat komplexebb és időigényesebb.

## Miért Service-based?

### Illeszkedés

A domain-igénylés és a vállalkozói adatok kezelése során nincsenek extrém terhelési igények, így itt a költséghatékonyság és a megbízhatóság az elsődleges:

- **Kiszámítható költségek:** A szolgáltatásalapú megközelítés alacsonyabb infrastruktúra-költséggel jár, mint a mikroszolgáltatások, ami kulcsfontosságú egy állami költségvetésű projektnél.

- **Tisztább felelősségi körök:** A modulok (Domain Service, Auth Service) elkülönítve fejlődhetnek, de közös adatbázist használhatnak a tranzakcionális integritás megőrzése érdekében.

- **Karbantarthatóság:** Megfelelő egyensúlyt teremt az egyszerű monolit és a túl bonyolult mikroszolgáltatások között.

### Kompromisszumok

- **Hálózatfüggőség:** A szolgáltatások közötti közvetlen kommunikáció lassabb lehet, ha az egyes komponensek távol kerülnek egymástól.
