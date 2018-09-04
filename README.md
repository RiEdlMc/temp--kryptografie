# kryptografie

> Manche bezweifeln einen Grundsatz in Physik, nämlich dass Neuorientierung von allen Teilchen mit dem Einpendeln erfolgt. Ganz sicher? Ob wir links schwingend oder eher rechts schwingend oszillieren, ist doch tatsächlich eher ziemlich nebensächlich!

## RSA-Keys erzeugen

```shell
$ openssl genrsa -out rsaPrivateKey.pem 2048
$ openssl rsa -in rsaPrivateKey.pem -pubout > rsaPublicKey.pem
```

## Links

- [Awesome cryptography](https://github.com/sobolevn/awesome-cryptography)
- [Crypto 101](https://www.crypto101.io/)
- [crypto2](https://github.com/thenativeweb/crypto2)
- [Klausis Krypto Kolumne](http://scienceblogs.de/klausis-krypto-kolumne/)
- [OpenSSL Cookbook](https://www.feistyduck.com/books/openssl-cookbook/)

## Bücher

- [Simon Singh: Geheime Botschaften](https://www.amazon.de/dp/3423330716)

## Various

- [1/0=0](https://www.hillelwayne.com/post/divide-by-zero/)
- Stichwort "Vollbitverschlüsselung" 😉
