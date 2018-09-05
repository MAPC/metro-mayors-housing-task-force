const wrap = (tagName, content) => `&lt;${tagName}&gt;${content}&lt;/${tagName}&gt;`;
const br = "&lt;br/&gt;";

const darkHeader = true;
const headerShadow = true;

module.exports = [
  {
    title: 'Housing Metro Boston',
    image: 'colorful-houses.jpeg',
    content: 'METROPOLITAN AREA PLANNING COUNCIL (2018)',
    credit: {
      location: 'Charlestown, Boston',
      artist: 'Qusai Akoud',
    },
  },
  {
    image: 'birds-eye-1.jpg',
    content: `Metro Boston's housing prices are among the ${wrap('b', 'highest in the nation.')}`,
    headerShadow,
  },
  {
    image: 'residential-snow.jpg',
    content: "Increasingly, residents struggle to find housing they can afford to buy or rent.",
    credit: {
      artist: 'Larry Tseng',
    },
    headerShadow,
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Some are being priced out of their neighborhoods.",
    headerShadow,
  },
  {
    image: 'commuter-rail.jpg',
    content: "This is hardest for low-income residents who face fewer housing options and longer commutes to get to their jobs.",
    headerShadow,
  },
  {
    image: 'island-1.jpg',
    content: "The high cost of housing impacts our region's economy: workers are moving to other cities to find housing they can afford.",
    credit: {
      artist: 'Osman Rana',
    },
  },
  {
    chart: '',
    content: "Our region is growing fast: In the last the last decade, 45% of Massachusetts job growth has been concentrated in Metro Boston's inner 15 communities.",
  },
  {
    chart: '',
    content: "With that growth, our region is gaining jobs and workers faster than we are building new homes.",
  },
  {
    image: 'skyline-1.jpg',
    content: "The Innovation Economy is attracting highly educated workers with high incomes, who can pay more for housing than others.",
    credit: {
      artist: 'Qusai Akoud',
    },
  },
  {
    content: "This drives up costs for everyone.",
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Baby boomers are retiring (800k a year in Massachusetts). Job vacancies are opening to younger generations.",
    headerShadow,
  },
  {
    image: 'hedge-garden.jpg',
    content: "Many Seniors are hoping to stay in their communities after retirement, but can't afford to downsize. They remain at home which limits housing open to new workers.",
    credit: {
      artist: 'Joyce Huis',
    },
    headerShadow,
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Speculative investment and the conversion of residential homes to hotel-like home sharing takes units off the rental market, depleting our already low supply.",
    headerShadow,
  },
  {
    content: "So why don't we just build more homes?",
  },
  {
    chart: '',
    content: "The cost of building is higher than ever.",
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Some local laws overly restrict the type and amount of housing allowed.",
    headerShadow,
  },
  {
    content: "Time consuming permitting processes and inconsistent approval processes are too risky to some real estate developers",
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Community concerns about too much density or lack of affordable housing can stall development completely.",
    headerShadow,
  },
  {
    chart: '',
    content: "But we know housing demand will only continue to grow. More workers will need homes.",
  },
  {
    image: 'birds-eye-1.jpg',
    content: "To meet this demand, we must build 188,000 more units by 2030.",
    headerShadow,
  },
  {
    image: 'birds-eye-1.jpg',
    content: "Housing demand will be felt across our region. This isn't one type of housing, or in a single community.",
    headerShadow,
  },
  {
    content: "No one community can create a solution alone.",
  },
  {
    image: 'birds-eye-1.jpg',
    content: "All our cities and towns must work together to meet the needs of today and anticipate the needs of tomorrow.",
    headerShadow,
  },
  {
    image: 'mayors.jpg',
    content: "The 15 leaders of the Metro Mayors Coalition have pledged to build 180k homes by 2030.",
  },
  {
    content: "This will require strong partnership between the business community and public sector.",
  },
  {
    image: 'river-houses.jpg',
    content: `${wrap('b', 'We will need')}${br}good planning${br}good governance${br}more affordable units${br}and protection for existing tenants.`,
    credit: {
      artist: 'Qusai Akoud',
    },
    darkHeader,
  },
  {
    image: 'skyline-2.jpg',
    content: wrap('b', "Let's get started today"),
    credit: {
      artist: 'Qusai Akoud',
    },
  },
];
