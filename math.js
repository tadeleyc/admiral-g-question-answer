 console.log("math.js loaded"); 
 
 const mathQuestions = [
{
  question: "What is the value of x if 3x + 7 = 31?",
  options: ["6", "7", "8", "9"],
  answer: "8"
},
{
  question: "What is the derivative of x³?",
  options: ["x²", "2x", "3x²", "3x"],
  answer: "3x²"
},
{
  question: "What is 15% of 240?",
  options: ["24", "30", "36", "42"],
  answer: "36"
},
{
  question: "What is the square root of 729?",
  options: ["23", "25", "27", "29"],
  answer: "27"
},
{
  question: "If a triangle has angles 45° and 65°, what is the third angle?",
  options: ["60°", "70°", "80°", "90°"],
  answer: "70°"
},
{
  question: "What is 2⁶?",
  options: ["32", "48", "64", "128"],
  answer: "64"
},
{
  question: "What is the value of π rounded to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  answer: "3.14"
},
{
  question: "What is the slope of the line y = 5x - 9?",
  options: ["-9", "5", "9", "-5"],
  answer: "5"
},
{
  question: "What is the area of a circle with radius 4?",
  options: ["8π", "12π", "16π", "20π"],
  answer: "16π"
},
{
  question: "What is 9 factorial written as 9!?",
  options: ["362880", "40320", "720", "5040"],
  answer: "362880"
},
{
  question: "Solve for x: 2x² = 50.",
  options: ["±3", "±4", "±5", "±6"],
  answer: "±5"
},
{
  question: "What is the next prime number after 47?",
  options: ["49", "51", "53", "55"],
  answer: "53"
},
{
  question: "What is the sum of the interior angles of a hexagon?",
  options: ["540°", "720°", "900°", "1080°"],
  answer: "720°"
},
{
  question: "What is the value of log₁₀(1000)?",
  options: ["2", "3", "4", "10"],
  answer: "3"
},
{
  question: "What is the midpoint between (2, 6) and (8, 10)?",
  options: ["(4, 8)", "(5, 8)", "(6, 8)", "(5, 7)"],
  answer: "(5, 8)"
},
{
  question: "If f(x) = 2x + 3, what is f(7)?",
  options: ["14", "15", "16", "17"],
  answer: "17"
},
{
  question: "What is the value of 7² - 4²?",
  options: ["21", "27", "33", "35"],
  answer: "33"
},
{
  question: "What is the probability of rolling a 6 on a fair six-sided die?",
  options: ["1/2", "1/3", "1/6", "1/12"],
  answer: "1/6"
},
{
  question: "What is the reciprocal of 5/8?",
  options: ["8/5", "5/8", "-5/8", "3/8"],
  answer: "8/5"
},
{
  question: "What is the value of sin(90°)?",
  options: ["0", "1/2", "1", "√2/2"],
  answer: "1"
},
{
  question: "What is the least common multiple of 12 and 18?",
  options: ["24", "30", "36", "48"],
  answer: "36"
},
{
  question: "What is the greatest common factor of 84 and 126?",
  options: ["14", "21", "42", "63"],
  answer: "42"
},
{
  question: "What is the equation of a line with slope 2 and y-intercept -3?",
  options: ["y = 2x - 3", "y = -3x + 2", "y = 3x - 2", "y = 2x + 3"],
  answer: "y = 2x - 3"
},
{
  question: "What is the cube root of 512?",
  options: ["6", "7", "8", "9"],
  answer: "8"
},
{
  question: "What is the value of 4³ + 3²?",
  options: ["64", "72", "73", "81"],
  answer: "73"
},
{
  question: "What is the value of x if 5x - 12 = 38?",
  options: ["8", "9", "10", "11"],
  answer: "10"
},
{
  question: "What is the derivative of 5x²?",
  options: ["5x", "10x", "x²", "2x"],
  answer: "10x"
},
{
  question: "What is the area of a triangle with base 10 and height 8?",
  options: ["30", "35", "40", "45"],
  answer: "40"
},
{
  question: "What is the value of cos(0°)?",
  options: ["0", "1/2", "1", "-1"],
  answer: "1"
},
{
  question: "Solve: x² - 25 = 0",
  options: ["±3", "±4", "±5", "±6"],
  answer: "±5"
},
{
  question: "What is the perimeter of a square with side length 12?",
  options: ["24", "36", "48", "60"],
  answer: "48"
},
{
  question: "What is the value of 8³?",
  options: ["256", "512", "1024", "4096"],
  answer: "512"
},
{
  question: "What is the slope between points (2,3) and (6,11)?",
  options: ["1", "2", "3", "4"],
  answer: "2"
},
{
  question: "What is the sum of the first 10 positive integers?",
  options: ["45", "50", "55", "60"],
  answer: "55"
},
{
  question: "What is the value of tan(45°)?",
  options: ["0", "1", "√2", "2"],
  answer: "1"
},
{
  question: "What is the volume of a cube with side length 5?",
  options: ["25", "75", "100", "125"],
  answer: "125"
},
{
  question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ?",
  options: ["36", "40", "42", "44"],
  answer: "42"
},
{
  question: "What is the value of √196?",
  options: ["12", "13", "14", "15"],
  answer: "14"
},
{
  question: "What is 25% written as a decimal?",
  options: ["0.025", "0.25", "2.5", "25"],
  answer: "0.25"
},
{
  question: "What is the distance between 3 and -5 on a number line?",
  options: ["2", "5", "8", "10"],
  answer: "8"
},
{
  question: "If y = 4x + 1, what is y when x = 6?",
  options: ["21", "23", "25", "27"],
  answer: "25"
},
{
  question: "What is the probability of flipping heads on a fair coin?",
  options: ["1/4", "1/3", "1/2", "1"],
  answer: "1/2"
},
{
  question: "What is the circumference of a circle with radius 7?",
  options: ["7π", "14π", "21π", "28π"],
  answer: "14π"
},
{
  question: "What is the value of 3⁴?",
  options: ["27", "54", "81", "108"],
  answer: "81"
},
{
  question: "What is the solution to |x| = 9?",
  options: ["9", "-9", "±9", "0"],
  answer: "±9"
},
{
  question: "What is the median of 2, 5, 7, 9, 12?",
  options: ["5", "7", "8", "9"],
  answer: "7"
},
{
  question: "What is the value of 100 ÷ (5 × 4)?",
  options: ["4", "5", "10", "20"],
  answer: "5"
},
{
  question: "What is the hypotenuse of a right triangle with legs 6 and 8?",
  options: ["8", "9", "10", "12"],
  answer: "10"
},
{
  question: "What is the equation of a vertical line through x = 7?",
  options: ["y = 7", "x = 7", "x + y = 7", "y = x + 7"],
  answer: "x = 7"
},
{
  question: "What is the value of 11²?",
  options: ["111", "121", "131", "141"],
  answer: "121"
},
{
  question: "What is the value of x in 2x + 9 = 25?",
  options: ["6", "7", "8", "9"],
  answer: "8"
},
{
  question: "What is the derivative of x⁴?",
  options: ["x³", "4x³", "4x²", "x⁴"],
  answer: "4x³"
},
{
  question: "What is the value of 12²?",
  options: ["124", "134", "144", "154"],
  answer: "144"
},
{
  question: "What is sin(30°)?",
  options: ["0", "1/2", "1", "√2"],
  answer: "1/2"
},
{
  question: "Solve for x: 4x - 7 = 29",
  options: ["7", "8", "9", "10"],
  answer: "9"
},
{
  question: "What is the sum of the angles in a triangle?",
  options: ["90°", "180°", "270°", "360°"],
  answer: "180°"
},
{
  question: "What is the value of 7³?",
  options: ["243", "343", "443", "543"],
  answer: "343"
},
{
  question: "What is the probability of rolling an even number on a six-sided die?",
  options: ["1/6", "1/3", "1/2", "2/3"],
  answer: "1/2"
},
{
  question: "What is √625?",
  options: ["20", "25", "30", "35"],
  answer: "25"
},
{
  question: "What is the area of a rectangle with length 9 and width 4?",
  options: ["26", "32", "36", "40"],
  answer: "36"
},
{
  question: "What is the slope of a horizontal line?",
  options: ["0", "1", "Undefined", "-1"],
  answer: "0"
},
{
  question: "What is the least common multiple of 9 and 12?",
  options: ["18", "24", "36", "48"],
  answer: "36"
},
{
  question: "What is 14% of 350?",
  options: ["39", "49", "59", "69"],
  answer: "49"
},
{
  question: "What is the value of 2⁸?",
  options: ["128", "256", "512", "1024"],
  answer: "256"
},
{
  question: "What is the distance between points (1,2) and (4,6)?",
  options: ["3", "4", "5", "6"],
  answer: "5"
},
{
  question: "If f(x) = x² + 2, what is f(4)?",
  options: ["14", "16", "18", "20"],
  answer: "18"
},
{
  question: "What is the cube root of 343?",
  options: ["5", "6", "7", "8"],
  answer: "7"
},
{
  question: "What is the value of 15 × 12?",
  options: ["160", "170", "180", "190"],
  answer: "180"
},
{
  question: "What is the mean of 6, 8, 10, 12, 14?",
  options: ["8", "9", "10", "11"],
  answer: "10"
},
{
  question: "What is the circumference of a circle with diameter 10?",
  options: ["5π", "10π", "15π", "20π"],
  answer: "10π"
},
{
  question: "What is the value of |−13|?",
  options: ["−13", "0", "13", "26"],
  answer: "13"
},
{
  question: "What is the value of 6! ?",
  options: ["120", "360", "720", "840"],
  answer: "720"
},
{
  question: "What is the value of log₁₀(100)?",
  options: ["1", "2", "10", "100"],
  answer: "2"
},
{
  question: "What is the perimeter of a rectangle with sides 7 and 9?",
  options: ["28", "30", "32", "34"],
  answer: "32"
},
{
  question: "What is the equation of a line with slope 3 and y-intercept 2?",
  options: ["y = 3x + 2", "y = 2x + 3", "y = 3x - 2", "y = x + 2"],
  answer: "y = 3x + 2"
},
{
  question: "What is the value of 9²?",
  options: ["72", "81", "91", "99"],
  answer: "81"
},
{
  question: "What is cos(60°)?",
  options: ["0", "1/2", "1", "√3"],
  answer: "1/2"
},
{
  question: "What is the square root of 1024?",
  options: ["30", "31", "32", "33"],
  answer: "32"
},
{
  question: "What is the value of x if 7x = 84?",
  options: ["10", "11", "12", "13"],
  answer: "12"
},
{
  question: "What is the volume of a sphere formula?",
  options: [
    "πr²",
    "2πr",
    "(4/3)πr³",
    "πr³"
  ],
  answer: "(4/3)πr³"
},
{
  question: "What is the next number in the pattern: 1, 4, 9, 16, 25, ?",
  options: ["30", "35", "36", "49"],
  answer: "36"
},
{
  question: "What is the value of 13²?",
  options: ["149", "159", "169", "179"],
  answer: "169"
},
{
  question: "What is tan(0°)?",
  options: ["0", "1", "Undefined", "∞"],
  answer: "0"
},
{
  question: "What is the area formula for a trapezoid?",
  options: [
    "(a+b)h/2",
    "bh",
    "πr²",
    "lw"
  ],
  answer: "(a+b)h/2"
},
{
  question: "What is 18% of 250?",
  options: ["35", "40", "45", "50"],
  answer: "45"
},
{
  question: "What is the greatest common factor of 48 and 72?",
  options: ["12", "18", "24", "36"],
  answer: "24"
},
{
  question: "What is the value of 5³?",
  options: ["25", "75", "100", "125"],
  answer: "125"
},
{
  question: "What is the sum of interior angles of a pentagon?",
  options: ["360°", "540°", "720°", "900°"],
  answer: "540°"
},
{
  question: "What is the value of x in x² = 81?",
  options: ["9", "-9", "±9", "8"],
  answer: "±9"
},
{
  question: "What is the probability of getting tails on a coin toss?",
  options: ["1/4", "1/3", "1/2", "2/3"],
  answer: "1/2"
},
{
  question: "What is the midpoint of (4,2) and (8,6)?",
  options: ["(5,4)", "(6,4)", "(6,5)", "(7,4)"],
  answer: "(6,4)"
},
{
  question: "What is the derivative of 9x?",
  options: ["9", "x", "9x", "0"],
  answer: "9"
},
{
  question: "What is the value of 17 × 8?",
  options: ["126", "136", "146", "156"],
  answer: "136"
},
{
  question: "What is the perimeter of a triangle with sides 8, 9, and 10?",
  options: ["25", "26", "27", "28"],
  answer: "27"
},
{
  question: "What is the value of √441?",
  options: ["19", "20", "21", "22"],
  answer: "21"
},
{
  question: "What is the equation for the Pythagorean theorem?",
  options: [
    "a + b = c",
    "a² + b² = c²",
    "ab = c²",
    "2a + 2b = c"
  ],
  answer: "a² + b² = c²"
},
{
  question: "What is 30% written as a decimal?",
  options: ["0.03", "0.3", "3.0", "30"],
  answer: "0.3"
},
{
  question: "What is the value of 14²?",
  options: ["176", "186", "196", "206"],
  answer: "196"
},
{
  question: "What is the slope of a vertical line?",
  options: ["0", "1", "Undefined", "-1"],
  answer: "Undefined"
},
{
  question: "What is the value of 20²?",
  options: ["200", "300", "400", "500"],
  answer: "400"
}
];