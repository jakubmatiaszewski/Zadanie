1.Výber automatizačných nástrojov: Rozhodnite sa, ktoré nástroje budú použité na automatizáciu testov pre Android a iOS. Odporúča sa napríklad použitie Appium pre obe platformy. Zhodnotiť plusy a mínusy.

**Appium**

Plusy:
1.	openSource
2.	Vhodné pre iOS a Android aplikácie
4.	Integrácia s vývojovými prostrediami

Mínusy:
1.	Nastavenie: Nastavenie Appium môže byť náročn

**Appium Inspector**
Plusy:
1.	Presná identifikácia prvkov: Je navrhnutý na presné identifikovanie prvkov na obrazovke, čo zvyšuje spoľahlivosť testov.
2.	Integrácia s TypeScript: Je možné ho použiť v testovacích skriptoch napísaných v TypeScripte, čo môže pridať prínosy statického typovania.

Mínusy:
1.	Širšie použitie mimo Appium.

2.Inštalácia potrebných nástrojov:
Aké potrebné nástrojes bude nuté použiť pre testovanie Android a iOS aplikácií?
Pre testovanie Android aplikácií:
*Android Studio*
*Android SDK*

Pre testovanie iOS aplikácií:
*Xcode*
*iOS SDK*


Pre automatizáciu testov (pre oba systémy):
*Visual Studio Code*
*Node.js*
*Appium*
*Appium TypeScript bindings*
*WebDriverIO*



Po inštálácií daných nástrojov , treba nastaviť JAVA_HOME, ANDROID_HOME.
Pomocné príkazy pre prácu s Appium:
appium --port 4725 (spustenie servera na danom porte)
pkill -f appium (ukonči appium server)
appium-doctor --android/ios (vypíše či máme všetky potrebné dependencies pre testovanie)

Inštalácia WebdriverIO:
npm install webdriverio
npx wdio config

Pri Appium Selectore treba dávať pozor aby sme mali rovnaké cappabilities nastavané ako v configu.

PO zmene v dependencies treba vždy spustit npm install aby nainštalovalo všetko potrebné.


