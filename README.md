# Mobweb házi, kollégiumi nyilvántartó

# API
- Előkészületek:
  - Az alábbi linkről letölthető a docker desktop (avagy linuxra csak maga a daemon) https://www.docker.com/get-started/
- Indítás:
   - Ha telepítve van és fut a docker daemon, akkor nyissunk a jelenlegi (/projekt_name/rest) könyvtárban egy parancssort (windowson a fájlkezelő search bar részéből töröljünk ki mindent és írjuk be, hogy "cmd")
   - Ha megnyílt a paranccsor, akkor adjuk ki a következő parancsot:<br> ```docker-compose up```
   - Várjunk egy keveset, amíg a docker daemon felépíti is elindítja a megfelelő containereket, ez után már fut is az API, indítsuk el az android alkalmazásunkat és használjuk :D
- Felmerülő hibák és megoldásaik:
  - Előfordulhat, hogy port conflict miatt az API nem tud elindulni, ebben az esetben vagy állítsuk le azt az alkalmazást, ami már figyel azon a porton 
  ```netstat -nao | findstr 3000``` windowson segít megtalálni, ki használja azt a portot, majd administrator parancssorból ```TASKKILL /F /PID <process id>``` paranccsal kézzel leállítható
  - Előfordulhat, hogy a db nevű container elindult, de az api nevű nem. Mivel alapvetően úgy működik, hogy az api csak akkor indul el, ha a db valami fix megadott időn belül elindul, így előfordulhat lasabb gépeken, hogy a db később indul, mint amennyit az api várni tud. Ekkor a ```docker start api``` paranccsal kézzel elindítható az api container. Hogy megbizonyosodjunk róla, hogy a db container fut, a ```docker ps``` parancsot adjuk ki, ha látjuk a db nevű containert, akkor jók vagyunk
  - Felmerülhet, hogy bár az API rendesen működik és az android programunk a megfelelő url-en próbálja elérni, valamiért mégsem működik. Főleg windowson előfordulhat, hogy a windows defender firewall megfogja a kéréseinket, mivel azok nem established vagy related tcp kérések. Erre megoldás lehet a windows defender firewall ideiglenes kikapcsolása, vagy új tűzfal szabály felvétele, hogy átengedjen minket. [https://www.milesweb.in/hosting-faqs/add-ip-address-windows-firewall/]