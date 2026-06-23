console.log("expert.js loaded");

var expertQuestions = [

{
  question: "Which scientist formulated the laws of planetary motion?",
  options: ["Newton", "Galileo", "Kepler", "Einstein"],
  answer: "Kepler"
},
{
  question: "What is the square root of 20736?",
  options: ["132", "144", "156", "168"],
  answer: "144"
},
{
  question: "Which country has the most neighboring countries?",
  options: ["Russia", "China", "Brazil", "India"],
  answer: "China"
},
{
  question: "What does EBITDA stand for?",
  options: [
    "Earnings Before Interest, Taxes, Depreciation, and Amortization",
    "Estimated Business Income During Tax Assessment",
    "Equity Before Investment Trade and Debt Accounting",
    "Enterprise Banking Internal Tax Audit"
  ],
  answer: "Earnings Before Interest, Taxes, Depreciation, and Amortization"
},
{
  question: "Which planet has the shortest day?",
  options: ["Earth", "Mars", "Jupiter", "Neptune"],
  answer: "Jupiter"
},
{
  question: "What is the next prime number after 97?",
  options: ["99", "101", "103", "107"],
  answer: "101"
},
{
  question: "Who wrote the Principia Mathematica?",
  options: ["Galileo", "Einstein", "Newton", "Kepler"],
  answer: "Newton"
},
{
  question: "Which continent has no permanent population?",
  options: ["Australia", "Arctic", "Antarctica", "Europe"],
  answer: "Antarctica"
},
{
  question: "If all A are B and all B are C, then all A are?",
  options: ["B", "C", "Both B and C", "Neither"],
  answer: "Both B and C"
},
{
  question: "What is the capital of Kazakhstan?",
  options: ["Almaty", "Astana", "Tashkent", "Bishkek"],
  answer: "Astana"
},
{
  question: "Which element has atomic number 79?",
  options: ["Silver", "Gold", "Mercury", "Platinum"],
  answer: "Gold"
},
{
  question: "What is the rarest blood type?",
  options: ["AB+", "O-", "AB-", "B-"],
  answer: "AB-"
},
{
  question: "What is the value of Pi to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  answer: "3.14"
},
{
  question: "Which moon has methane lakes?",
  options: ["Europa", "Titan", "Io", "Triton"],
  answer: "Titan"
},
{
  question: "What is the longest river in South America?",
  options: ["Paraná", "Orinoco", "Amazon", "Madeira"],
  answer: "Amazon"
},
{
  question: "Which company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne?",
  options: ["Microsoft", "Apple", "Intel", "Oracle"],
  answer: "Apple"
},
{
  question: "What is 13²?",
  options: ["156", "169", "182", "196"],
  answer: "169"
},
{
  question: "What galaxy is closest to the Milky Way?",
  options: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"],
  answer: "Andromeda"
},
{
  question: "What is the largest organ in the human body?",
  options: ["Liver", "Brain", "Skin", "Lungs"],
  answer: "Skin"
},
{
  question: "What is the next number: 1, 4, 9, 16, 25, ?",
  options: ["30", "35", "36", "49"],
  answer: "36"
},
{
  question: "Which nation has the largest economy by GDP?",
  options: ["China", "Germany", "United States", "Japan"],
  answer: "United States"
},
{
  question: "What is the speed of light in a vacuum?",
  options: ["150,000 km/s", "300,000 km/s", "450,000 km/s", "600,000 km/s"],
  answer: "300,000 km/s"
},
{
  question: "Who was the first human in space?",
  options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
  answer: "Yuri Gagarin"
},
{
  question: "What is the next number: 2, 6, 12, 20, 30, ?",
  options: ["36", "40", "42", "44"],
  answer: "42"
},
{
  question: "Which scientist discovered penicillin?",
  options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
  answer: "Alexander Fleming"
},
{
  question: "What is the cube root of 2744?",
  options: ["12", "13", "14", "15"],
  answer: "14"
},
{
  question: "Which country has the largest number of time zones?",
  options: ["Russia", "United States", "France", "Australia"],
  answer: "France"
},
{
  question: "What is the main gas found in Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  answer: "Nitrogen"
},
{
  question: "What does ROI stand for?",
  options: ["Return on Investment", "Rate of Income", "Revenue Operating Index", "Risk of Inflation"],
  answer: "Return on Investment"
},
{
  question: "What is the largest moon in the Solar System?",
  options: ["Titan", "Europa", "Ganymede", "Callisto"],
  answer: "Ganymede"
},
{
  question: "What comes next: 3, 9, 27, 81, ?",
  options: ["162", "243", "324", "729"],
  answer: "243"
},
{
  question: "Who developed the theory of relativity?",
  options: ["Newton", "Tesla", "Einstein", "Bohr"],
  answer: "Einstein"
},
{
  question: "What is the capital of Mongolia?",
  options: ["Astana", "Ulaanbaatar", "Tashkent", "Baku"],
  answer: "Ulaanbaatar"
},
{
  question: "Which company created the first iPhone?",
  options: ["Microsoft", "Apple", "Nokia", "Samsung"],
  answer: "Apple"
},
{
  question: "What is the hardest natural substance on Earth?",
  options: ["Quartz", "Diamond", "Graphite", "Titanium"],
  answer: "Diamond"
},
{
  question: "Which ocean is the deepest?",
  options: ["Atlantic", "Indian", "Pacific", "Arctic"],
  answer: "Pacific"
},
{
  question: "What is the next prime number after 113?",
  options: ["115", "117", "127", "129"],
  answer: "127"
},
{
  question: "Who was the first President of the United States?",
  options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
  answer: "George Washington"
},
{
  question: "Which planet has the most moons currently known?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  answer: "Saturn"
},
{
  question: "What is a monopoly?",
  options: [
    "A market dominated by one seller",
    "A market with many sellers",
    "A stock market",
    "A government agency"
  ],
  answer: "A market dominated by one seller"
},
{
  question: "What is 17 × 18?",
  options: ["286", "296", "306", "316"],
  answer: "306"
},
{
  question: "What is the longest mountain range on Earth?",
  options: ["Himalayas", "Rockies", "Andes", "Alps"],
  answer: "Andes"
},
{
  question: "Which scientist proposed the laws of motion?",
  options: ["Einstein", "Newton", "Galileo", "Faraday"],
  answer: "Newton"
},
{
  question: "What is the rarest naturally occurring element on Earth?",
  options: ["Gold", "Francium", "Platinum", "Radium"],
  answer: "Francium"
},
{
  question: "What comes next: 5, 10, 20, 40, ?",
  options: ["60", "70", "80", "90"],
  answer: "80"
},
{
  question: "Which country contains the city of Timbuktu?",
  options: ["Niger", "Mali", "Chad", "Sudan"],
  answer: "Mali"
},
{
  question: "Which spacecraft first landed humans on the Moon?",
  options: ["Apollo 8", "Apollo 10", "Apollo 11", "Apollo 13"],
  answer: "Apollo 11"
},
{
  question: "What is EBITDA used to measure?",
  options: [
    "Company operating performance",
    "Population growth",
    "Tax rate",
    "Interest rate"
  ],
  answer: "Company operating performance"
},
{
  question: "If all squares are rectangles, then which statement is true?",
  options: [
    "All rectangles are squares",
    "Some rectangles are squares",
    "No rectangles are squares",
    "Squares are circles"
  ],
  answer: "Some rectangles are squares"
},
{
  question: "What is the value of 19²?",
  options: ["341", "351", "361", "371"],
  answer: "361"
},
{
  question: "Which country has the world's largest proven oil reserves?",
  options: ["Saudi Arabia", "Russia", "Venezuela", "Iran"],
  answer: "Venezuela"
},
{
  question: "What is the name of the black hole at the center of the Milky Way?",
  options: ["Cygnus X-1", "M87*", "Sagittarius A*", "Gaia BH1"],
  answer: "Sagittarius A*"
},
{
  question: "Who wrote The Wealth of Nations?",
  options: ["Karl Marx", "Adam Smith", "John Keynes", "Milton Friedman"],
  answer: "Adam Smith"
},
{
  question: "What is the next number: 1, 2, 6, 24, 120, ?",
  options: ["240", "360", "720", "840"],
  answer: "720"
},
{
  question: "Which element has atomic number 92?",
  options: ["Thorium", "Plutonium", "Uranium", "Radium"],
  answer: "Uranium"
},
{
  question: "What is the capital of Uzbekistan?",
  options: ["Astana", "Tashkent", "Baku", "Bishkek"],
  answer: "Tashkent"
},
{
  question: "Which company developed the Android operating system?",
  options: ["Apple", "Microsoft", "Android Inc.", "Google"],
  answer: "Android Inc."
},
{
  question: "What is the largest desert in the world?",
  options: ["Sahara", "Arabian", "Antarctic Desert", "Gobi"],
  answer: "Antarctic Desert"
},
{
  question: "What is the square root of 3136?",
  options: ["54", "55", "56", "57"],
  answer: "56"
},
{
  question: "Who discovered gravity after observing a falling apple?",
  options: ["Galileo", "Newton", "Einstein", "Faraday"],
  answer: "Newton"
},
{
  question: "What is the longest river in Asia?",
  options: ["Mekong", "Yellow River", "Yangtze", "Ganges"],
  answer: "Yangtze"
},
{
  question: "What is a startup unicorn?",
  options: [
    "A startup valued over $1 billion",
    "A startup with one employee",
    "A startup with no revenue",
    "A government startup"
  ],
  answer: "A startup valued over $1 billion"
},
{
  question: "Which planet has the strongest winds?",
  options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  answer: "Neptune"
},
{
  question: "What comes next: 2, 5, 11, 23, 47, ?",
  options: ["91", "95", "97", "99"],
  answer: "95"
},
{
  question: "Which country is home to Angkor Wat?",
  options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
  answer: "Cambodia"
},
{
  question: "What is the chemical symbol for tungsten?",
  options: ["T", "Tu", "W", "Tg"],
  answer: "W"
},
{
  question: "Which telescope succeeded Hubble?",
  options: ["Kepler", "Spitzer", "James Webb", "Chandra"],
  answer: "James Webb"
},
{
  question: "What is the break-even point?",
  options: [
    "Revenue equals costs",
    "Profit doubles",
    "Debt reaches zero",
    "Sales reach 100"
  ],
  answer: "Revenue equals costs"
},
{
  question: "What is 25 × 25?",
  options: ["575", "600", "625", "650"],
  answer: "625"
},
{
  question: "Who was the first person to walk on the Moon?",
  options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
  answer: "Neil Armstrong"
},
{
  question: "What is the deepest point in Earth's oceans?",
  options: ["Tonga Trench", "Java Trench", "Mariana Trench", "Puerto Rico Trench"],
  answer: "Mariana Trench"
},
{
  question: "Which blood type is known as the universal donor?",
  options: ["O+", "O-", "AB+", "AB-"],
  answer: "O-"
},
{
  question: "What is the next number: 4, 9, 16, 25, 36, ?",
  options: ["42", "47", "49", "64"],
  answer: "49"
},
{
  question: "Which country has the largest number of UNESCO World Heritage Sites?",
  options: ["China", "France", "Italy", "Spain"],
  answer: "Italy"
},
{
  question: "What is the cube root of 2197?",
  options: ["11", "12", "13", "14"],
  answer: "13"
},
{
  question: "Which scientist discovered electromagnetic induction?",
  options: ["Maxwell", "Faraday", "Tesla", "Ampere"],
  answer: "Faraday"
},
{
  question: "Which country has the most islands in the world?",
  options: ["Indonesia", "Philippines", "Japan", "Sweden"],
  answer: "Sweden"
},
{
  question: "What is the largest moon of Saturn?",
  options: ["Titan", "Enceladus", "Mimas", "Rhea"],
  answer: "Titan"
},
{
  question: "What is the formula for the area of a circle?",
  options: ["2πr", "πr²", "πd", "r²"],
  answer: "πr²"
},
{
  question: "Which company was founded by Bill Gates and Paul Allen?",
  options: ["Apple", "IBM", "Microsoft", "Oracle"],
  answer: "Microsoft"
},
{
  question: "Which country has the city of Fez?",
  options: ["Egypt", "Morocco", "Tunisia", "Algeria"],
  answer: "Morocco"
},
{
  question: "What is the nearest star system to Earth?",
  options: ["Sirius", "Alpha Centauri", "Betelgeuse", "Vega"],
  answer: "Alpha Centauri"
},
{
  question: "What comes next: 7, 14, 28, 56, ?",
  options: ["84", "98", "112", "124"],
  answer: "112"
},
{
  question: "Which business metric measures customer acquisition cost?",
  options: ["LTV", "ROI", "CAC", "KPI"],
  answer: "CAC"
},
{
  question: "What is the capital of Mongolia?",
  options: ["Astana", "Ulaanbaatar", "Baku", "Tashkent"],
  answer: "Ulaanbaatar"
},
{
  question: "Which element is represented by the symbol Ag?",
  options: ["Gold", "Silver", "Argon", "Aluminum"],
  answer: "Silver"
},
{
  question: "What is the largest ocean trench?",
  options: ["Java Trench", "Tonga Trench", "Mariana Trench", "Puerto Rico Trench"],
  answer: "Mariana Trench"
},
{
  question: "Who painted the Mona Lisa?",
  options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
  answer: "Leonardo da Vinci"
},
{
  question: "What is 144 ÷ 12?",
  options: ["10", "11", "12", "13"],
  answer: "12"
},
{
  question: "Which planet has Olympus Mons?",
  options: ["Venus", "Earth", "Mars", "Mercury"],
  answer: "Mars"
},
{
  question: "What does SWOT stand for?",
  options: [
    "Strengths, Weaknesses, Opportunities, Threats",
    "Sales, Work, Output, Taxes",
    "Systems, Workflows, Operations, Technology",
    "Stocks, Wages, Orders, Trends"
  ],
  answer: "Strengths, Weaknesses, Opportunities, Threats"
},
{
  question: "Which country contains Mount Kilimanjaro?",
  options: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
  answer: "Tanzania"
},
{
  question: "What comes next: 1, 4, 10, 22, 46, ?",
  options: ["82", "90", "94", "98"],
  answer: "94"
},
{
  question: "What is the rarest blood type?",
  options: ["AB+", "AB-", "O-", "B-"],
  answer: "AB-"
},
{
  question: "Which spacecraft first reached interstellar space?",
  options: ["Pioneer 10", "Voyager 1", "Voyager 2", "New Horizons"],
  answer: "Voyager 1"
},
{
  question: "Which country has the largest economy in Europe?",
  options: ["France", "Italy", "Germany", "Spain"],
  answer: "Germany"
},
{
  question: "What is the square root of 4096?",
  options: ["62", "64", "66", "68"],
  answer: "64"
},
{
  question: "Who developed the first practical telephone?",
  options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Marconi"],
  answer: "Alexander Graham Bell"
},
{
  question: "Which galaxy will eventually collide with the Milky Way?",
  options: ["Whirlpool Galaxy", "Triangulum Galaxy", "Andromeda Galaxy", "Sombrero Galaxy"],
  answer: "Andromeda Galaxy"
}
];