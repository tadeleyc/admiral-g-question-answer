console.log("business.js loaded");

var businessQuestions = [
{
  question: "What does ROI stand for in business?",
  options: ["Return on Investment", "Rate of Income", "Revenue Operating Index", "Risk of Inflation"],
  answer: "Return on Investment"
},
{
  question: "What is the main purpose of a business plan?",
  options: ["To describe strategy and goals", "To replace taxes", "To avoid marketing", "To remove competition"],
  answer: "To describe strategy and goals"
},
{
  question: "What does B2B mean?",
  options: ["Business to Business", "Buyer to Buyer", "Bank to Business", "Brand to Buyer"],
  answer: "Business to Business"
},
{
  question: "What does B2C mean?",
  options: ["Business to Customer", "Business to Consumer", "Brand to Company", "Buyer to Corporation"],
  answer: "Business to Consumer"
},
{
  question: "What is gross profit?",
  options: ["Revenue minus cost of goods sold", "Revenue minus rent", "Total cash in bank", "Profit after taxes only"],
  answer: "Revenue minus cost of goods sold"
},
{
  question: "What is net profit?",
  options: ["Profit after all expenses", "Total sales before costs", "Money borrowed", "Inventory value"],
  answer: "Profit after all expenses"
},
{
  question: "What does KPI stand for?",
  options: ["Key Performance Indicator", "Knowledge Profit Index", "Key Payment Income", "Known Product Idea"],
  answer: "Key Performance Indicator"
},
{
  question: "What is a startup runway?",
  options: ["How long a company can operate before running out of cash", "A launch event stage", "A product shelf", "A hiring process"],
  answer: "How long a company can operate before running out of cash"
},
{
  question: "What is market segmentation?",
  options: ["Dividing customers into groups", "Cutting product prices", "Removing competitors", "Selling only one product"],
  answer: "Dividing customers into groups"
},
{
  question: "What is a target market?",
  options: ["The specific group a business wants to serve", "Any random buyer", "Only wealthy customers", "Only competitors"],
  answer: "The specific group a business wants to serve"
},
{
  question: "What is customer acquisition cost?",
  options: ["Cost to gain one customer", "Cost to make one product", "Cost to fire an employee", "Cost of office rent"],
  answer: "Cost to gain one customer"
},
{
  question: "What does LTV mean in business?",
  options: ["Lifetime Value", "Loan Transfer Value", "Local Tax Volume", "Legal Trade Verification"],
  answer: "Lifetime Value"
},
{
  question: "What is churn rate?",
  options: ["Rate customers stop using a product", "Rate of hiring", "Rate of inflation", "Rate of inventory growth"],
  answer: "Rate customers stop using a product"
},
{
  question: "What is a balance sheet?",
  options: ["A financial statement showing assets, liabilities, and equity", "A list of employees", "A marketing calendar", "A product catalog"],
  answer: "A financial statement showing assets, liabilities, and equity"
},
{
  question: "What is cash flow?",
  options: ["Movement of money in and out of a business", "Only profit", "Only expenses", "Employee salary total"],
  answer: "Movement of money in and out of a business"
},
{
  question: "What is equity in a company?",
  options: ["Ownership value", "Monthly expense", "Tax penalty", "Loan interest"],
  answer: "Ownership value"
},
{
  question: "What is a liability?",
  options: ["A debt or obligation", "A company logo", "A loyal customer", "A product feature"],
  answer: "A debt or obligation"
},
{
  question: "What is an asset?",
  options: ["Something valuable owned by a business", "A debt owed", "A failed campaign", "A tax bill"],
  answer: "Something valuable owned by a business"
},
{
  question: "What is depreciation?",
  options: ["Loss of asset value over time", "Increase in sales", "Hiring new workers", "Raising prices"],
  answer: "Loss of asset value over time"
},
{
  question: "What does EBITDA stand for?",
  options: [
    "Earnings Before Interest, Taxes, Depreciation, and Amortization",
    "Estimated Business Income During Tax Assessment",
    "Equity Before Investment Trade and Debt Accounting",
    "Earnings Built Inside Total Digital Assets"
  ],
  answer: "Earnings Before Interest, Taxes, Depreciation, and Amortization"
},
{
  question: "What is a monopoly?",
  options: ["A market dominated by one seller", "A market with many equal sellers", "A failed product", "A tax rule"],
  answer: "A market dominated by one seller"
},
{
  question: "What is an oligopoly?",
  options: ["A market dominated by a few large firms", "A market with one seller", "A charity system", "A business license"],
  answer: "A market dominated by a few large firms"
},
{
  question: "What is price elasticity of demand?",
  options: ["How demand changes when price changes", "How taxes change", "How fast employees work", "How assets depreciate"],
  answer: "How demand changes when price changes"
},
{
  question: "What is a value proposition?",
  options: ["Why customers should choose your product", "A legal punishment", "A payroll sheet", "A tax deduction"],
  answer: "Why customers should choose your product"
},
{
  question: "What is a competitive advantage?",
  options: ["A strength that helps a company outperform rivals", "A random discount", "A government fine", "A business loan"],
  answer: "A strength that helps a company outperform rivals"
},
{
  question: "What is break-even point?",
  options: [
    "When total revenue equals total costs",
    "When profit doubles",
    "When taxes are paid",
    "When inventory runs out"
  ],
  answer: "When total revenue equals total costs"
},
{
  question: "What is a dividend?",
  options: [
    "A payment made to shareholders",
    "A company loan",
    "A tax refund",
    "An employee bonus"
  ],
  answer: "A payment made to shareholders"
},
{
  question: "What is a stock?",
  options: [
    "Ownership in a company",
    "A business expense",
    "A tax document",
    "A loan agreement"
  ],
  answer: "Ownership in a company"
},
{
  question: "What is a bond?",
  options: [
    "A loan made to an organization",
    "A share of ownership",
    "A business license",
    "A savings account"
  ],
  answer: "A loan made to an organization"
},
{
  question: "What is diversification?",
  options: [
    "Spreading risk across investments",
    "Raising prices",
    "Hiring more workers",
    "Reducing inventory"
  ],
  answer: "Spreading risk across investments"
},
{
  question: "What is a franchise?",
  options: [
    "A business operating under another company's brand",
    "A government agency",
    "A nonprofit organization",
    "A stock exchange"
  ],
  answer: "A business operating under another company's brand"
},
{
  question: "What is a merger?",
  options: [
    "Two companies combining into one",
    "A company bankruptcy",
    "A product launch",
    "A tax increase"
  ],
  answer: "Two companies combining into one"
},
{
  question: "What is an acquisition?",
  options: [
    "One company purchasing another",
    "A hiring campaign",
    "A product recall",
    "A tax audit"
  ],
  answer: "One company purchasing another"
},
{
  question: "What is brand equity?",
  options: [
    "The value of a brand in consumers' minds",
    "The value of office furniture",
    "Employee salaries",
    "Company debt"
  ],
  answer: "The value of a brand in consumers' minds"
},
{
  question: "What is market share?",
  options: [
    "A company's percentage of total market sales",
    "A company's profit margin",
    "A company's employee count",
    "A company's tax rate"
  ],
  answer: "A company's percentage of total market sales"
},
{
  question: "What is a supply chain?",
  options: [
    "The network involved in producing and delivering products",
    "A chain of stores",
    "A type of loan",
    "A tax strategy"
  ],
  answer: "The network involved in producing and delivering products"
},
{
  question: "What is outsourcing?",
  options: [
    "Hiring external organizations for work",
    "Selling products abroad",
    "Opening a new office",
    "Raising capital"
  ],
  answer: "Hiring external organizations for work"
},
{
  question: "What is a sole proprietorship?",
  options: [
    "A business owned by one person",
    "A business owned by shareholders",
    "A nonprofit organization",
    "A government agency"
  ],
  answer: "A business owned by one person"
},
{
  question: "What is a partnership?",
  options: [
    "A business owned by two or more people",
    "A stock exchange",
    "A tax document",
    "A government contract"
  ],
  answer: "A business owned by two or more people"
},
{
  question: "What is an LLC?",
  options: [
    "Limited Liability Company",
    "Large Legal Corporation",
    "Limited Loan Contract",
    "Local Licensing Committee"
  ],
  answer: "Limited Liability Company"
},
{
  question: "What is a corporation?",
  options: [
    "A separate legal entity owned by shareholders",
    "A government office",
    "A nonprofit only",
    "A tax agency"
  ],
  answer: "A separate legal entity owned by shareholders"
},
{
  question: "What is venture capital?",
  options: [
    "Investment in high-growth startups",
    "Government funding",
    "Personal savings",
    "Employee wages"
  ],
  answer: "Investment in high-growth startups"
},
{
  question: "What is an IPO?",
  options: [
    "Initial Public Offering",
    "Internal Profit Operation",
    "Investment Protection Order",
    "International Product Organization"
  ],
  answer: "Initial Public Offering"
},
{
  question: "What is retained earnings?",
  options: [
    "Profits kept in the business",
    "Money borrowed from banks",
    "Tax refunds",
    "Employee compensation"
  ],
  answer: "Profits kept in the business"
},
{
  question: "What is a profit margin?",
  options: [
    "Profit as a percentage of revenue",
    "Revenue minus taxes",
    "Employee productivity",
    "Inventory turnover"
  ],
  answer: "Profit as a percentage of revenue"
},
{
  question: "What is goodwill in accounting?",
  options: [
    "An intangible asset from acquisitions",
    "Employee morale",
    "Cash reserves",
    "Office supplies"
  ],
  answer: "An intangible asset from acquisitions"
},
{
  question: "What is vertical integration?",
  options: [
    "Controlling multiple stages of production",
    "Hiring more managers",
    "Selling internationally",
    "Increasing prices"
  ],
  answer: "Controlling multiple stages of production"
},
{
  question: "What is horizontal integration?",
  options: [
    "Acquiring competitors at the same stage",
    "Reducing production",
    "Increasing debt",
    "Opening franchises"
  ],
  answer: "Acquiring competitors at the same stage"
},
{
  question: "What is working capital?",
  options: [
    "Current assets minus current liabilities",
    "Company revenue",
    "Long-term debt",
    "Shareholder equity"
  ],
  answer: "Current assets minus current liabilities"
},
{
  question: "What is inflation?",
  options: [
    "A general increase in prices over time",
    "A decrease in profits",
    "A stock market crash",
    "A reduction in taxes"
  ],
  answer: "A general increase in prices over time"
},
{
  question: "What is deflation?",
  options: [
    "A general decrease in prices",
    "An increase in taxes",
    "A rise in interest rates",
    "A business merger"
  ],
  answer: "A general decrease in prices"
},
{
  question: "What is a recession?",
  options: [
    "A significant decline in economic activity",
    "A stock split",
    "A business acquisition",
    "A tax refund"
  ],
  answer: "A significant decline in economic activity"
},
{
  question: "What is GDP?",
  options: [
    "Gross Domestic Product",
    "General Development Plan",
    "Global Debt Percentage",
    "Government Distribution Program"
  ],
  answer: "Gross Domestic Product"
},
{
  question: "What is economies of scale?",
  options: [
    "Lower costs due to increased production",
    "Higher taxes on large businesses",
    "Reduced product quality",
    "Fewer employees"
  ],
  answer: "Lower costs due to increased production"
},
{
  question: "What is a SWOT analysis?",
  options: [
    "Strengths, Weaknesses, Opportunities, Threats",
    "Sales, Work, Operations, Taxes",
    "Strategy, Wealth, Output, Timing",
    "Stocks, Wages, Orders, Trade"
  ],
  answer: "Strengths, Weaknesses, Opportunities, Threats"
},
{
  question: "What is benchmarking?",
  options: [
    "Comparing performance against industry standards",
    "Measuring employee height",
    "Tracking inventory",
    "Creating advertisements"
  ],
  answer: "Comparing performance against industry standards"
},
{
  question: "What is customer retention?",
  options: [
    "Keeping existing customers",
    "Hiring new employees",
    "Reducing inventory",
    "Increasing taxes"
  ],
  answer: "Keeping existing customers"
},
{
  question: "What is a mission statement?",
  options: [
    "A company's purpose and goals",
    "A tax report",
    "A legal contract",
    "A product manual"
  ],
  answer: "A company's purpose and goals"
},
{
  question: "What is a vision statement?",
  options: [
    "A company's desired future state",
    "A sales report",
    "An employee handbook",
    "A balance sheet"
  ],
  answer: "A company's desired future state"
},
{
  question: "What is a stakeholder?",
  options: [
    "Anyone affected by a business",
    "Only shareholders",
    "Only employees",
    "Only customers"
  ],
  answer: "Anyone affected by a business"
},
{
  question: "What is corporate social responsibility (CSR)?",
  options: [
    "A company's commitment to ethical practices",
    "A tax exemption",
    "A sales strategy",
    "A loan agreement"
  ],
  answer: "A company's commitment to ethical practices"
},
{
  question: "What is market penetration?",
  options: [
    "Increasing sales in an existing market",
    "Entering a new country",
    "Buying competitors",
    "Reducing prices permanently"
  ],
  answer: "Increasing sales in an existing market"
},
{
  question: "What is product diversification?",
  options: [
    "Adding new products or services",
    "Reducing product lines",
    "Increasing taxes",
    "Closing locations"
  ],
  answer: "Adding new products or services"
},
{
  question: "What is a hostile takeover?",
  options: [
    "Acquiring a company against management's wishes",
    "A friendly merger",
    "A bankruptcy filing",
    "A stock split"
  ],
  answer: "Acquiring a company against management's wishes"
},
{
  question: "What is liquidity?",
  options: [
    "Ability to meet short-term obligations",
    "Amount of inventory",
    "Number of employees",
    "Annual revenue"
  ],
  answer: "Ability to meet short-term obligations"
},
{
  question: "What is accounts receivable?",
  options: [
    "Money owed to a company",
    "Money a company owes",
    "Cash in a bank account",
    "Inventory value"
  ],
  answer: "Money owed to a company"
},
{
  question: "What is accounts payable?",
  options: [
    "Money a company owes",
    "Money customers owe",
    "Company profits",
    "Tax refunds"
  ],
  answer: "Money a company owes"
},
{
  question: "What is inventory turnover?",
  options: [
    "How often inventory is sold and replaced",
    "Employee replacement rate",
    "Office relocation frequency",
    "Customer return rate"
  ],
  answer: "How often inventory is sold and replaced"
},
{
  question: "What is a trademark?",
  options: [
    "A protected brand identifier",
    "A company building",
    "A tax document",
    "A loan agreement"
  ],
  answer: "A protected brand identifier"
},
{
  question: "What is a patent?",
  options: [
    "Protection for an invention",
    "A business license",
    "A trademark renewal",
    "A stock certificate"
  ],
  answer: "Protection for an invention"
},
{
  question: "What is copyright?",
  options: [
    "Protection for original creative works",
    "A loan contract",
    "A sales strategy",
    "A tax benefit"
  ],
  answer: "Protection for original creative works"
},
{
  question: "What is a franchise fee?",
  options: [
    "Payment to use a franchisor's brand",
    "A government tax",
    "Employee wages",
    "Inventory cost"
  ],
  answer: "Payment to use a franchisor's brand"
},
{
  question: "What is supply and demand?",
  options: [
    "Economic forces affecting price and quantity",
    "A marketing strategy",
    "A tax system",
    "An accounting rule"
  ],
  answer: "Economic forces affecting price and quantity"
},
{
  question: "What is a niche market?",
  options: [
    "A specialized segment of customers",
    "A global market",
    "A stock exchange",
    "A government agency"
  ],
  answer: "A specialized segment of customers"
},
{
  question: "What is entrepreneurship?",
  options: [
    "Creating and managing a business venture",
    "Working for a government",
    "Investing only in stocks",
    "Managing taxes"
  ],
  answer: "Creating and managing a business venture"
},
{
  question: "What is a business model?",
  options: [
    "How a company creates and earns revenue",
    "A type of tax form",
    "An employee handbook",
    "A financial statement"
  ],
  answer: "How a company creates and earns revenue"
},
{
  question: "What is recurring revenue?",
  options: [
    "Income received repeatedly over time",
    "One-time sales income",
    "Government grants",
    "Tax refunds"
  ],
  answer: "Income received repeatedly over time"
},
{
  question: "What is a subscription business model?",
  options: [
    "Customers pay regularly for access",
    "Products are always free",
    "Only one-time purchases are allowed",
    "Products are auctioned"
  ],
  answer: "Customers pay regularly for access"
},
{
  question: "What is a pivot in a startup?",
  options: [
    "A major change in business strategy",
    "A company logo redesign",
    "A tax payment",
    "A stock purchase"
  ],
  answer: "A major change in business strategy"
},
{
  question: "What is due diligence?",
  options: [
    "Investigation before a business deal",
    "Creating advertisements",
    "Hiring employees",
    "Filing taxes"
  ],
  answer: "Investigation before a business deal"
},
{
  question: "What is a shareholder?",
  options: [
    "A person who owns company stock",
    "A company employee",
    "A customer",
    "A supplier"
  ],
  answer: "A person who owns company stock"
},
{
  question: "What is a bear market?",
  options: [
    "A prolonged decline in stock prices",
    "A rapid increase in stock prices",
    "A strong economy",
    "A government policy"
  ],
  answer: "A prolonged decline in stock prices"
},
{
  question: "What is a bull market?",
  options: [
    "A prolonged rise in stock prices",
    "A stock market crash",
    "A recession",
    "A tax increase"
  ],
  answer: "A prolonged rise in stock prices"
},
{
  question: "What is market capitalization?",
  options: [
    "Total value of a company's shares",
    "Company revenue",
    "Company debt",
    "Inventory value"
  ],
  answer: "Total value of a company's shares"
},
{
  question: "What is a stock split?",
  options: [
    "Increasing shares while reducing price per share",
    "Selling company assets",
    "Closing a company",
    "Raising taxes"
  ],
  answer: "Increasing shares while reducing price per share"
},
{
  question: "What is a dividend yield?",
  options: [
    "Annual dividends divided by stock price",
    "Company profit margin",
    "Revenue growth rate",
    "Employee productivity"
  ],
  answer: "Annual dividends divided by stock price"
},
{
  question: "What is venture debt?",
  options: [
    "Debt financing for startups",
    "Personal credit card debt",
    "Government grants",
    "Stock ownership"
  ],
  answer: "Debt financing for startups"
},
{
  question: "What is a unicorn startup?",
  options: [
    "A startup valued at over $1 billion",
    "A company with one employee",
    "A nonprofit organization",
    "A government agency"
  ],
  answer: "A startup valued at over $1 billion"
},
{
  question: "What is bootstrapping?",
  options: [
    "Building a business using personal resources",
    "Borrowing from investors",
    "Taking government grants",
    "Selling stock publicly"
  ],
  answer: "Building a business using personal resources"
},
{
  question: "What is a minimum viable product (MVP)?",
  options: [
    "The simplest version of a product",
    "The most expensive product version",
    "A product with every feature",
    "A discontinued product"
  ],
  answer: "The simplest version of a product"
},
{
  question: "What is customer lifetime value (CLV)?",
  options: [
    "Total value a customer brings over time",
    "The customer's age",
    "The cost of acquiring a customer",
    "The customer's annual salary"
  ],
  answer: "Total value a customer brings over time"
},
{
  question: "What is a sales funnel?",
  options: [
    "The stages customers move through before buying",
    "A manufacturing process",
    "A tax system",
    "An accounting report"
  ],
  answer: "The stages customers move through before buying"
},
{
  question: "What is lead generation?",
  options: [
    "Finding potential customers",
    "Hiring employees",
    "Buying inventory",
    "Paying taxes"
  ],
  answer: "Finding potential customers"
},
{
  question: "What is conversion rate?",
  options: [
    "Percentage of visitors who take an action",
    "Interest earned on savings",
    "Employee turnover",
    "Inventory sold"
  ],
  answer: "Percentage of visitors who take an action"
},
{
  question: "What is customer loyalty?",
  options: [
    "Likelihood customers continue buying",
    "Number of employees",
    "Company debt level",
    "Tax compliance"
  ],
  answer: "Likelihood customers continue buying"
},
{
  question: "What is a strategic alliance?",
  options: [
    "Cooperation between companies for mutual benefit",
    "A company merger",
    "A stock exchange",
    "A tax agreement"
  ],
  answer: "Cooperation between companies for mutual benefit"
},
{
  question: "What is a hostile merger?",
  options: [
    "A merger opposed by one company's management",
    "A friendly acquisition",
    "A government policy",
    "A stock split"
  ],
  answer: "A merger opposed by one company's management"
},
{
  question: "What is market research?",
  options: [
    "Gathering information about customers and markets",
    "Filing tax forms",
    "Manufacturing products",
    "Paying employees"
  ],
  answer: "Gathering information about customers and markets"
},
{
  question: "What is risk management?",
  options: [
    "Identifying and reducing potential losses",
    "Increasing expenses",
    "Hiring more staff",
    "Raising prices"
  ],
  answer: "Identifying and reducing potential losses"
},
{
  question: "What is scalability?",
  options: [
    "Ability to grow without major cost increases",
    "Reducing company size",
    "Selling company assets",
    "Lowering product quality"
  ],
  answer: "Ability to grow without major cost increases"
}
];