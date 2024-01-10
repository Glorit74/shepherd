const menu = [
  { id: 1, label: "kihajtás, behajtás", active: true },
  { id: 2, label: "jelölés", active: false },
  { id: 3, label: "legeltetés", active: true },
  { id: 4, label: "juhfejés", active: false },
  { id: 5, label: "terelés", active: false },
  { id: 6, label: "juhnyírás", active: false },
  { id: 7, label: "sózás", active: false },
  { id: 8, label: "betörés", active: false },
  { id: 9, label: "gyógyítás", active: false },
  { id: 10, label: "takarmányozás", active: false },
  { id: 11, label: "etetés", active: false },
  { id: 12, label: "több, mint puli", active: true },
];

const COLORS = {
  white: "hsl(0deg 0% 100%)",
  buttonBg: "hsl(0 0% 10% / 0.2)",
  buttonBgHover: "hsl(0 0% 30% / 0.5)",
  primary: "hsl(240deg 80% 60%)",
  gray50: "hsl(0deg 0% 95%)",
  gray300: "hsl(0deg 0% 75%)",
  gray500: "hsl(0deg 0% 50%)",
  gray700: "hsl(0deg 0% 40%)",
  black: "hsl(0deg 0% 0%)",
  transparentGray15: "hsl(0deg 0% 50% / 0.15)",
  transparentGray35: "hsl(0deg 0% 50% / 0.35)",
};

const puliText = [
  {
    id: 0,
    name: "Kis Péter",
    story:
      " A pumi eredete, minden valószínűség szerint, csak valami százötven évre vezethető vissza, arra az időre, amikor Németországból sok nyugoti juhot importáltunk. Velük hozzánk kerültek a pásztoraik is s ezek nyugoti – német és franczia – eredetű terelőebei. Utóbbiak a már itt talált pulival kereszteződve, vetették meg alapját annak a megszilárdult jellegű terelőebnek, a mely a Dunántúlon a pumi nevet viseli. A pumi tehát nem azonos a pulival s így pulinak nem is nevezhetjük; de viszont, minthogy a pumin a pulivér kétségtelen nyomai uralkodnak, a pulitól nem különbözik oly mélyrehatóan, mint a hogy a magyar pásztorebfajták egymástól eltérnek s így azokkal, különösen a pulival szemben sem tarthatjuk egyenlő rangú fajtának, hanem csak a puli megszilárdult tájfajtának.",
  },
  {
    id: 1,
    name: "Tütő Gyula",
    story:
      "A következő igen nagy lépést az 1920. július 21-én megalakult MEOE Juhászkutya Szakosztály jelentette, amely kilenc jelentkezővel dr. Raitsits Emil elnöklete alatt indult. Ekkor állította össze Raitsits az első MEOE magyar pásztorkutya küllemleírásokat, ahol már — feltehetően a Lovassy-cikk hatására — a pumit mint a puli dunántúli tájfajtáját szeretett volna leírni. Ezek a standardok Orlay Ilona szerint (Kutya Magazin, 1969) már nyomtatásban is megjelentek egy Lychif álnév alatt publikáló író tollából, akiről a mai napig nem sikerült megállapítani, hogy kit is takar valójában.",
  },
  {
    id: 2,
    name: "Haló Péter",
    story:
      "Arra, hogy a pumi fajtaleírása mégis miért váratott magára, Raitsits későbbi, 1924-ben íródott magyarázatából lehet következtetni. Eszerint: «A pulik és pumik határozott tájfajtáit és igen különböző használhatóságukat az a standard nem fedheti, melyet az „A kutya” című könyv közvetlen megjelenése előtt, mint a „Magyar juhászkutyát tenyésztők” szakosztályának annak idején volt elnöke, most már részemről érthető okokból, sürgősen máról-holnapra, megfelelő szakértők kikérdezése nélkül, sürgősen tető alá kellett hoznom. A rövid őspuli standard nem a gyermekem, mert nem tisztán szerénységemnek alkotása, hanem a szakosztály többségének véleményét kellett határozattá emelnem s így nem csodálkozhatik a standarddal elégedetlenkedő, hogy a sok bába közül a gyermek elveszett.» (A magyar kutyák, 1924)",
  },
  {
    id: 3,
    name: "Kis Tivadar",
    story:
      "Az első kiállítás, amelyen pumi is megjelent, az 1921. május 15-16-i országos MEOE rendezvény volt. A fajtájából egyedüliként benevezett pumi a következő bírálatot kapta a magyar pásztorkutyákat bíráló Raitsitstól: «Magyar pumi. A dunántúli táj fajtának egyik jellemző képviselője 102. k. sz. Ficzkó, pumi kan jelent meg a kiállításon, tulajdonosa: Salamon Balázs (Budapest, IX., Űllői-út 102). A mozgékony, jó csontozatú és jó megjelenésű pumi a kezdő versenyben I. díjat nyert.» (a Kutya, 1921)",
  },
  {
    id: 4,
    name: "Nagy Bendegúz",
    story:
      "1922. tavaszán dr. Raitsits Emil kivált a MEOÉ-ből, saját indoklása szerint azért, mert a megmentés, a rekonstrukció és kitenyésztés alatt álló magyar pásztorkutyákkal kapcsolatos törekvései nem egyeztek a MEOE vezetésének elképzeléseivel. Ilosvai a politikai és financiális hatalom képviselőinek érdekeit tartotta szem előtt, akik akkoriban kitenyésztett külföldi fajtákat tartottak, s nem a még keverék magyar pásztorkutyákat. Raitsits ezzel szemben a magyar pásztorkutyák összegyűjtésében látta a fő feladatot (egyelőre minőségre való tekintet nélkül), hogy a keverékekből ki lehessen tenyészteni a fajtákat. Az ilyen kutyák gazdái azonban, nem meglepő módon, nem feltétlenül voltak tehetősek. Nézeteinek hangot is adott A természet 1923-as számában: «Bírálataimat az előrehaladás szelleme irányította és a vaskalaposságot félretéve a kisebb termetű magyar juhászkutyákat a következő csoportokba osztályoztam: I. őspuli, II. Luxuspuli, III. Törpepuli, IV. Pumi, V. Törpepumi. Az őspuli csoportba mindazokat a pulikat sorolom, mellyek a tulajdonképpeni magyar puli fajtajellegét hordják magukon.»",
  },
  {
    id: 5,
    name: "Soós János",
    story:
      "Ezek következtében történt meg, hogy 1923-ban Raitsits megalakította a Magyar Kutyafajták Törzskönyvét (MKT), amely — mivel egyben kinológiai szervezetként is működött — a MEOE konkurensévé vált. Ez az a pont, ahol kétfelé válik a magyar pásztorkutyák tenyésztése. Raitsits az Állatorvosi Főiskolán vezette a Polyklinikai Törzskönyvet is (nem csak magyar fajták számára), valamint a főiskolán tudományos ismeretterjesztéssel és állatorvosi kinológiával kapcsolatosan kiállításokat is szervezett. 1923. augusztus 19-20-én rendezte meg az első MKT kiállítást, amelyen a MEOÉ-nél kiállított MET jelű törzskönyvvel rendelkező magyar pásztorkutyák is részt vehettek. Raitsits a rendezvényeken bevezette az MKT jelű törzskönyvbe az ezeken megjelent kutyákat is. Rövid időn belül a mérleg nyelve már az MKT-s kiállítások és az MKT törzskönyvezés felé billent.",
  },
  {
    id: 6,
    name: "Ismeretlen",
    story:
      "A MEOÉ-ben 1924. május 20-án megalakult a Komondor Egylet, mely a MEOE Juhászkutya Tenyésztők Szakosztályának munkáját folytatta, és az összes magyar pásztorkutya gondozása lett a feladata. Ügyvezető alelnöke Gegus Dániel lett (a Kutya, 1924). A Magyar Ebtenyésztők Országos Egyesülete és a Komondor Egylet megállapította a magyar juhászkutyák fajtajellegeit, és az első hivatalos MEOE pumi standard — a többi magyar kutya standardjaival együtt — 1928-ban meg is jelent a még Ilosvai Lajos Károly néven publikáló MEOE titkárának A kutya című könyv második kiadásában.",
  },
  {
    id: 7,
    name: "No Name",
    story:
      "Az MKT-ben az első fajtaleírások Raitsits 1924-ben megjelent, a magyar pásztorkutyákról szóló könyvében kerültek nyomtatásba, és ezek voltak érvényben egészen 1935-ig, amikor az MKT elfogadta a dr. Abonyi Lajos, dr. Anghi Csaba Geyza és dr. Müller Iván által összeállított első tudományos standardokat. Raitsits nagy vívmánya, hogy a korábban már említett A magyar kutyák című könyvében (Centrum, Budapest, 1924) végérvényesen megszüntette a komondor-kuvasz, illetve a puli-pumi elnevezések körül uralkodó zűrzavart. A pumit a pulitól kifejezetten elkülöníthető típusjegyekkel írta le, és elsőként mutatott rá a puli és a pumi jellembeli különbségeire, a pumi terrieres vonásaira. E könyv hátsó hirdetési oldalán jelent meg a következő közlemény is: «A komondor, puli, pumi és kuvasz tenyésztésének tudományos nézőpontból való irányítását és ingyenes törzskönyvezését elvállalta a m. kir. Állatorvosi főiskola poliklinikája (VII., István út 2).»",
  },
];

export { menu, COLORS, puliText };
