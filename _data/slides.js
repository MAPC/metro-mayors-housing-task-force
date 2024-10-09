const wrap = (tagName, content) => `&lt;${tagName}&gt;${content}&lt;/${tagName}&gt;`;
const br = "&lt;br/&gt;";

const darkHeader = true;

// Style classes
const BG = "text-background";
const SHADOW = "text-shadow";
const BIG = "size-large";
const SMALL = "size-small";
const ITALIC = "style-italic";
const BOLD = "weight-bold";
const LIGHT = "weight-light";
const BLUE = "color-blue";

const slides = [
  {
    content: [
      {
        text: "Housing Metro Boston",
        style: [BIG, BOLD],
      },
      {
        text: "An Interactive Story by the METROPOLITAN AREA PLANNING COUNCIL",
      },
    ],
    background: "colorful-houses.jpg",
    credit: {
      location: "Charlestown, Boston",
      artist: "Qusai Akoud",
    },
  },
  {
    content: [
      {
        text: "Housing prices in Metro Boston are some of",
        style: [BG, LIGHT, ITALIC],
      },
      {
        text: "the highest in the nation.",
        style: [BG, BIG, BOLD, ITALIC],
      },
    ],
    background: "housing.jpg",
  },
  {
    content: [
      {
        text: '"At what point will rent stop going up? And, when will it begin to hurt the city?',
        style: [LIGHT, ITALIC],
      },
      {
        text: 'I know some young, talented people who have already left."',
        style: [LIGHT, ITALIC],
      },
      {
        text: "Silvia and her husband have seen the rent for their one-bedroom apartment more than double over the past 15 years",
        style: [SMALL, ITALIC],
      },
    ],
    background: "silvia.jpg",
  },
  {
    content: [
      {
        text: "Residents are being priced out of the neighborhoods where they live",
        style: [BG, BOLD, ITALIC],
      },
    ],
    background: "somerville.png",
  },
  {
    content: [
      {
        text: '"My job is keeping me close to the city. My upbringing, my family. I have friends who live here, and my church is here.',
        style: [LIGHT, ITALIC],
      },
      {
        // eslint-disable-next-line max-len
        text: 'I have to come to the city here every day. But it’s difficult living away from the city and trying to maintain those relationships. It’s exhausting and expensive having to go back-and-forth."',
        style: [LIGHT, ITALIC],
      },
      {
        text: "Edmund, a renter and musician.",
        style: [SMALL, ITALIC],
      },
    ],
    background: "edmund.jpg",
  },
  {
    content: [
      {
        text: "Many seniors want to stay in their communities after retirement",
        style: [BG, BIG, BOLD, ITALIC],
      },
    ],
    background: "natick.jpg",
  },
  {
    content: [
      {
        text: "Many seniors want to stay in their communities after retirement",
        style: [BG, BIG, BOLD, ITALIC],
      },
      {
        text: "But have few options to downsize, or find a new home that meets their financial or physical needs.",
        style: [BG, ITALIC],
      },
    ],
    background: "natick.jpg",
  },
  {
    content: [
      {
        text: "\"I've lived in this neighborhood since 1954.",
        style: [LIGHT, ITALIC, SHADOW],
      },
      {
        text: 'The neighborhood has changed drastically. Most of my neighbors have moved away. The prices on houses are becoming ridiculous. So is the rent."',
        style: [LIGHT, ITALIC, SHADOW],
      },
      {
        text: "Joseph, owner of a multi-family home, with a photo of his late wife in their backyard",
        style: [SMALL, ITALIC, SHADOW],
      },
    ],
    background: "joseph.jpg",
  },
  {
    content: [
      {
        text: "Our regional economy is booming.",
        style: [BG, BIG, BOLD, ITALIC],
      },
    ],
    background: "boston-seaport.jpg",
  },
  {
    content: [
      {
        text: "Our regional economy is booming.",
        style: [BG, BIG, BOLD, ITALIC],
      },
      {
        text: "In the last decade, 45% of Massachusetts' job growth has been concentrated in our inner 15 cities and towns.",
        style: [BG, ITALIC],
      },
    ],
    background: "boston-seaport.jpg",
  },
  {
    darkHeader,
    content: [
      {
        text: "Our innovation economy attracts highly educated workers",
        style: [BG, BIG, BOLD, ITALIC],
      },
      {
        text: "who can pay more for housing",
        style: [BG, BIG, ITALIC],
      },
    ],
    background: "innovation-economy.jpg",
  },
  {
    darkHeader,
    content: [
      {
        text: "...for a limited supply of available homes.",
        style: [BLUE, BIG, ITALIC],
      },
    ],
    background: "yellow",
  },
  {
    content: [
      {
        text: '"We made an offer on a house that received 12 other offers, and it sold for well above asking price.',
        style: [LIGHT, ITALIC],
      },
      {
        text: "We thought the market was competitive then, but it wasn't nearly as competitive as it is now.\"",
        style: [LIGHT, ITALIC],
      },
      {
        text: "Jean and her husband purchased their home in 2013 to fit their growing family",
        style: [SMALL, ITALIC],
      },
    ],
    background: "jean.jpg",
  },
  {
    darkHeader,
    content: [
      {
        text: `But we are gaining jobs and workers ${wrap("u", "faster")} than we are building new homes.`,
        style: [BLUE, BIG, BOLD, ITALIC],
      },
    ],
    background: "yellow",
    image: "past-growth-chart.png",
  },
  {
    content: [
      {
        text: "So why don't we just",
        style: [BG, ITALIC],
      },
      {
        text: "build more homes?",
        style: [BG, BIG, BOLD, ITALIC],
      },
    ],
    background: "doors.jpg",
  },
  {
    content: [
      {
        text: "The cost of development is higher than ever.",
        style: [BG, BIG, BOLD, ITALIC],
      },
      {
        text: "It costs $410,000 to build a 1,500 square foot, 2-bedroom apartment.",
        style: [BG, BOLD, ITALIC],
      },
    ],
    background: "construction.jpg",
  },
  {
    darkHeader,
    content: [
      {
        text: "Outdated laws may overly restrict the type and amount of housing allowed.",
        style: [BLUE, BIG, BOLD, ITALIC],
      },
    ],
    background: "yellow",
  },
  {
    content: [
      {
        text: "Time consuming and uncertain approval processes are",
        style: [LIGHT, ITALIC, SHADOW],
      },
      {
        text: "too risky",
        style: [BIG, BOLD, ITALIC, SHADOW],
      },
      {
        text: "for some real estate developers.",
        style: [LIGHT, ITALIC, SHADOW],
      },
    ],
    background: "sky-cranes.png",
  },
  {
    darkHeader,
    content: [
      {
        text: "Community concerns about too much density, or not enough affordable housing",
        style: [BLUE, LIGHT, ITALIC],
      },
      {
        text: "can stall development completely.",
        style: [BLUE, BIG, BOLD, ITALIC],
      },
    ],
    background: "tallbuilding.png",
  },
  {
    content: [
      {
        text: `We know housing demand will continue to grow. ${br}New workers will need homes.`,
        style: [BIG, BOLD, ITALIC],
      },
    ],
    background: "blue",
  },
  {
    darkHeader,
    content: [
      {
        text: "To meet housing demand, we are committed to building 185,000 more units by 2030.",
        style: [BLUE, BIG, BOLD, ITALIC],
      },
      {
        text: "See how we got to this number.",
        style: [BLUE, ITALIC],
        link: "/assets/documents/MAPC_MMC_Methods.pdf",
      },
    ],
    background: "yellow",
    image: "hu-demand-chart.png",
  },
  {
    darkHeader,
    content: [
      {
        text: "Housing demand will be felt all across the region. It won't happen in one place or limited to a specific type of home.",
        style: [BOLD, ITALIC, BLUE],
      },
    ],
  },
  {
    content: [
      {
        text: "All cities and towns",
        style: [BIG, BOLD, ITALIC],
      },
      {
        text: "must work together to meet the needs of today and anticipate the needs of tomorrow.",
        style: [BOLD, ITALIC],
      },
    ],
    background: "blue",
  },
  {
    darkHeader,
    content: [
      {
        text: "Together, a coalition of leaders in 15 communities of Metro Boston have pledged to build 185,000 homes by 2030.",
        style: [BOLD, BLUE, ITALIC],
      },
      {
        text: "Read about the Metro Mayor's Coalition.",
        style: [BLUE, ITALIC, SMALL],
        link: "https://www.mapc.org/get-involved/coalitions/mmc/",
      },
    ],
    image: "mayors.png",
  },
  {
    darkHeader,
    content: [
      {
        text: "This will require strong support",
        style: [BG, BIG, BOLD, ITALIC],
      },
      {
        text: "From our residents",
        style: [BG, BOLD, ITALIC],
      },
      {
        text: "From our community leaders",
        style: [BG, BOLD, ITALIC],
      },
      {
        text: "From our business leaders",
        style: [BG, BOLD, ITALIC],
      },
      {
        text: "And from our governments",
        style: [BG, BOLD, ITALIC],
      },
    ],
  },
  {
    darkHeader,
    content: [
      {
        text: "We will need:",
        style: [BLUE, ITALIC],
      },
    ],
    background: "yellow",
  },
  {
    darkHeader,
    content: [
      {
        text: "We will need:",
        style: [BLUE, ITALIC],
      },
      {
        text: "Good governance.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
    ],
    background: "yellow",
  },
  {
    darkHeader,
    content: [
      {
        text: "We will need:",
        style: [BLUE, ITALIC],
      },
      {
        text: "Good governance.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "Good planning.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
    ],
    background: "yellow",
  },
  {
    darkHeader,
    content: [
      {
        text: "We will need:",
        style: [BLUE, ITALIC],
      },
      {
        text: "Good governance.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "Good planning.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "More affordable units.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
    ],
    background: "yellow",
  },
  {
    darkHeader,
    content: [
      {
        text: "We will need:",
        style: [BLUE, ITALIC],
      },
      {
        text: "Good governance.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "Good planning.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "More affordable units.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
      {
        text: "And protections for tenants.",
        style: [BLUE, ITALIC, BIG, BOLD],
      },
    ],
    background: "yellow",
  },
  {
    darkHeader,
    content: [
      {
        text: "Let's get started.",
        style: [BG, BIG, BOLD, ITALIC],
        link: "/strategies",
      },
    ],
  },
];

export default slides;
