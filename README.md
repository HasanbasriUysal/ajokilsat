# Ajokilsat

Tämä on Expolla toteutettu so ellus ajokilometrien keräämiseen.
Projektin tarkoitus on harjoitella kännykkäsovelluksien ohjelmointia.
Expolla toteutettuna sovellus toimii Androidilla ja IOS:llä, mutta tähän mennessä sovellusta on testattu vain Androidilla.

## Tietomallit

### Trip(Matka) 

- `vehicle` - ajoneuvo, jolla matka tehtiin
- `odometerAtBegin` - matkamittarin lukema matkan alussa 
- `odometerAtEnd` - matkamittarin lukema matkan lopussa
- `timestampAtBegin` - aikaleima matkan alussa
- `timestampAtEnd` - aikaleima matkan lopussa
- `description` - matkan kuvaus
- `routeDescription` - reitin kuvaus (tyyliin: "Turku-Raisio-Turku")
- `track` - "jälki", johon tallennetaan matkan kulku
    * Lista GPS-koordinaateista ja aikaleimoista

### Vehicle (Ajoneuvo)

- `name` - nimi
- `registrationNumber` - rekisterinumero