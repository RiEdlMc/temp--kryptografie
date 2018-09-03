
    NIST (+ NSA ?)

    - DES    (x)
    - 3DES   (x)

    - (Blowfish)
    - (Rijndael)

    - AES-128-ECB (16 Bytes)    (x)
    - AES-128-CBC (16 Bytes)    (x)
    - AES-192-ECB (24 Bytes)    (x)
    - AES-192-CBC (24 Bytes)    (x)
    - AES-256-ECB (32 Bytes)    (x)
    - AES-256-CBC (32 Bytes)    (+)


     ECB (Electronic Code Book)  (x)

     0011 0101 0100 0111 0111 1011 0001 0101
                                             encrypt
     0100 0110 1000 1001 1001 1110 0111 0110
                                             decrypt
     0011 0101 0100 0111 0111 1011 0001 0101


     CBC (Cipher Block Chaining)  (+)

     0011 0101 0100 0111 0111 1011 0001 0101
1101 0011 0101 0100 0111 0111 1011 0001 0101 IV (Initialization Vector)
                                             encrypt
     1110 1010 1001 1011 1001 ...            - XOR
     1111 1101 1100 1110 1100 ...
                                             decrypt
     1111 1101 1100 1110 1100 ...
1101 1111 1101 1100 1110 1100 ...            IV
                         1001              
                         0111                - XOR



XOR
 0 ^ 0 => 0
 0 ^ 1 => 1
 1 ^ 0 => 1
 1 ^ 1 => 0

0 ^ 0 ^ 0 => 0
0 ^ 1 ^ 1 => 0
1 ^ 0 ^ 0 => 1
1 ^ 1 ^ 1 => 1



    1101 0011 0100 1(000 0111)   Padding
    1101 0011 0100 (0000 1111)   Padding (eigtl nicht notwendig)
