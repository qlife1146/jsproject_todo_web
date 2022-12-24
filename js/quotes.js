const quotes = [
    { quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.", author: "사무엘 존슨" },
    { quote: "먼저 자신을 비웃어라, 다른 사람이 당신을 비웃기 전에.", author: "엘사 맥스웰" },
    { quote: "어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다.", author: "제임스 오펜하임" },
    { quote: "행복은 습관이다. 그것을 몸에 지녀라", author: "허버드" },
    { quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.", author: "앙드레 말로" },
    { quote: "자신감 있는 표정을 지으면 자신감이 생긴다.", author: "찰스 다윈" },
    { quote: "출생과 죽음은 피할 수 없으므로 그 사이를 즐겨라.", author: "조지 산타야나" },
    { quote: "이미 끝나버린 일을 후회하기보다는 하고 싶었던 일들을 하지 못한 것을 후회하라.", author: "탈무드" },
    { quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.", author: "베토벤" },
    { quote: "작은 기회로부터 종종 위대한 업적이 시작된다.", author: "데모스테네스" },
];

const quote = document.querySelector("#quote span:first-child"); //id=quote -> fist span
const author = document.querySelector("#quote span:last-child"); //id=quote -> last span

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
