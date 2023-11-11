1.Výber automatizačných nástrojov: Rozhodnite sa, ktoré nástroje budú použité na automatizáciu testov pre Android a iOS. Odporúča sa napríklad použitie Appium pre obe platformy. Zhodnotiť plusy a mínusy.

Appium:

Plusy:
1.	Otvorený zdroj: Appium je otvorený a bezplatný nástroj, čo znamená, že je dostupný bez nákladov na licencie.
2.	Jednotné rozhranie: Poskytuje jednotné rozhranie pre testovanie na rôznych mobilných platformách, vrátane Androidu a iOS.
3.	Podpora rôznych jazykov: Podporuje viacero programovacích jazykov, vrátane Java, Python, JavaScript, čo umožňuje vývojárom pracovať s preferovaným jazykom.
4.	Integrácia s vývojovými prostrediami: Integruje sa do populárnych vývojových prostredí, čo zjednodušuje vývoj a spúšťanie testov.


Mínusy:
1.	Nastavenie: Nastavenie Appium môže byť náročnejšie v porovnaní s niektorými inými nástrojmi, najmä pre začiatočníkov.
2.	Dokumentácia: Dokumentácia niekedy nemusí byť úplne jasná a používateľsky prívetivá.

Appium Inspector:

Plusy:
1.	Presná identifikácia prvkov: Je navrhnutý na presné identifikovanie prvkov na obrazovke, čo zvyšuje spoľahlivosť testov.
2.	Integrácia s TypeScript: Je možné ho použiť v testovacích skriptoch napísaných v TypeScripte, čo môže pridať prínosy statického typovania a inteligentného autokompletného systému do vývoja testov.

Mínusy:
1.	Zameranie len na Appium: Je špecializovaný len na Appium, takže nie je univerzálnym nástrojom a je nutné ho kombinovať s Appium pre plnú funkcionalitu.
2.	Širšie použitie mimo Appium: Jeho význam je obmedzený na testovacie skripty napísané v TypeScripte pre Appium, čo obmedzuje jeho širšie použitie.

2.Inštalácia potrebných nástrojov:
Aké potrebné nástrojes bude nuté použiť pre testovanie Android a iOS aplikácií?
Pre testovanie Android aplikácií:
1.	Android Studio:
•	Inštalácia Android Studio poskytne kompletné vývojové prostredie pre vytváranie, spúšťanie a testovanie Android aplikácií. Okrem toho obsahuje Android Emulator pre emulovanie rôznych Android zariadení.
2.	Android SDK:
•	Android Software Development Kit (SDK) obsahuje nástroje a knižnice potrebné na vývoj a testovanie Android aplikácií. Android Studio automaticky inštaluje SDK, ale je tiež možné inštalovať ho samostatne.
Pre testovanie iOS aplikácií:
1.	Xcode:
•	Pre vývoj a testovanie iOS aplikácií je nevyhnutné nainštalovať Xcode, vývojové prostredie od spoločnosti Apple. Xcode obsahuje simulátory pre rôzne modely iPhone a iPad, ktoré umožňujú testovanie aplikácií bez potreby fyzického zariadenia.
2.	iOS SDK:
•	SDK pre iOS obsahuje nástroje a knižnice nevyhnutné na vývoj iOS aplikácií. Väčšina potrebných nástrojov pre testovanie je súčasťou Xcode.

Pre automatizáciu testov (pre oba systémy):
1.	Visual Studio Code:
•	Inštalujte Visual Studio Code (VS Code), ktorý je ľahko použiteľné integrované vývojové prostredie (IDE) od spoločnosti Microsoft.
2.	Node.js:
•	Inštalujte Node.js, pretože Appium je napísaný v jazyku JavaScript a využíva Node.js. Môžete ho stiahnuť z oficiálnej stránky Node.js a nainštalovať podľa pokynov pre váš operačný systém.
3.	Appium:
•	Inštalujte Appium pomocou príkazu npm (Node.js Package Manager), ktorý sa inštaluje spolu s Node.js. Príkaz na inštaláciu Appium vyzerá takto
npm install -g appium 


4.	Appium Server:
•	Spustite Appium Server príkazom appium -p **** (záleží od portu na ktorom ho chcete spustiť. v termináli)Tento server bude poskytovať rozhranie pre interakciu so skriptami a mobilnými zariadeniami.
5.	Appium TypeScript bindings:
•	Nainštalujte TypeScript a Appium TypeScript bindings pre prácu s TypeScriptom v Appium. Príkaz na inštaláciu Appium TypeScript bindings vyzerá takto:
npm install -g appium-webdriverio-ts .
6.	WebDriverIO:
WebDriverIO môže byť použitý ako testovací framework. Nainštalujte ho pomocou      príkazu:     npm install -g webdriverio .
Po inštálácií daných nástrojov treba ešte nastaviť cesty pre ANROID_HOME a JAVA_HOME a spustiť v príkazom riadku dané príkazy a skontrolovať či máme všetky potrebné závistlosti.






