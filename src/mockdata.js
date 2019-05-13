const generateNumber = length => {
  const seed = Math.random();
  const max = Math.pow(10, length);
  return Math.floor(seed * max).toString().padStart(length, 0);
};

const colors = ['white', 'blue', 'red', 'green', 'blue', 'rainbow', 'cyan', 'pink', 'chair', 'angry'].map(e => `${generateNumber(1).padStart(3, 0)} ${e}`);

const product = ['Vikafjell', 'Sway', 'Sweet', 'Nike', 'Norrøna', 'Devold', 'Ecco', 'Hydra', 'Thanos', 'Jon Snow'];

const supplier = [
  'Element Productions AS',
  'Devold of Norway AS',
  'Missing Link Group',
  'Suno Sport Norge',
  'Nick Fury AS',
  'Steve Rogers Inc',
  'Tony Stark CC',
  'Affiliated Avengers',
  'Beep-Boop-Beep',
  'Bran 2000 Raven Simulator',
];

const createNewJson = () => {
  return {
    "ArticleID": generateNumber(5),
    "ArticleNo": `${generateNumber(5)}-EL${generateNumber(5)}`,
    "Name": "Varm ullgenser",
    "SupplierName": supplier[Math.floor(Math.random() * 10)],
    "ProductLineName": product[Math.floor(Math.random() * 10)],
    "MainGroupName": "Tekstil",
    "ArticleGroup2Name": "MellomLag",
    "ArticleGroup3Name": "Ullgenser",
    "PurchasePrice": generateNumber(3),
    "SalesPrice": generateNumber(3),
    "SuggestedPrice": generateNumber(4),
    "Variants": [
        {
            "EAN": generateNumber(13),
            "Color": `${colors[Math.floor(Math.random() * 10)]}`,
            "Size": "S"
        },
        {
            "EAN": generateNumber(13),
            "Color": `${colors[Math.floor(Math.random() * 10)]}`,
            "Size": "M"
        },
        {
            "EAN": generateNumber(13),
            "Color": `${colors[Math.floor(Math.random() * 10)]}`,
            "Size": "L"
        }
    ],
  }
};

export default Array(100).fill({}).map(each => createNewJson()); 