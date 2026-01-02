// You can edit/add items here later.
window.MENU = [
  {
    id: "sise-bira",
    titleTR: "Şişe Bira",
    titleEN: "Bottled Beer",
    items: [
      { name: "Belfast", size: "50cl", price: 285 },
      { name: "Budweiser", size: "33cl", price: 390 },
      { name: "Bomonti Filtresiz", size: "50cl", price: 290 },
      { name: "Duvel", size: "33cl", price: 575 },
      { name: "Efes Pilsen", size: "33cl", price: 220 },
      { name: "Efes Green", size: "50cl", price: 285 },
      { name: "Efes Malt", size: "50cl", price: 260 },
      { name: "Gara Guzu Summer IPA", size: "33cl", price: 410 },
      { name: "Erdinger", size: "33cl", price: 380 },
      { name: "Efes Glutensiz", size: "50cl", price: 310 },
      { name: "Gara Guzu Blonde Ale", size: "33cl", price: 410 },
      { name: "Gara Guzu Amber Ale", size: "33cl", price: 410 },
      { name: "Gara Guzu IPA 4C", size: "33cl", price: 410 },
      { name: "Gara Guzu Red Ale", size: "33cl", price: 410 },
      { name: "Gara Guzu Porter", size: "33cl", price: 410 },
      { name: "Gara Guzu Karlı Kayın Ormanı", size: "33cl", price: 410 },
      { name: "Gara Guzu Mayhoş", size: "33cl", price: 410 },
      { name: "Gara Guzu Weiss Bier", size: "33cl", price: 410 },
      { name: "Bagaj Degaj Bon Voyaj", size: "33cl", price: 400 },
      { name: "Hoegaarden", size: "33cl", price: 390 },
      { name: "Heineken", size: "33cl", price: 340 },
      { name: "Das Dies'ale", size: "33cl", price: 390 },
      { name: "Kubau Pale Ale", price: 400 },
      { name: "Kubau More Than Gold IPA", price: 400 },
      { name: "Strongbow (Apple cider)", size: "33cl", price: 450 },
      { name: "Asante Brewery Cold IPA", price: 400 },
      { name: "Asante Brewery New Zealand Pilsner", price: 400 },
      { name: "Asante Brewery Vienna Lager", price: 400, available: false },
      { name: "Stella Artois", size: "44cl", price: 275 },
      { name: "Paulener Salvator", price: 420 },
    ]
  },

  {
    id: "penny-signature",
    titleTR: "Penny Signature",
    titleEN: "Signature Cocktails",
    items: [
      { name: "Strawberry Collins", price: 580, desc: "Malfy cin, çilek, soda, nane" },
      { name: "London Refresher", price: 580, desc: "Malfy cin, salatalık, fesleğen, taze sıkılmış limon suyu, ev yapımı şeker şurubu" },
      { name: "Chopper", price: 580, available: false, desc: "Çilek veya karpuz, fesleğen, limon suyu, Absolut votka" },
      { name: "Berry B. Goode", price: 580, desc: "Wiser's Canadian whiskey, Jameson Black Barrel, böğürtlen, limon, nane, aquafaba" },
      { name: "Southside Sour", price: 700, desc: "Hendrick's cin, taze sıkılmış lime suyu, aquafaba, ev yapımı şeker şurubu, nane" },
      { name: "Smells Like Tropic Spirit", price: 580, desc: "Olmeca Altos, Malibu, Reyhan, taze sıkılmış limon suyu, ev yapımı şeker şurubu, aquafaba" },
      { name: "Green Child O'Mine", price: 580, available: false, desc: "Chivas Regal Extra Smoky, Garrone Triple Sec, taze sıkılmış nar suyu, taze sıkılmış limon suyu, ev yapımı şeker şurubu, fesleğen kreması" },
    ]
  },

  {
    id: "doyuranlar",
    titleTR: "Doyuranlar",
    titleEN: "Mains",
    items: [
      { name: "Penny Burger", price: 520, desc: "Ev yapımı burger ekmeğine 150gr burger köftesi, karamelize soğan, burger sos, cheddar sos, domates, göbek marul ve bravas ile" },
      { name: "Jameson Burger", price: 550, desc: "Ev yapımı tereyağlı burger ekmeğine 150gr katkısız burger köftesi, ızgara füme et, karamelize soğan, viski sos, alman turşusu, domates, göbek marul ve bravas ile" },
      { name: "Fish & Chips", price: 550, desc: "Mezgit, salsa ve tartar sos, roka, lahana turşusu ve patates bravas ile" },
      { name: "Zerdeçallı Tavuk", price: 450, desc: "Zerdeçal ve bal ile marine edilmiş tavuk göğsü, patates püresi ve mevsim salata ile" },
      { name: "Kasap Köfte", price: 500, desc: "Acı sos, kahvaltılık patates kızartması, turşu, ızgara biber ve domates ile" },
      { name: "Baharatlı Sosis", price: 550, desc: "Burger sos, cheddar, karamelize soğan ve bravas ile" },
      { name: "Sloppy Joe", price: 450, desc: "İzci burger" },
    ]
  },

  {
    id: "elle-ye",
    titleTR: "Elle Ye!",
    titleEN: "Handheld",
    items: [
      { name: "Cheese Steak Sandwich", price: 520, desc: "Sebze ile sotelenmiş dana eti, cheddar sos ve bravas ile" },
      { name: "Dana Etli Burrito", price: 500, desc: "Dana eti, sebze, iceberg, cheddar sos ve bravas ile" },
      { name: "Tavuk Sandviç", price: 450, desc: "Izgara tavuk göğüs, karamelize soğan, göbek marul ve bravas ile" },
      { name: "Çıtır Tavuk", price: 400, desc: "Panelenmiş tavuk, tartar ve salsa sos ile" },
    ]
  },

  {
    id: "makarnalar",
    titleTR: "Makarnalar",
    titleEN: "Pasta & Noodles",
    items: [
      { name: "Pad Thai Sebzeli", price: 500, desc: "Uzak doğu usulü pirinç eriştesi, lahana, havuç, taze soğan, soya filizi, soya sosu ve oyster sos ile" },
      { name: "Pad Thai Tavuklu", price: 550, desc: "Uzak doğu usulü pirinç eriştesi, lahana, havuç, taze soğan, soya filizi, tavuk, soya sosu ve oyster sos ile" },
      { name: "Penne Arabiata", price: 400, desc: "Acılı domates sos, dilim zeytin ve parmesan ile" },
      { name: "Fettucini Alfredo", price: 475, desc: "Tavuk, mantar, fesleğen, parmesan peyniri ve beyaz şaraplı kremalı sos ile" },
      { name: "Pad Thai Karidesli", price: 600, desc: "Uzak doğu usulü pirinç eriştesi, lahana, havuç, taze soğan, soya filizi, karides, soya sosu ve oyster sos ile" },
    ]
  },

  {
    id: "salatalar",
    titleTR: "Salatalar",
    titleEN: "Salads",
    items: [
      { name: "Sezar Salata", price: 350, desc: "Tavuk bonfile, iceberg, parmesan, kruton ekmek, sezar sos ile" },
      { name: "Etli Salata", price: 480, desc: "Maskolin, kuru domates, kruton ekmek, parmesan, kremalı ve hardal soslu kontrfile et, vinaigrette sos ile" },
      { name: "Roka Salatası", price: 320, available: false, desc: "Roka, ceviz, nar, köz kapya, çeri domates, nar ekşisi ve zeytinyağı ile" },
      { name: "Tahıl Salata", price: 400, desc: "Börülce, nohut, yarma, firik bulgur, maş fasulyesi, domates, taze baharatlar, nar ekşisi ve zeytinyağı ile" },
    ]
  },

  {
    id: "tapas",
    titleTR: "Tapas",
    titleEN: "Tapas",
    items: [
      { name: "Humus Vegan", price: 320, available: false, desc: "Domates, turşu, zeytinyağı ve ev yapımı tortilla chips ile" },
      { name: "Patates Bravas Sloppy", price: 280 },
      { name: "Patates Bravas Sade", price: 250 },
      { name: "Patates Bravas Cheddar", price: 280 },
      { name: "Patates Bravas Parmesan", price: 280 },
      { name: "Junior Bravas Cheddar", price: 230 },
      { name: "Junior Bravas Sade", price: 200 },
      { name: "Junior Bravas Sloppy", price: 250 },
      { name: "Humus Roll (isteğe göre vegan)", price: 380, available: false, desc: "Tortillaya sarılı humus, turşu, domates. Üzerine füme kaburga ve roka ile" },
      { name: "Junior Bravas Parmesan", price: 230 },
      { name: "Peynir Tabağı", price: 550, desc: "Gouda, Edam, Kars Gravyer ve İsli Çerkes Peyniri" },
      { name: "Nachos Cheddar", price: 250 },
      { name: "Mücver", price: 350, desc: "Roka, parmesan peyniri ve bravas sos ile (Mevsime göre balkabağından yapıyoruz.)" },
      { name: "Nachos Sloppy", price: 250 },
      { name: "Nachos Sade", price: 200, desc: "Salsa sos ve tartar sos ile servis ediyoruz" },
      { name: "Ekstra Cheddar", price: 50 },
      { name: "Zeytin Tabağı", price: 200, desc: "3 çeşit karışık zeytin" },
      { name: "Tapas Bar", price: 50, desc: "Pintxos seçin (Peçetenizi unutmayın 😅). 2- Pintxos’larınızı alın. 3- Afiyetle yiyin. 4- Kürdanlarınızı atmayın. 5- Biz gelip kürdanlarınızı sayalım. (Her kürdan 50₺)" },
    ]
  },

  {
    id: "surahi",
    titleTR: "Sürahi",
    titleEN: "Pitcher",
    items: [
      { name: "Sangria", price: 1400 },
      { name: "London Refresher", price: 1750 },
    ]
  },

  {
    id: "gin-tonik",
    titleTR: "Cin & Tonik / Soda",
    titleEN: "Gin & Tonic / Soda",
    items: [
      { name: "Malfy Gin & Tonic", price: 450, desc: "Tonik yerine soda ile de hazırlayabiliriz." },
      { name: "Hendrick's Gin & Tonic", price: 600, desc: "Tonik yerine soda ile de hazırlayabiliriz." },
    ]
  },

  {
    id: "viski",
    titleTR: "Viski",
    titleEN: "Whisky",
    items: [
      { name: "Aberlour 12yo", tags: ["Speyside Single Malt Scotch"], price: 570 },
      { name: "Aberlour 14yo", tags: ["Speyside Single Malt Scotch"], price: 750 },
      { name: "Aberlour 18yo", tags: ["Speyside Single Malt Scotch"], price: 1500 },
      { name: "Ballantines Bourbon Finish", price: 280 },
    ]
  },
];
