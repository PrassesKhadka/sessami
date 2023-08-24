interface ICard
{
    img:string,
    city:string,
    country:string,
    description:string,
}

const data:ICard[]=[
    {
        img:'https://s3-alpha-sig.figma.com/img/e2bf/6492/feaf8f013c22fb707b99ddf6be58eddd?Expires=1693785600&Signature=PtX433VHw8kzRu6~yQudTHsoPMKsWoBAzA25pjffLKc4noBsdtMtjcBoQl5cbds7VImHYKmh1ANq9Spl2RAMMywlQHgIe8M4SKJg9-0HDe1iD8ch7Unf22Sqf2wFRhtYqZNqA39eIpGco0b-Y2ctnYP3M~tdtZeKEPPT4Ht1ktdNWAwvj-RemHhSEGupjvknI9FfNxPCLL9X306ygghSDo~F1k4oUhjOc9Qjypo8dezvWAdcOht0XvR47r9ZAT-0o5k4S55BDDMceUJuMdiY9Xq-Ga4sJUouOEIutOzHzgFp3ft-5R157GnfN~qWX~aYA90uuOgeNMPhuFGe01mgug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        city:'Paris',
        country:'France',
        description:"Since the 17th century,Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.",
    },
    {
        img:'https://s3-alpha-sig.figma.com/img/7a3c/b59d/1a100ac62c63015b67b158e2dbf22707?Expires=1693785600&Signature=qHlUSDqc8eUDX3tMF-3Tzpg-y6a5n4ubkN~BxAV34Dcek3Q5lU6qIKIcWlbi-STWqRQuIYerHspYPz-DAMmeldwoCrC0hK0GupV6eYFK-9r8cssLHKzP2uTzCnDUGcZGXozoy~MnDTYNBu2uWX25l46nK4OoMKidBnyQCtiJRhxg0YBSvh3ffI9x4GLEU7l~lj-p7300b94Kh1t9BNF8xZLfODgnQG1-he9u136ZFVuJIsO4~lFNSMt4e6j14lyUCocJZakzR2wyioSNqCXlAqywZObyk15aGxtDGvYStsW4~AGVDyGOIZxE~W5kzoHYyRneZnYhwVXFHzEptUx53w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        city:'London',
        country:'United Kingdom',
        description:"When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts.",
    },
    {
        img:'https://s3-alpha-sig.figma.com/img/70b3/bb24/b646b7c401d730695ee39904e924f118?Expires=1693785600&Signature=f06BLmCxOJiIBh0JezSyDHWitmMpCA-VDqpNHQEUbFVSxDrDufgJSpqJ5T0IVF5T8W4JpsNCj4ajlOJ8TtZItsuY5c~-YD6CkLz~iTr8lH3GkIRA2BEI7A3xL5Hv5DBAFp1-79VPPSXrRwaEmn-McTneuhpJKAwfyQTiMz7n0gfaJIM~B4TI8D9gHDr39WV2tEoZgljmlhWSsi4j6DmFpb6Z-hb7l5YgVmFeqZi2GdgrY-FzxSXiQ9XjBCas29NTf2dOAcCvod2b8HpGyUinhHmyuNVcyWep2S5fj6pB2rsiz7IFv0dGcFO3sWXI7a5NZKfsW6PkMBDmv2fVJF8qUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        city:'Barcelona',
        country:'Spain',
        description:"Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
    },
    {
        img:'https://s3-alpha-sig.figma.com/img/6a72/a357/234c7e921fc26efd2700b39c4b260513?Expires=1693785600&Signature=CJ7vbprdR9c8rg~nZ6-fV9-aPJZLe3-A~DU-GnKwjKk1KyW5dtKd5RvQL1EJpI3adE-b-RpHVrPmYrj7~~q3vhF0~HnksTXdsEwHMvSlFldks2qM5j5xeXqfEoLQcsVbEW2xuuzN0PQqmqzSkW-kGrel55fSKxJxjOa1q9d4jlXThAooRqbJ606bmg-YQkEjgkmicI~da0PlReoFMyyoU07DEqnpAPzhRL9vaM0fRSsd1gcRHhjpK-l7FQ8YqYwLwh30Zq1am9FS8-o9s83jB-BG8lj4E2vxM5mF9lDoBkjWp0EBslS0KdOyd-FXYfv8~JjvHDJtqoXxgXkdKLhfkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        city:'Prague',
        country:'Czech Republic',
        description:"Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene.",
    },
]

export default data;