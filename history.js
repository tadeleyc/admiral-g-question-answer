console.log("history.js loaded");

const historyQuestions = [    
    
    {
  question: "Which empire was ruled by Mansa Musa?",
  options: [
    "Ottoman Empire",
    "Roman Empire",
    "Mali Empire",
    "Persian Empire"
  ],
  answer: "Mali Empire"
},
{
  question: "Who was the first emperor of Rome?",
  options: [
    "Julius Caesar",
    "Augustus",
    "Nero",
    "Marcus Aurelius"
  ],
  answer: "Augustus"
},
{
  question: "In what year did World War II end?",
  options: ["1942", "1945", "1950", "1939"],
  answer: "1945"
},
{
  question: "Which civilization built Machu Picchu?",
  options: [
    "Aztec",
    "Maya",
    "Inca",
    "Olmec"
  ],
  answer: "Inca"
},
{
  question: "Who wrote the 95 Theses?",
  options: [
    "John Calvin",
    "Martin Luther",
    "Henry VIII",
    "Thomas Aquinas"
  ],
  answer: "Martin Luther"
},
{
  question: "Which treaty ended World War I?",
  options: [
    "Treaty of Paris",
    "Treaty of Versailles",
    "Treaty of Vienna",
    "Treaty of Berlin"
  ],
  answer: "Treaty of Versailles"
},
{
  question: "Who was the British Prime Minister during most of World War II?",
  options: [
    "Neville Chamberlain",
    "Winston Churchill",
    "Margaret Thatcher",
    "Tony Blair"
  ],
  answer: "Winston Churchill"
},
{
  question: "What year did the Berlin Wall fall?",
  options: [
    "1989",
    "1975",
    "1995",
    "1961"
  ],
  answer: "1989"
},
{
  question: "Which war was fought between the North and South regions of the United States?",
  options: [
    "World War I",
    "American Revolution",
    "Civil War",
    "War of 1812"
  ],
  answer: "Civil War"
},
{
  question: "Who discovered America in 1492?",
  options: [
    "Leif Erikson",
    "Christopher Columbus",
    "Ferdinand Magellan",
    "Amerigo Vespucci"
  ],
  answer: "Christopher Columbus"
},
{
  question: "Which ancient civilization built the pyramids?",
  options: [
    "Romans",
    "Greeks",
    "Egyptians",
    "Persians"
  ],
  answer: "Egyptians"
},
{
  question: "Who was known as the Maid of Orleans?",
  options: [
    "Marie Curie",
    "Joan of Arc",
    "Queen Victoria",
    "Catherine the Great"
  ],
  answer: "Joan of Arc"
},
{
  question: "Which country started the Renaissance?",
  options: [
    "France",
    "Italy",
    "Germany",
    "England"
  ],
  answer: "Italy"
},
{
  question: "Who was the leader of Nazi Germany?",
  options: [
    "Joseph Stalin",
    "Adolf Hitler",
    "Benito Mussolini",
    "Kaiser Wilhelm II"
  ],
  answer: "Adolf Hitler"
},
{
  question: "Which empire built roads stretching across Europe, North Africa, and Asia?",
  options: [
    "Ottoman Empire",
    "Roman Empire",
    "British Empire",
    "Mongol Empire"
  ],
  answer: "Roman Empire"
},
{
  question: "Who was the first President of the United States?",
  options: [
    "Thomas Jefferson",
    "George Washington",
    "John Adams",
    "Abraham Lincoln"
  ],
  answer: "George Washington"
},
{
  question: "Which ship sank in 1912 after hitting an iceberg?",
  options: [
    "Lusitania",
    "Titanic",
    "Mayflower",
    "Bismarck"
  ],
  answer: "Titanic"
},
{
  question: "Who conquered much of Asia and Europe creating the Mongol Empire?",
  options: [
    "Alexander the Great",
    "Napoleon",
    "Genghis Khan",
    "Attila the Hun"
  ],
  answer: "Genghis Khan"
},
{
  question: "What event began on July 14, 1789 in France?",
  options: [
    "French Revolution",
    "Industrial Revolution",
    "Napoleonic Wars",
    "Hundred Years War"
  ],
  answer: "French Revolution"
},
{
  question: "Who was assassinated in 1963 in Dallas, Texas?",
  options: [
    "Ronald Reagan",
    "John F. Kennedy",
    "Richard Nixon",
    "Harry Truman"
  ],
  answer: "John F. Kennedy"
},
{
  question: "Which civilization created democracy in Athens?",
  options: [
    "Romans",
    "Greeks",
    "Persians",
    "Phoenicians"
  ],
  answer: "Greeks"
},
{
  question: "Who became emperor of France in 1804?",
  options: [
    "Louis XVI",
    "Napoleon Bonaparte",
    "Charlemagne",
    "Voltaire"
  ],
  answer: "Napoleon Bonaparte"
},
{
  question: "Which war lasted from 1939 to 1945?",
  options: [
    "World War I",
    "Vietnam War",
    "World War II",
    "Cold War"
  ],
  answer: "World War II"
},
{
  question: "Who was the Soviet Union leader during most of World War II?",
  options: [
    "Lenin",
    "Joseph Stalin",
    "Khrushchev",
    "Trotsky"
  ],
  answer: "Joseph Stalin"
},
{
  question: "Which civilization used cuneiform writing?",
  options: [
    "Egyptians",
    "Romans",
    "Sumerians",
    "Greeks"
  ],
  answer: "Sumerians"
},
{
  question: "Who was the first man to circumnavigate the globe?",
  options: [
    "Christopher Columbus",
    "Ferdinand Magellan",
    "James Cook",
    "Marco Polo"
  ],
  answer: "Ferdinand Magellan"
},
{
  question: "Which empire was known for its elite warriors called Janissaries?",
  options: [
    "Roman Empire",
    "Ottoman Empire",
    "Persian Empire",
    "Mongol Empire"
  ],
  answer: "Ottoman Empire"
},
{
  question: "Who signed the Emancipation Proclamation?",
  options: [
    "George Washington",
    "Abraham Lincoln",
    "Thomas Jefferson",
    "Theodore Roosevelt"
  ],
  answer: "Abraham Lincoln"
},
{
  question: "Which country gifted the Statue of Liberty to the United States?",
  options: [
    "Germany",
    "England",
    "France",
    "Italy"
  ],
  answer: "France"
},
{
  question: "Who was the queen of ancient Egypt famous for her alliances with Julius Caesar and Mark Antony?",
  options: [
    "Nefertiti",
    "Cleopatra",
    "Hatshepsut",
    "Isis"
  ],
  answer: "Cleopatra"
},
{
  question: "Which event triggered World War I in 1914?",
  options: [
    "Invasion of Poland",
    "Bombing of Pearl Harbor",
    "Assassination of Archduke Franz Ferdinand",
    "Russian Revolution"
  ],
  answer: "Assassination of Archduke Franz Ferdinand"
},
{
  question: "Who painted the ceiling of the Sistine Chapel?",
  options: [
    "Leonardo da Vinci",
    "Raphael",
    "Michelangelo",
    "Donatello"
  ],
  answer: "Michelangelo"
},
{
  question: "What was the name of the trade route connecting China to Europe?",
  options: [
    "Spice Route",
    "Royal Road",
    "Silk Road",
    "Golden Path"
  ],
  answer: "Silk Road"
},
{
  question: "Who led the Soviet Union during the Cuban Missile Crisis?",
  options: [
    "Joseph Stalin",
    "Nikita Khrushchev",
    "Lenin",
    "Mikhail Gorbachev"
  ],
  answer: "Nikita Khrushchev"
},
{
  question: "Which civilization is credited with inventing paper?",
  options: [
    "Romans",
    "Chinese",
    "Egyptians",
    "Greeks"
  ],
  answer: "Chinese"
},
{
  question: "Who was known as the Iron Lady?",
  options: [
    "Queen Elizabeth II",
    "Margaret Thatcher",
    "Angela Merkel",
    "Indira Gandhi"
  ],
  answer: "Margaret Thatcher"
},
{
  question: "Which war was fought between Athens and Sparta?",
  options: [
    "Peloponnesian War",
    "Punic War",
    "Crimean War",
    "Hundred Years War"
  ],
  answer: "Peloponnesian War"
},
{
  question: "Who wrote the Communist Manifesto with Friedrich Engels?",
  options: [
    "Vladimir Lenin",
    "Joseph Stalin",
    "Karl Marx",
    "Leon Trotsky"
  ],
  answer: "Karl Marx"
},
{
  question: "What year did the United States declare independence?",
  options: [
    "1776",
    "1789",
    "1812",
    "1492"
  ],
  answer: "1776"
},
{
  question: "Who was the longest reigning British monarch before Queen Elizabeth II?",
  options: [
    "King George III",
    "Queen Victoria",
    "Henry VIII",
    "Queen Anne"
  ],
  answer: "Queen Victoria"
},
{
  question: "Which empire fell in 1453 after the capture of Constantinople?",
  options: [
    "Roman Empire",
    "Byzantine Empire",
    "Ottoman Empire",
    "Persian Empire"
  ],
  answer: "Byzantine Empire"
},
{
  question: "Who led the civil rights movement with the 'I Have a Dream' speech?",
  options: [
    "Malcolm X",
    "Martin Luther King Jr.",
    "Rosa Parks",
    "Frederick Douglass"
  ],
  answer: "Martin Luther King Jr."
},
{
  question: "What wall divided East and West Germany during the Cold War?",
  options: [
    "Great Wall",
    "Iron Curtain",
    "Berlin Wall",
    "Western Barrier"
  ],
  answer: "Berlin Wall"
},
{
  question: "Which explorer claimed the Pacific Ocean for Spain?",
  options: [
    "Vasco da Gama",
    "Balboa",
    "Columbus",
    "Magellan"
  ],
  answer: "Balboa"
},
{
  question: "Who was the leader of the Soviet Union that helped end the Cold War?",
  options: [
    "Lenin",
    "Joseph Stalin",
    "Mikhail Gorbachev",
    "Trotsky"
  ],
  answer: "Mikhail Gorbachev"
},
{
  question: "Which ancient city was destroyed by Mount Vesuvius in 79 AD?",
  options: [
    "Athens",
    "Pompeii",
    "Sparta",
    "Rome"
  ],
  answer: "Pompeii"
},
{
  question: "Who was the first woman to fly solo across the Atlantic Ocean?",
  options: [
    "Sally Ride",
    "Amelia Earhart",
    "Harriet Quimby",
    "Bessie Coleman"
  ],
  answer: "Amelia Earhart"
},
{
  question: "Which document limited the power of the English king in 1215?",
  options: [
    "Bill of Rights",
    "Constitution",
    "Magna Carta",
    "Treaty of Versailles"
  ],
  answer: "Magna Carta"
},
{
  question: "Who was the first emperor of China?",
  options: [
    "Qin Shi Huang",
    "Kublai Khan",
    "Sun Tzu",
    "Mao Zedong"
  ],
  answer: "Qin Shi Huang"
},
{
  question: "Which U.S. president resigned because of the Watergate scandal?",
  options: [
    "Richard Nixon",
    "Gerald Ford",
    "Jimmy Carter",
    "Lyndon Johnson"
  ],
  answer: "Richard Nixon"
},
{
  question: "Which war was fought between the North and South in England during the 15th century?",
  options: [
    "Hundred Years War",
    "War of the Roses",
    "Crimean War",
    "English Civil War"
  ],
  answer: "War of the Roses"
},
{
  question: "Who was the famous Carthaginian general who crossed the Alps with elephants?",
  options: [
    "Julius Caesar",
    "Alexander the Great",
    "Hannibal",
    "Scipio Africanus"
  ],
  answer: "Hannibal"
},
{
  question: "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
  options: [
    "Santa Maria",
    "Titanic",
    "Mayflower",
    "Beagle"
  ],
  answer: "Mayflower"
},
{
  question: "Who was the longest-ruling Soviet leader?",
  options: [
    "Joseph Stalin",
    "Vladimir Lenin",
    "Leonid Brezhnev",
    "Mikhail Gorbachev"
  ],
  answer: "Joseph Stalin"
},
{
  question: "Which country was ruled by apartheid until the early 1990s?",
  options: [
    "Zimbabwe",
    "South Africa",
    "Kenya",
    "Nigeria"
  ],
  answer: "South Africa"
},
{
  question: "Who was the emperor of France defeated at Waterloo?",
  options: [
    "Louis XIV",
    "Napoleon Bonaparte",
    "Charlemagne",
    "Voltaire"
  ],
  answer: "Napoleon Bonaparte"
},
{
  question: "Which explorer reached India by sea for Portugal in 1498?",
  options: [
    "Christopher Columbus",
    "Vasco da Gama",
    "Ferdinand Magellan",
    "Amerigo Vespucci"
  ],
  answer: "Vasco da Gama"
},
{
  question: "Who was the first female Prime Minister of the United Kingdom?",
  options: [
    "Queen Elizabeth II",
    "Margaret Thatcher",
    "Theresa May",
    "Angela Merkel"
  ],
  answer: "Margaret Thatcher"
},
{
  question: "What was the name of the secret project to develop the atomic bomb?",
  options: [
    "Apollo Project",
    "Manhattan Project",
    "Operation Overlord",
    "Project Mercury"
  ],
  answer: "Manhattan Project"
},
{
  question: "Which battle marked Napoleon’s final defeat?",
  options: [
    "Battle of Hastings",
    "Battle of Waterloo",
    "Battle of Trafalgar",
    "Battle of Verdun"
  ],
  answer: "Battle of Waterloo"
},
{
  question: "Who was the famous nurse during the Crimean War?",
  options: [
    "Clara Barton",
    "Florence Nightingale",
    "Marie Curie",
    "Joan of Arc"
  ],
  answer: "Florence Nightingale"
},
{
  question: "Which civilization built the city of Petra?",
  options: [
    "Romans",
    "Greeks",
    "Nabataeans",
    "Phoenicians"
  ],
  answer: "Nabataeans"
},
{
  question: "Who was the last queen of France before the French Revolution?",
  options: [
    "Catherine de Medici",
    "Marie Antoinette",
    "Eleanor of Aquitaine",
    "Anne Boleyn"
  ],
  answer: "Marie Antoinette"
},
{
  question: "What empire controlled much of South America before the Spanish conquest?",
  options: [
    "Aztec Empire",
    "Roman Empire",
    "Inca Empire",
    "Mayan Empire"
  ],
  answer: "Inca Empire"
},
{
  question: "Who was the American president during most of the Civil War?",
  options: [
    "George Washington",
    "Abraham Lincoln",
    "Andrew Jackson",
    "Ulysses Grant"
  ],
  answer: "Abraham Lincoln"
},
{
  question: "Which country was divided into East and West after World War II?",
  options: [
    "France",
    "Germany",
    "Italy",
    "Austria"
  ],
  answer: "Germany"
},
{
  question: "Who founded the Mongol Empire?",
  options: [
    "Kublai Khan",
    "Genghis Khan",
    "Tamerlane",
    "Attila the Hun"
  ],
  answer: "Genghis Khan"
},
{
  question: "What document begins with 'We the People'?",
  options: [
    "Declaration of Independence",
    "Bill of Rights",
    "U.S. Constitution",
    "Gettysburg Address"
  ],
  answer: "U.S. Constitution"
},
{
  question: "Which king of England had six wives?",
  options: [
    "Henry VIII",
    "Edward VI",
    "George III",
    "Charles I"
  ],
  answer: "Henry VIII"
},
{
  question: "Who was the leader of the Cuban Revolution?",
  options: [
    "Che Guevara",
    "Fidel Castro",
    "Hugo Chávez",
    "Simón Bolívar"
  ],
  answer: "Fidel Castro"
},
{
  question: "What year did the Soviet Union officially collapse?",
  options: [
    "1989",
    "1991",
    "1995",
    "1985"
  ],
  answer: "1991"
},
{
  question: "Which empire was ruled by Suleiman the Magnificent?",
  options: [
    "Roman Empire",
    "Persian Empire",
    "Ottoman Empire",
    "Mughal Empire"
  ],
  answer: "Ottoman Empire"
},
{
  question: "Who invented the movable printing press in Europe?",
  options: [
    "Isaac Newton",
    "Johannes Gutenberg",
    "Leonardo da Vinci",
    "Galileo"
  ],
  answer: "Johannes Gutenberg"
},
{
  question: "Which war was fought between the United States and Vietnam?",
  options: [
    "Korean War",
    "Vietnam War",
    "Cold War",
    "Gulf War"
  ],
  answer: "Vietnam War"
},
{
  question: "Who led the Indian independence movement through nonviolent resistance?",
  options: [
    "Jawaharlal Nehru",
    "Mahatma Gandhi",
    "Indira Gandhi",
    "Subhas Chandra Bose"
  ],
  answer: "Mahatma Gandhi"
},
{
  question: "Who was the first emperor to unite China?",
  options: [
    "Qin Shi Huang",
    "Kublai Khan",
    "Sun Tzu",
    "Mao Zedong"
  ],
  answer: "Qin Shi Huang"
},
{
  question: "Which event started the Great Depression in 1929?",
  options: [
    "Pearl Harbor",
    "Stock Market Crash",
    "World War I",
    "Dust Bowl"
  ],
  answer: "Stock Market Crash"
},
{
  question: "Who was the first woman to win a Nobel Prize?",
  options: [
    "Marie Curie",
    "Florence Nightingale",
    "Rosalind Franklin",
    "Jane Goodall"
  ],
  answer: "Marie Curie"
},
{
  question: "Which empire was centered in modern-day Turkey and lasted over 600 years?",
  options: [
    "Roman Empire",
    "Ottoman Empire",
    "Persian Empire",
    "Mongol Empire"
  ],
  answer: "Ottoman Empire"
},
{
  question: "What was the name of the U.S. policy to stop the spread of communism?",
  options: [
    "Manifest Destiny",
    "Containment",
    "Isolationism",
    "Imperialism"
  ],
  answer: "Containment"
},
{
  question: "Who was the first person to step on the Moon?",
  options: [
    "Buzz Aldrin",
    "Neil Armstrong",
    "Yuri Gagarin",
    "John Glenn"
  ],
  answer: "Neil Armstrong"
},
{
  question: "Which war was known as the 'Great War' before World War II?",
  options: [
    "Civil War",
    "World War I",
    "Crimean War",
    "Cold War"
  ],
  answer: "World War I"
},
{
  question: "Who was the first democratically elected president of South Africa?",
  options: [
    "Desmond Tutu",
    "Nelson Mandela",
    "Thabo Mbeki",
    "Jacob Zuma"
  ],
  answer: "Nelson Mandela"
},
{
  question: "Which city was divided by a wall during the Cold War?",
  options: [
    "Moscow",
    "Berlin",
    "Paris",
    "Warsaw"
  ],
  answer: "Berlin"
},
{
  question: "Who was the first human in space?",
  options: [
    "Neil Armstrong",
    "Yuri Gagarin",
    "Alan Shepard",
    "Buzz Aldrin"
  ],
  answer: "Yuri Gagarin"
},
{
  question: "Which ancient civilization built the Hanging Gardens, one of the Seven Wonders?",
  options: [
    "Babylonians",
    "Romans",
    "Greeks",
    "Egyptians"
  ],
  answer: "Babylonians"
},
{
  question: "Who was assassinated at the Ford’s Theatre in 1865?",
  options: [
    "John F. Kennedy",
    "Abraham Lincoln",
    "James Garfield",
    "William McKinley"
  ],
  answer: "Abraham Lincoln"
},
{
  question: "Which empire ruled India before independence in 1947?",
  options: [
    "French Empire",
    "British Empire",
    "Ottoman Empire",
    "Roman Empire"
  ],
  answer: "British Empire"
},
{
  question: "What event marked the start of World War II in Europe?",
  options: [
    "Bombing of Pearl Harbor",
    "Germany invading Poland",
    "Russian Revolution",
    "Fall of Berlin"
  ],
  answer: "Germany invading Poland"
},
{
  question: "Who was the first female pharaoh of Egypt?",
  options: [
    "Cleopatra",
    "Nefertiti",
    "Hatshepsut",
    "Ankhesenamun"
  ],
  answer: "Hatshepsut"
},
{
  question: "Which country launched the first satellite, Sputnik?",
  options: [
    "United States",
    "China",
    "Soviet Union",
    "Germany"
  ],
  answer: "Soviet Union"
},
{
  question: "Who delivered the Gettysburg Address?",
  options: [
    "George Washington",
    "Abraham Lincoln",
    "Thomas Jefferson",
    "Theodore Roosevelt"
  ],
  answer: "Abraham Lincoln"
},
{
  question: "What year did the Titanic sink?",
  options: [
    "1910",
    "1912",
    "1915",
    "1920"
  ],
  answer: "1912"
},
{
  question: "Which ancient empire was ruled by Cyrus the Great?",
  options: [
    "Roman Empire",
    "Persian Empire",
    "Ottoman Empire",
    "Greek Empire"
  ],
  answer: "Persian Empire"
},
{
  question: "Who was the Soviet leader during the Cuban Missile Crisis?",
  options: [
    "Joseph Stalin",
    "Nikita Khrushchev",
    "Vladimir Lenin",
    "Mikhail Gorbachev"
  ],
  answer: "Nikita Khrushchev"
},
{
  question: "What document officially freed slaves in Confederate states?",
  options: [
    "Bill of Rights",
    "Gettysburg Address",
    "Emancipation Proclamation",
    "Constitution"
  ],
  answer: "Emancipation Proclamation"
},
{
  question: "Who was known as the 'Little Corporal'?",
  options: [
    "Julius Caesar",
    "Napoleon Bonaparte",
    "Alexander the Great",
    "George Patton"
  ],
  answer: "Napoleon Bonaparte"
},
{
  question: "Which war ended with the Treaty of Versailles?",
  options: [
    "World War II",
    "World War I",
    "Civil War",
    "Korean War"
  ],
  answer: "World War I"
},
{
  question: "Who was the first Roman emperor to convert to Christianity?",
  options: [
    "Nero",
    "Augustus",
    "Constantine",
    "Marcus Aurelius"
  ],
  answer: "Constantine"
},
{
  question: "Which civilization created the first known written legal code?",
  options: [
    "Romans",
    "Babylonians",
    "Greeks",
    "Egyptians"
  ],
  answer: "Babylonians"
}
];
