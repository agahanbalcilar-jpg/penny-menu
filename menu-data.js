// You can edit/add items here later.
window.MENU = [
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
      { name: "Tapas Bar", price: 50, desc: "1- Tabağınızı seçin (Peçetenizi unutmayın 😅). 2- Pintxos’larınızı alın. 3- Afiyetle yiyin. 4- Kürdanlarınızı atmayın. 5- Biz gelip kürdanlarınızı sayalım. (Her kürdan 50₺)" },
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

      { name: "Chivas 12yo", tags: ["Blended Scotch"], price: 340 },
      { name: "Chivas 15yo", tags: ["Blended Scotch"], price: 540 },
      { name: "Chivas 18yo", tags: ["Blended Scotch"], price: 715 },
      { name: "Monkey Shoulder", tags: ["Blended Scotch"], price: 375 },
      { name: "Chivas Extra Smoky", tags: ["Blended Scotch"], price: 360 },
      { name: "Chivas Extra Sherry", tags: ["Blended Scotch"], price: 400 },

      { name: "The Glenlivet Founders Reserve", tags: ["Single Malt Scotch"], price: 400 },
      { name: "The Glenlivet 12", tags: ["Single Malt Scotch"], price: 500 },
      { name: "The Glenlivet 15", tags: ["Single Malt Scotch"], price: 800 },
      { name: "The Glenlivet 18", tags: ["Single Malt Scotch"], price: 1000 },

      { name: "Jameson IPA Edition", tags: ["Irish"], price: 300 },
      { name: "Jameson Black Barrel", tags: ["Irish"], price: 360 },
      { name: "Jameson", tags: ["Irish"], price: 300 },
      { name: "Jameson Stout Edition", tags: ["Irish"], price: 300 },

      { name: "Glenfiddich 15", tags: ["Single Malt Scotch"], price: 875 },
      { name: "Glenfiddich Fire & Cane", tags: ["Single Malt Scotch"], price: 1000 },
      { name: "The Balvenie 12yo", tags: ["Single Malt Scotch"], price: 1000 },

      { name: "Macallan 12", tags: ["Highland Single Malt"], price: 1000 },

      { name: "JP Wiser's", tags: ["Canadian Whiskey"], price: 260 },
      { name: "LOT 40", tags: ["RYE Whiskey"], price: 455 },
      { name: "Pike Creek", tags: ["Canadian Whiskey"], price: 300 },

      { name: "The Chita", tags: ["Single Malt Scotch"], price: 875 },

      { name: "The Deacon", tags: ["Blended Scotch"], price: 375 },

      { name: "Scapa", tags: ["Single Malt Scotch"], price: 600 },

      { name: "Drambuie", price: 400 },

      { name: "Absolut Elyx Vodka", price: 300 },
    ]
  },

  {
    id: "konyak",
    titleTR: "Konyak",
    titleEN: "Cognac",
    items: [
      { name: "Martell VSOP", tags: ["Very Superior Old Pale"], price: 720 },
      { name: "Martell VS", tags: ["Very Special"], price: 550 },
    ]
  },

  {
    id: "tost-gozleme",
    titleTR: "Tost ve Gözleme",
    titleEN: "Toast & Gözleme",
    items: [
      { name: "Kaşarlı, Sucuklu", price: 250, desc: "Cherry domates, salatalık ve zeytin ile" },
      { name: "Kaşarlı", price: 250, desc: "Cherry domates, salatalık ve zeytin ile" },
      { name: "İzmir Tulumlu, Köz Biberli", price: 250, desc: "Cherry domates, salatalık ve zeytin ile" },
      { name: "Kaşarlı, Domatesli", price: 250, desc: "Cherry domates, salatalık ve zeytin ile" },
      { name: "Beyaz Peynirli, Domatesli", price: 250, desc: "Cherry domates, salatalık ve zeytin ile" },
      { name: "Not", price: null, desc: "15.00'e kadar açık.", tags: ["Bilgi"] },
    ]
  },

  {
    id: "penny-kahvalti",
    titleTR: "Penny Kahvaltı",
    titleEN: "Penny Breakfast",
    items: [
      { name: "Açık Büfe Kahvaltı", price: 700, desc: "Cumartesi ve Pazar" },
      { name: "Sebzeli Omlet ve Çay", price: 150, desc: "Kapya biber, yeşil biber ve soğan" },
      { name: "Sıcak Süt", price: 100 },
      { name: "Kahvaltı Salatası", price: 150, desc: "Domates, salatalık, roka, maydanoz ve iki dilim peynir" },
      { name: "Bal & Kaymak", price: 100 },
      { name: "Kasap Sucuk", price: 150 },
      { name: "Reçel", price: 100 },
      { name: "Zeytin", price: 100 },
      { name: "Not", price: null, desc: "Kahvaltılık ürünlerimiz 15.00'e kadar açık.", tags: ["Bilgi"] },
    ]
  },

  {
    id: "kirmizi-sarap",
    titleTR: "Kırmızı Şarap",
    titleEN: "Red Wine",
    items: [
      { name: "Pamukkale Anfora Shiraz Kadeh", price: 350 },
      { name: "Pamukkale Anfora Merlot Kadeh", price: 350 },
      { name: "Pamukkale Anfora Kalecik Karası Kadeh", price: 350 },

      { name: "Pamukkale Anfora Shiraz Şişe", price: 1300 },
      { name: "Pamukkale Anfora Merlot Şişe", price: 1300 },
      { name: "Pamukkale Anfora Öküzgözü Şişe", price: 1300 },
      { name: "Pamukkale Anfora Kalecik Karası Şişe", price: 1300 },
      { name: "Pamukkale Anfora Cabernet Sauvignon Şişe", price: 1300 },

      { name: "Pamukkale Grand Reserve Shiraz Şişe", price: 2500 },
      { name: "Suvla Kumkale Merlot Şişe", price: 1500 },
      { name: "Suvla Sur Şişe", price: 2500, desc: "Merlot, Cabernet Sauvignon, Cabernet franc, Malbec, Petit verdot." },

      { name: "Pamukkale Anfora Trio Şişe", price: 1300, desc: "Shiraz, Kalecik Karası, Cabernet Sauvignon" },
    ]
  },

  {
    id: "blush-rose-beyaz",
    titleTR: "Blush, Rose, Beyaz, Köpüklü Şarap",
    titleEN: "Blush, Rosé, White & Sparkling",
    items: [
      { name: "Çankaya Kadeh", tags: ["TR"], price: 400 },

      { name: "Pamukkale Anfora Trio Beyaz Kadeh", price: 350, desc: "Chardonnay, Narince, Sauvignon Blanc" },
      { name: "Pamukkale Anfora Trio Beyaz Şişe", price: 1300, desc: "Chardonnay, Narince, Sauvignon Blanc" },

      { name: "Pamukkale Anfora Trio Rose Kadeh", price: 350, desc: "Shiraz, Kalecik Karası, Cabernet Sauvignon" },
      { name: "Pamukkale Anfora Trio Rose Şişe", price: 1300, desc: "Shiraz, Kalecik Karası, Cabernet Sauvignon" },

      { name: "Pamukkale Anfora Blush Şişe", price: 1400 },
      { name: "Suvla Kabatepe Blush Kadeh", price: 350 },
      { name: "Suvla Kabatepe Blush Şişe", price: 1300 },

      { name: "Pamukkale Anfora Sauvignon Şişe", price: 1400 },
      { name: "Pamukkale Anfora Chardonnay Şişe", price: 1400 },

      { name: "Mulier Şişe", size: "50 cl", price: 1400 },
    ]
  },

  {
    id: "sicak-sarap-sangria",
    titleTR: "Sıcak Şarap, Sangria",
    titleEN: "Hot Wine & Sangria",
    items: [
      { name: "Sıcak Şarap", price: 400 },
      { name: "Sangria Kadeh", price: 400, desc: "Taze meyveler, cin, votka, şarap" },
    ]
  },

  {
    id: "snaps-shots",
    titleTR: "Snaps & Shots",
    titleEN: "Snaps & Shots",
    items: [
      { name: "Beefeater Pink", price: 165 },
      { name: "Jagermeister", price: 125 },
      { name: "Malfy Cin", price: 165 },
      { name: "Bumbu Dark Rom", price: 165 },
      { name: "Jagermeister Coldbrew Coffee", price: 125 },
      { name: "Olmeca Altos Tekila", price: 165 },
      { name: "Jameson", price: 165 },
      { name: "Drambuie Shot", price: 180 },
      { name: "Absolut Blue Votka", price: 165 },
    ]
  },

  {
    id: "sicak-icecekler",
    titleTR: "Sıcak İçecekler",
    titleEN: "Hot Drinks",
    items: [
      { name: "Americano", price: 100 },
      { name: "Cappuccino", price: 125 },
      { name: "Latte", price: 125 },

      { name: "Alkollü Kahve Çeşitleri", price: 250, available: false, desc: "Irish, Baileys, Kahlua" },

      { name: "Çaysky", price: 200, desc: "Jameson, çay" },
      { name: "Espresso", price: 75 },
      { name: "Filtre Kahve", price: 90 },
      { name: "Double Espresso", price: 125 },
      { name: "Sahlep", price: 125 },
      { name: "Sıcak Çikolata", price: 125 },
      { name: "Ihlamur / Adaçayı / Nane çayı", price: 125 },
      { name: "Mocha", price: 125 },
    ]
  },

  {
    id: "soguk-icecekler",
    titleTR: "Soğuk İçecekler",
    titleEN: "Cold Drinks",
    items: [
      { name: "Coca Cola, Fanta, Sprite", price: 100 },
      { name: "Su", price: 25 },
      { name: "Ev Yapımı Ice Tea", tags: ["Limonlu"], price: 100, desc: "Kendimiz yapıyoruz." },
      { name: "Taze Meyve Suyu", price: 150, desc: "Mevsim meyveleri, 15.00'e kadar" },
      { name: "Soğuk Çikolata", price: 125 },
      { name: "Ice Americano", price: 125 },
      { name: "Ice Latte", price: 125 },
      { name: "Soda", tags: ["Sade"], price: 40 },

      { name: "Özerhisar Ayranı", price: 90, available: false },

      { name: "Fuse Tea", tags: ["Şeftali, Limon"], price: 100 },
    ]
  },

  {
    id: "tatlilar",
    titleTR: "Tatlılar",
    titleEN: "Desserts",
    items: [
      { name: "Sufle", price: 250, desc: "Dondurma ile" },
    ]
  },

  {
    id: "corba",
    titleTR: "Çorba",
    titleEN: "Soup",
    items: [
      { name: "Günün Çorbası", tags: ["Yayla"], price: 200, available: false },
    ]
  },

  {
    id: "yeni",
    titleTR: "Yeni",
    titleEN: "New",
    items: [
      // şimdilik boş
    ]
  },
];
