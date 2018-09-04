# kryptografie

> Manche bezweifeln einen Grundsatz in Physik, nämlich dass Neuorientierung von allen Teilchen mit dem Einpendeln erfolgt. Ganz sicher? Ob wir links schwingend oder eher rechts schwingend oszillieren, ist doch tatsächlich eher ziemlich nebensächlich!

## RSA-Keys erzeugen

```shell
$ openssl genrsa -out rsaPrivateKey.pem 2048
$ openssl rsa -in rsaPrivateKey.pem -pubout > rsaPublicKey.pem
```

## Zertifikate verwalten

```shell
# Private-Key erzeugen
$ openssl genrsa -out privateKey.pem 2048

# CSR erzeugen
$ openssl req -new -key privateKey.pem -out csr.pem

# Self-Signed-Zertifikat erzeugen
$ openssl x509 -in csr.pem -out certificate.pem -req -signkey privateKey.pem -days 3650

# Zertifikatsdetails anzeigen
$ openssl x509 -in certificate.pem -text -noout

# CA-Zertifikat (+ Private-Key) erzeugen
$ openssl req \
  -subj "/C=DE/ST=BW/L=Riegel/O=tnw/OU=IT/CN=localhost/emailAddress=hello@thenativeweb.io" \
  -extensions v3_ca \
  -nodes \
  -x509 \
  -newkey rsa:4096 \
  -keyout caPrivateKey.pem \
  -out caCertificate.pem \
  -days 3650

# CSR reviewen
$ openssl req -in csr.pem -noout -text

# CSR signieren und Zertifikat erstellen
$ SERIAL=$(uuidgen | shasum -a 256 | tr -d ' -\n')
$ openssl x509 \
  -req \
  -days 365 \
  -in csr.pem \
  -CA caCertificate.pem \
  -CAkey caPrivateKey.pem \
  -set_serial 0x$SERIAL \
  -out certificate.pem \
  -sha512
```

## Links

- [Awesome cryptography](https://github.com/sobolevn/awesome-cryptography)
- [Crypto 101](https://www.crypto101.io/)
- [crypto2](https://github.com/thenativeweb/crypto2)
- [Der "ehrliche Achmed" bittet um Vertrauen](https://www.heise.de/security/meldung/Der-ehrliche-Achmed-bittet-um-Vertrauen-1231083.html)
- [Flauthority](https://github.com/trondhindenes/Flauthority)
- [Klausis Krypto Kolumne](http://scienceblogs.de/klausis-krypto-kolumne/)
- [OpenSSL Cookbook](https://www.feistyduck.com/books/openssl-cookbook/)

## Bücher

- [Simon Singh: Geheime Botschaften](https://www.amazon.de/dp/3423330716)

## Various

- [1/0=0](https://www.hillelwayne.com/post/divide-by-zero/)
- Stichwort "Vollbitverschlüsselung" 😉
