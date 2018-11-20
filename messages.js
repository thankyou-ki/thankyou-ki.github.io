let messages = [
    "KuE8FQOKVQmNQMIZvImMQrNln40WEI1M4UqCo+NrCYvlkSXqgrwoOsADufSkneS8nMc7mSMQESDT5Apx41ixX5cBgf2NzlzK3noRy1XPZvWsnxAmanZL7raPcOQdwDdalKC1ellvQyDVt44MmOWkTwXrgl2u+a0qA6wSc1ZFqvQ=?ngmpbkxqlK3c9EfQ0mOVawj2G9iJq+CIHgDBHqMJRhIM0bj4c5BXMJbQ1kGaVZLu"
    ,"H3YcyPWx2Bi4uPzr3lUjZXQ1/cAe5hbuqK4EDyttPWXtUZ/lT4d34qRIUYWhR+MxBGK/V7TiGpfc2eO9v6wpeJ2mBI1gyXitqZHPkqNBNYujRDvC3Nv3DRFz+mpi1aIrXSFNEwBudS1kdqqyVgSPPfUfydJsuRYdPuI5BQ6cXRA=?HGGAqoEcN//+Go1x0uvd6iEDXdxK3CwMOMxei2qoKblZV6jUz06wQkeH1svHz2SAWVbsjmplxdWhBIMnYad7Bto+MH6Svdp4Iytgdap7CyUh/30OACszFta8mIdiG2ND7baZCKrdSNuzNRx0oRjvqGzDU9bdaxTCLkJbZAaBLJP5VVQ/xNqDD+aGR5iqujPsxJ7zaCfG795yPlWXXVOMAw=="
    ,"PIMCUEjMFyzH76uvOPURb3oooWNDoCos5c3UuFHiMbP3loqqGCTPt/MDbFyf4vbqj5dzXDkD74Cm3twa4dzbjINSwa44IN4rd1hRXsNXkeXsuRFe1OCldY8ecbGn0Hnfj3dLlHo43iqN1EHNzZQLjsVFhGrOQ309acAXO9k9jT4=?83YmrSm09ciESGZhRuZ/4ed6YEMAIjKi+Dq9PGrggmnUr67QII5kapRG388/xNDSSXLEFRTmVnyW2MeOkZQcs+Wrkxybp35t1rmnekfncEmI2C3iCnk7z6K+Jt5zM1xZ/RdJKyUADLmrTKuTZO0rSd2r9rPGmgq3k/rzhB10SVXVMGwrRJvYA+cSuJqACpRBTmzP5uFl3VfM131Oqk5oArERhaVG4ZUkNZ2O6J0PYBx/yy0xH2eTxB9iUATKW19i6lDLb62FagHmwy+9Oag0IHkioXuB7ZKjUS92HTtiMBzRzxfKxFI74Fz8drzpOIEU2hXR5NtgiMJb/qi5GJKCNNq1/HG3EERe2ij3x5o6kd6QSt37Y5RVYN8KO9CC4gKGJ+vJlqc469iQzxS0kvhfn2Hf93oWnK+tRaIFatpV6LIAimWGG36kfS1FVn+uPBeTxSTwYhqrEHIvznt/ixTt7+NfAVawRM3OJK8jeQ9iLfV98gHZVpTDkVqJgGCrvTqjmR9vaURUBxbY2Q2yz/dVcsh4zi4alCjyefwcms5MRAIH00Rlg+05bYPRW2gmvRj6"
    ,{message: "HGRVY6rSgoBHJD0xZ6GJPbTI7QIjxdqYYxjNpnu3reqmU/dM49WN90VJmhGTsWtQHnJtc7tFoX6Q3SNJw2GwSZVZZZ6giLvzUAKKmOpvDMliBoNU/wIsZFJXV2G2c94/xXt3p9WfXhUIWrKb61EFgAD+9LgKsnuUg2rK8NSeT9s=?ATXRkSERDDWVllbW3MIFak62WLf3UYO8rCnkUZCknxc=", style: {"background-image":"url(https://corec.jp/img/prelogin/logo.png)","width":"240px","height":"46px","backgroundColor": "#ffffff"}}
    // ここから上はテストデータなので、最後に消す
    // encrypt.htmlで生成した文字列を↓に貼り付けてください。
    ,"NSfqrhubW2ie6JkVagT8IbIDnDtzHhdpyhaiS0Alo9TKA8+qwVpCWvFIIvlFB1nlz4Cl8A5qbR48MYxOzXUMdi0xaJAqyBl+XoBfKTRY5TVsN0PrN/Kmk0bkJe5LG/kqUsx2r3vcfukQTjx9/99AGf+DJDK3stPL0JJDopVd1+A=?RLCfXu17cxWtClHiQCggbmPmzzkQnmrclXPGtxwUG9FmdMkCux6t3bMasx1ZXlRxkGsKTbQ+jNuf3kEH/xT1/7p2H4ufCYxXEFUsDTKf/gRXjDeX/2NIMm77cYJJny6E1WQx2Xb6Kr5pDU2D4nXFqvKioNXsw//Qt+s96vN3l0o3SBgB5Nan49wJxH6f+xLBp7hs71pIOXpqplzyovsJ9vpHm9g4UNyjBa3con6QzIG8PyK4xP6OGghbSdcziSa5mTzesMY0XdNappLE9HD12m3D3IVQSESbTRYRC9Jg4i8kIHYzVkT6gcPzEZsaDmFj"
    ,"KI/XJN66Fm4yDRNtB/2TdLAeso8Chy5hHLGsbSvRUf0jDf3+3y5Ns1ZSsTwwQ14XxWz1BBLn5sgAAWANX3gmQ7gRhCLU91GaRPLmu98PIZcjcmiLrtm4XHv3sDYoiW0ng0IO8IxatQpaF0JHSX0xs2UwsiFyC2BADPlkWc9Mil0=?dUmCF2CT4gy0EdJS0BgbCMnteCkt76mQEz+y/87SEQak+Ss1WLsMXuFkGic2WVAsSDlWMhwT2FR3eDC4H0IfghNXsoRxlwvPsn+JbESI52Qk0uwcViVnPM0ez/0HeoNxx1cOEduUZ6fcDDlw244xtFJ5Rx8kT+bxl0T7pdZipOtJJyZ0fJkr4nM1PWRIOuipyC6/w+7XmWMsYRTx3Jo7Lbbn1jLyLiNkYaAjR/pgeCg="
    ,{message: "LhIRwCI4Igj8vasyE2byAeAKHXKWyC0ATpVS2khDk1HQnFDg7sP9q0i57JQYU+xGH8cZ8Xi6WKN2+bIfDYWSws3txZz+RiLDw9hhUevq5+IehP+eVCifi4tlxYYwQc/GWQ88Qc9tqYw9BPMVG9AG8CcOD715PcDXPuYxktWEAk0=?MO+NIHeRt9uBf7bLvTeizMLdsZ7bvZGz8xBo+EJneZ6xY9ZZiVxP1Ci8JCdWBggHEAL6PUFORdQMroNyyAxPLQ==", style: {"backgroundColor": "#848484"}}
    ,"HJBb/3+X2EXz1O2tqiKtbuWDhIJquk/wZVQLK4kKuN7soAKHMTu6uxt8qmXGPeftp8lv7hyO5+u3UoQh6KhDnJM0bhXC7s8CUsI+ZkV/2LIwctU4FLVnqluq/x0z6/N6RmvxGtrg2kRmzFcLvrpCq+yCAr4JsxgHqvBqA1peMJo=?QiaaPQRAEGJRXb6zJedf5H+tVbeaHfg3EuXQ1FAvoC7qfcTLBADLozs7QhrRuLG1CwcQ8yILh+WvK8BsrnrWn//m/JXW4pXfTGy9e/F/K0DhGw4dB6UA3BK+3JJqt9p+ls8Y41nGQCCMX1BCrlP9swB1M/rrFS+pKjk1QPOUG1NFsRLraT1HAWJgegBdSMleVEQKq23+kh22JcDDeBnVoISwAvANh8RRMNCUfQFAVAjfkQISXom6wSsUAH52VjeHYDUdW6TW7bKcvpKNMqQ3bxxUXfXtSOLlSayx67m4hwU4Xic1g+T7esp2wCV0lXufFQGPbf7/PMct41oVrk7YM+5FqBDiDDvuyWOoDpBRAF6ZVZ1BQof0wv0voNSuvaBQqAmt5iBc2VgX+zF90edTAA=="
    ,"QY+Lghp3/bLnlyccvILtydGNCFCZyrcPJh9a68J7nHk0D0uIDJWTISaxh4nu2Lg6Lx+MHya3/qfEKD422MSSTBylpYMHYp6+eoIcZEoJrv3GXWxzTm4vkBpzXr7QqH2IXWd2URDjNI/vJjzPOF6kDA08rHvKA6iq4G6tEZQZ/jw=?nN0XzLVmlxrGD1m9UsSCIoLC+4pTKkHuRjWoAw58dIEjwsMTA0Br/DNE1pVagidXkl9TDT+KXjxcgOMWL5WT9O+wPzNpJ1ooXQ3E2ZkEotOCo2IIz6zrySXl0giivrcxRuV7pjNsUX8f3Hwtm/roq4vc3g96X5hTGEqoKxZRvqTclT9P5A1lUf0A8y7yF58SJcw+GyFisQXmD5+GfM3lDka/4j5OraJpdHCP977I/eCx6G0KJLchVJXjkXAwoJvMZWcVUvKnAycW4rUhEDJNYdjElNnG1JcjBq6Zza/IW8UMG0sRRLjOxrib2FY4B8zTNomxxjgS8ZfiFtTkuJwMT8Oe/fULLWRb2Z/mbPUm76Ay1oafLsuF0uvjgY2L3OiG"
    ,"GX0BozJXYLBnUqjOIUX3Ym2jGFxhZ6dMl8LHt7sawA0zMzNrlkm/G/xGOmnXNfg5RnMC3d3jfPoEK6FnSE2YY+G2j//tTGfeGcGzRWniR7uq2LVvq5FfsB8sHw7AWnKB/njVrpc6Y1P/GFRMx63HDixpN7KQxzLlLnFHP8uVcD4=?1BhICECN+YoQRCVyaoygpYK/5SINjeL53vzupejFHM0EOwJaHnnzMzswHI53IUi2anYmMTebzRom6s65mQ3wjGgOWGAqJpz3aim79vEheXAPqyfV4gc1NK3zRmyU/jJCNdohVezNzJq0GbmJgz/Y5jTQM+kckV/nDuQIJmKM5JiRkQNjbjiLA3GZLWNZFe6jdTZ5AOP2lHvLR0GjvIzZ/ucrW0uc4diQfVH+mRpDKu45cszGUgIHz/0IGfSDoNEEkYXxRaHV5WSDKrQ/RkZ/rE/dyJyG22lSNP7cU++PFXsbVxU5jEb/gpidQ39P0berfJjYEx/SNFzezeUaYi7sHj6J0WJqA98C5F5H3W0hPqRkYjPdWVp6NTp9gz4bO7iRq7y7XgM172iRitRY0DS/+gVWOEkfDRHfPah4acGi8yyMhgDwEBtNEr4RjC7tlYfaWmcj+DrxObhUxNOTIIevXncquuRwbC1CzL8e2M1RgU94Zf3l/vjReK1RFRbiXjTv4bRO7UXGkUx5T1cyVg2ce7AEf/QQf6KjtnZesIkvTc6rZP2qDQkJenhy95D+7sagLuPlr6OYofn9MxcEtpvTGHMC0/hH82iLrl6yf2h/NNBtLe6y+lZeHd512MfDmNZSPhe7QuF0S2u3t3+sCL+tBeLEXNDNtvywPh2rVAWNUhpseCDM/FbLxomniyQBtYRuUcZuqXq/oBERO141WtTksrHqm4XYHRS/ee/Z2LkKQi01VK1/SyMw6KwukkWSXByFBerJmo+N1VLPx/AXOojeP2CIB6mBbq7Ay9K0A+CrahTNLgqWT6fr7Yab0cNQqIW/scKXg5EQhdEhz80vptzpW40QdGCHI4Nh0REB8fMln17djaNzXAV48SlDBzhEVnqXFwCwLqh2SNI4/Em8g9LH0V8CQHxvS8KQHRx0pdN595egVq45JWYmpagpmSLVzo2iBTl1EjqQaiSDYm+6N7+coiwhg+VzowR6ah7os85o1b8TYPWBFuYlLTXTzEdf0r1LwPAy+OIDltuZMR+hQYOUu8UOXUqCzldveY/4oP3bxnQD2/5ZULWVPd6MaquwY0+kykOe4vfNkLVYqnOyQvUjFRrhg/KJnRvCyXL48udYYMDxMmUH/IFibZn7YBRfTgw+"
    ,{message: "MCicMocdzBoDpl9ed8ZDPTVdeVzoHgMGZApssbWHEutTvedrVMbgldC6i80smdVR6hXwaT9PJp4CB2xgqKz1GXX3ZMBKlaQk+MQ+dvVGy5dCMS23ZcHg1vFAlwtN0701hKFjA3Zavu2RRNmZ2jPwcGmJKxmVHKi36OCppj9Pqdw=?rRZuSso7j2F3XAFc7vWDmLuYIE4OV7zyjXAzVD2maJJ4/tE1onRq8XXRYa3d/ZTKH8TFowav5PH7vWN4XtdyhzCzeUqto4afB7/nwAiJtDFZSbwFNzTTemGIL2YrFYEbDuPj+x+MXpicIYSdxEU4lwxLdZwSWhGFxuCgk69ytT9y497nwjD8IZ0iI5H9IIG6AG0eYnCLl93U5QlpDmtA7xnZoaEFlVrmktkReIpv3rzy7ssU9xq1oahSBcd/Ot6V" , style: {"padding":"5px","text-align":"center","backgroundColor": "#99ff99","border-radius":"5px"}}
    ,{message: "LBqp5vJC7Oh/E41g9fjIpvJ7Xpt6QUIeEyWSeN3MIgAzGV2hSoD8qXlbli73dyQTYYfL0Jh9rVX7e9qyksy0Kcg4pCQqL2iE+YmjJsMgoXZE1QZHoJRBYPhahUI1/0I8KkbdWUYFJVAK6t3vJTHdmM0w1DmY8LL4hHc5OAjLjSg=?77I5/OIp3WEPOU6PONJcfRHdjKflqtVgXb5G15p4BSF5PalQtpWxigxK+R5UBPc6/5GYWRtk+SV8EFGksidwVaUU8oO8uffnP8Rbyy4SIsyhea+BepPpmE142SGrlr5zKWPpgrLkKw1P9zVxQ0mdQGH0uDUl4+uuNkhpKj7zmBmwMwnI8G4ccynCwIMrWd+fKSQVq/VW8Ok+rFVF1UEMDxWBrGubxnGuu03Lmyv/cRVSupQK5lnAMf/UBySOYj3aF8yAeRHwh//64zQiQDvt6DMBMzEXubY5+Z3tyNej0EUgsphKg51mkVHdd5FxE3VGDuT/R6auGZHVUp3joHH2r6D4ouXD+2HqF4kG8uN20iP0fpGdps7lijnrCeP0UfBBL1TCBrteQoenEVP3EXY4wlRpq2l3QLrN0IiY7N0pChxTGQFAHjLdC8ee3sNcLrk/MbWbA76jddNT56WNPrz/vWiZzmLbPanTOA+k610j6RfL9v/6Dq0uM7L5+cVTl5Uv", style: {"border-radius": "5px", "box-shadow": "0px 0px 6px 3px #098ad0 inset"}}
    ,{message: "RUcL9CliuvVXJAAAy+3ByOSPtNsu/ky4s/cCsly/7sWZXzVUPVW2uUIMNo+HAyhG27HSR8Jr3Vg+yqRJCqP3yv29vqx3t4c2KNYhTt9SrHjs3BIrR2XVyQGKboJ+z6DsaCf9oX6sOuQoCbShjUTETuIb3ryfBpUj2SPYaT8HvWg=?5drUqnUQGJoIACnSaE5YwD7lCuc7BuYP6UVzeWHbBQuQ+I2elAL6woF//o6PJVNdcqJZMwf/MvRmvvvUFjqhyjoBCTyv64MHVR0GQhYwEddXmz5/vI5AP5A4FgwqyFocZyKFim4EdqQuGvmJG6/6FO4ptiSIDtYQ9syBAVDPWr5IpBNf65506jjigFrY3djubDIB1P4oObYmNyPkX/DbRTMQ1FbYykflNdI2VAFK/nbPT7+OjBvTaVuqS7CYUFJlVVm/SOANLNzfJM6Kdvdxplh1UAZIRlZcMAyEtuwjQpTv6vzOxQuLJcvciI5mUzTy" , style: {"padding":"5px"}}
    ,{message: ,"Uf9LUOFSPGfcpRR/M2H0E62vKSBW+c35NVNuYTNAEWbUtt840R3orjvOJF//z/a31VRTdj/EEK9xUhnd6eygbEK46Svy1CJZ12XvsxdsjjDNIQFJVx96ivCcc31PZJgaZqMTyRGpu3Jlz2JlpqopEQAKvU/erJwSdA3d1AmhDrM=?J9C1nSgPjWe0WL6uAOIHfw1a9VXRd7CB7CgqzsXkOANRjqGjtmPmDbajOFXqPmrfe3agofQoCC+J9xg8jYeAZStXbvXmbVMCXyOh/CnNWYwwymihQfnLXBUd0JLKA2txgyjrFRJxtfplxVXYXQPlazKGSOzo27nblTTeV8LF30aMHB+nC2We7z/vqd9h9CpMEncsIdsx7NmC5SVtNZL1e1Y19zAC8UUMj8R33sU+o/33n1dVXJpqGGsEILLUjtbq+mWYWYDCeVmAl15m2JfeZ/fEIRP75W0eA1mgCrxAetN6gy/5R+2WwRZ7oLyKMXd9IBW/nmE4kXxCi+Uk6eFeynPZ3jaiuGsZojaQQqgTv+zApKGnk9TRTIdjBDjmrB+rz4C+vMjCZuppNT54uBahYv4PqWN0C68++DCkoBEBT+uI2TJ1mfTva++fQPd66YUEPUmGjJfEv3ce86BjCLeOKx5uXuqvJTwWmRszfFjXGwWAsHySqAkoWi1kw8bxoeMIkNvaEst1IAcEzshISQd43T5I7/xZkMKL3+ylVJFuec/KRanVxOo40bR6z/hHopdvknxI56PSTzOvrkPgdq3onwXPK6iUmEstUKM/DL5wVKw="}
]
