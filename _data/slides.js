const wrap = (tagName, content) => `&lt;${tagName}&gt;${content}&lt;/${tagName}&gt;`;
const br = "&lt;br/&gt;";

const darkHeader = true;

// Style classes
const BG = 'text-background';
const BIG = 'size-large';
const SMALL = 'size-small';
const ITALIC = 'style-italic';
const BOLD = 'weight-bold';
const LIGHT = 'weight-light';
const BLUE = 'color-blue';
const YELLOW = 'color-yellow';


module.exports = [
  {
    content: [
      {
        text: 'Housing Metro Boston',
        style: [ BIG, BOLD ],
      },
      {
        text: 'An Interactive Story by the METROPOLITAN AREA PLANNING COUNCIL',
      },
    ],
    background: 'colorful-houses.jpeg',
    credit: {
      location: 'Charlestown, Boston',
      artist: 'Qusai Akoud',
    },
  },
  {
    content: [
      {
        text: 'Housing prices in Metro Boston are some of',
        style: [ BG, LIGHT, ITALIC ],
      },
      {
        text: 'the highest in the nation.',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: '"We\'ve lived in Somerville since 1954.',
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'The neighborhood has changed drastically. Most of my neighbors have moved away. The prices on houses are becoming ridiculous. So is the rent."',
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'Joseph, owner of a multi-family home, lives with his wife in Somerville, Massachusetts',
        style: [ SMALL, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Many seniors want to stay in their communities after retirement',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Many seniors want to stay in their communities after retirement',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
      {
        text: 'But have few options to downsize, or find a new home that meets their financial or physical needs.',
        style: [ BG, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Residents are being priced out of the neighborhoods where they live',
        style: [ BG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: '"I grew up in Boston. I work in Boston. I now live in Quincy because Boston got too expensive.',
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'It wasn\'t by choice that we moved away."',
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'Edmund, a renter, lives with his mother and sister in Quincy, MA, Musician',
        style: [ SMALL, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Unaffordable housing hits low-income residents hardest who spend',
        style: [ YELLOW, ITALIC ],
      },
      {
        text: 'more than 50%',
        style: [ YELLOW, BIG, BOLD, ITALIC ],
      },
      {
        text: 'of their income on rent',
        style: [ YELLOW, ITALIC ],
      },
    ],
    background: 'blue',
  },
  {
    content: [
      {
        text: 'And high rent is a major burden on those who have few housing options near their jobs',
        style: [ BG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Our regional economy is booming.',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Our regional economy is booming.',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
      {
        text: 'In the last decade, 45% of Massachusetts\' job growth has been concentrated in our inner 15 cities and towns.',
        style: [ BG, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Our innovation economy attracts highly educated workers',
        style: [ BLUE, ITALIC ],
      },
      {
        text: 'who can pay more for housing',
        style: [ BLUE, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    darkHeader,
    content: [
      {
        text: '...for a limited supply of available homes.',
        style: [ BLUE, BOLD, BIG, ITALIC ],
      },
    ],
    background: 'yellow',
  },
  {
    content: [
      {
        text: 'As baby boomers retire, even more workers will be needed to fill their jobs',
        style: [ BG, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: `But we are gaining jobs and workers ${wrap('u', 'faster')} than we are building new homes.`,
        style: [ BIG, BOLD, ITALIC ],
      },
    ],
    background: 'blue',
  },
  {
    content: [
      {
        text: 'So why don\'t we just',
        style: [ BG, ITALIC ],
      },
      {
        text: 'build more homes?',
        style: [ BG, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'The cost of development is higher than ever.',
        style: [ BLUE, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    darkHeader,
    content: [
      {
        text: 'Outdated laws may overly restrict the type and amount of housing allowed.',
        style: [ BLUE, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'yellow',
  },
  {
    content: [
      {
        text: 'Time consuming and uncertain approval processes are',
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'too risky',
        style: [ BIG, BOLD, ITALIC ],
      },
      {
        text: 'for some real estate developers.',
        style: [ LIGHT, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: 'Community concerns about too much density, or not enough affordable housing',
        style: [ BLUE, LIGHT, ITALIC ],
      },
      {
        text: 'can stall development completely.',
        style: [ BLUE, BIG, BOLD, ITALIC ],
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    content: [
      {
        text: `We know housing demand will continue to grow. ${br}New workers will need homes.`,
        style: [ LIGHT, ITALIC ],
      },
      {
        text: 'Read more about our future regional growth.',
        style: [ LIGHT, ITALIC, SMALL ],
        link: 'http://mapc.org',
      },
    ],
    background: 'colorful-houses.jpeg',
  },
  {
    darkHeader,
    content: [
      {
        text: 'To meet housing demand, we must build 188,000 more units by 2030.',
        style: [ BLUE, BIG, BOLD, ITALIC ],
      },
      {
        text: 'See how we got to this number.',
        style: [ BLUE, ITALIC ],
        link: 'http://mapc.org',
      },
    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'Housing demand will be felt all across the region. It won\'t happen in one place or limited to a specific type of home.',
        style: [ BOLD, ITALIC, BLUE ],
      },
    ],
  },
  {
    content: [
      {
        text: 'All cities and towns',
        style: [ BIG, BOLD, ITALIC ],
      },
      {
        text: 'must work together to meet the needs of today and anticipate the needs of tomorrow.',
        style: [ BOLD, ITALIC ],
      },
    ],
    background: 'blue',
  },
  {
    darkHeader,
    content: [
      {
        text: 'Together, a coalition of leaders in 15 communities of Metro Boston have pledged to build 180,000 homes by 2030.',
        style: [ BOLD, BLUE, ITALIC ],
      },
      {
        text: 'Read about the Metro Mayor\'s Coalition.',
        style: [ BLUE, ITALIC, SMALL ],
        link: 'http://mapc.org'
      },
    ],
  },
  {
    content: [
      {
        text: 'This will require strong support',
        style: [ ITALIC ],
      },
      {
        text: 'from our residents, business and non-profit leaders, and our governments.',
        style: [ BIG, BOLD, ITALIC ],
      },
    ],
    background: 'blue',
  },
  {
    darkHeader,
    content: [
      {
        text: 'We will need:',
        style: [ BLUE, ITALIC ],
      },
    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'We will need:',
        style: [ BLUE, ITALIC ],
      },
      {
        text: 'Good governance.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },

    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'We will need:',
        style: [ BLUE, ITALIC ],
      },
      {
        text: 'Good governance.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'Good planning.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'We will need:',
        style: [ BLUE, ITALIC ],
      },
      {
        text: 'Good governance.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'Good planning.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'More affordable units.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'We will need:',
        style: [ BLUE, ITALIC ],
      },
      {
        text: 'Good governance.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'Good planning.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'More affordable units.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
      {
        text: 'And protections for tenants.',
        style: [ BLUE, ITALIC, BIG, BOLD ],
      },
    ],
    background: 'yellow',
  },
  {
    darkHeader,
    content: [
      {
        text: 'Let\'s get started.',
        style: [ BG, BIG, BOLD, ITALIC ],
        link: '/best-practices',
      },
    ],
  },
];
