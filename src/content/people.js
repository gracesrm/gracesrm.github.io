import ruiminPhoto from '../Assets/profile_s.jpg';

/**
 * @typedef {Object} ContentLink
 * @property {string} label
 * @property {string} url
 * @property {'homepage'|'scholar'|'github'|'linkedin'|'other'} [type]
 */

/**
 * A current or previous role held by a RiS3 Lab member.
 * Dates use ISO year-month strings so roles can be sorted reliably.
 *
 * @typedef {Object} PersonRole
 * @property {string} title
 * @property {string} startDate - YYYY-MM
 * @property {string|null} endDate - YYYY-MM, or null for a current role
 * @property {string} periodLabel - Original human-readable date range
 * @property {string} [institution]
 * @property {string} [coAdvisedWith]
 */

/**
 * A fellowship, award, publication contribution, artifact, or service highlight.
 * Publication IDs refer to records in publications.js.
 *
 * @typedef {Object} PersonContribution
 * @property {string} id
 * @property {'fellowship'|'award'|'paper'|'artifact'|'service'|'other'} type
 * @property {string} title
 * @property {string} date - YYYY-MM or YYYY-MM-DD
 * @property {string} [description]
 * @property {string[]} [publicationIds]
 * @property {ContentLink[]} [links]
 */

/**
 * @typedef {Object} Person
 * @property {string} id - Stable kebab-case identifier
 * @property {string} name
 * @property {'faculty'|'current'|'alumni'|'collaborator'} status
 * @property {PersonRole[]} roles
 * @property {string} highlight - One-sentence research highlight
 * @property {string[]} keywords - Two to four concise research keywords
 * @property {string[]} subdirectionIds - IDs from researchDirections.js
 * @property {PersonContribution[]} contributions
 * @property {string} [photo]
 * @property {ContentLink[]} [links]
 * @property {string} [firstEmployment] - First position or employer after leaving the lab
 * @property {number} [displayOrder]
 */

/** @type {Person[]} */
export const people = [
  {
    id: 'ruimin-sun',
    name: 'Ruimin Sun',
    status: 'faculty',
    roles: [
      {
        title: 'Assistant Professor',
        startDate: '2022-01',
        endDate: null,
        periodLabel: '2022 - present',
        institution: 'Florida International University',
      },
    ],
    highlight: "Ruimin's research aims at solving security problems in various systems and devices.",
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    photo: ruiminPhoto,
    links: [
      {
        label: 'Homepage',
        url: '/home',
        type: 'homepage',
      },
    ],
    displayOrder: 1,
  },
  {
    id: 'tushar-nayan',
    name: 'Tushar Nayan',
    status: 'current',
    roles: [
      {
        title: 'PhD Student',
        startDate: '2024-08',
        endDate: null,
        periodLabel: "Fall'24 - present",
        institution: 'FIU',
      },
      {
        title: 'Master Student',
        startDate: '2023-05',
        endDate: '2024-05',
        periodLabel: "Summer'23 - Spring'24",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: ['on-device-ml-security'],
    contributions: [
      {
        id: 'tushar-nayan-2024-best-poster',
        type: 'award',
        title: '1st place at the Warren B. Nelms Annual IoT Conference and the Best Poster Award',
        date: '2024-12',
        links: [
          {
            label: 'Warren B. Nelms Annual IoT Conference and the Best Poster Award',
            url: 'https://iot.institute.ufl.edu/iot-conference-24/',
          },
        ],
      },
    ],
    links: [],
    displayOrder: 2,
  },
  {
    id: 'samin-yasar-chowdhury',
    name: 'Samin Yasar Chowdhury',
    status: 'current',
    roles: [
      {
        title: 'PhD Student',
        startDate: '2022-08',
        endDate: null,
        periodLabel: "Fall'22 - present",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: ['industrial-control-security'],
    contributions: [
      {
        id: 'samin-yasar-chowdhury-2023-best-paper',
        type: 'award',
        title: 'Best Paper Award by RICSS @EuroS&P',
        date: '2023-07',
        publicationIds: ['virtual-plc-honeypot-2023'],
        links: [
          {
            label: 'The Case for Virtual PLC-enabled Honeypot Design',
            url: 'https://www.computer.org/csdl/proceedings-article/eurospw/2023/272000a351/1OFtfz6r864',
          },
        ],
      },
    ],
    links: [],
    displayOrder: 4,
  },
  {
    id: 'mohammed-al-duniawi',
    name: 'Mohammed Al Duniawi',
    status: 'current',
    roles: [
      {
        title: 'PhD Student',
        startDate: '2022-08',
        endDate: null,
        periodLabel: "Fall'22 - present",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: ['privacy-preserving-ai'],
    contributions: [
      {
        id: 'mohammed-al-duniawi-2026-provost-completion-fellowship',
        type: 'fellowship',
        title: 'Provost Degree Completion Tuition Fellowship',
        date: '2026-07',
      },
    ],
    links: [],
    displayOrder: 5,
  },
  {
    id: 'lousindy-mitton',
    name: 'Lousindy Mitton',
    status: 'alumni',
    roles: [
      {
        title: 'Master Student',
        startDate: '2024-08',
        endDate: '2025-12',
        periodLabel: "Fall'24 - Fall'25",
        institution: 'FIU',
      },
    ],
    highlight: 'ADMIRE MSc. Fellowship, DoD CSA Doctoral Fellowship (7.5% selection rate).',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 6,
  },
  {
    id: 'christian-de-la-pena',
    name: 'Christian De La Pena',
    status: 'alumni',
    roles: [
      {
        title: 'Master Student',
        startDate: '2026-01',
        endDate: '2026-05',
        periodLabel: "Spring'26",
        institution: 'FIU',
      },
    ],
    highlight: "First Author publication at VehicleSec'26",
    keywords: [],
    subdirectionIds: ['automotive-security'],
    contributions: [],
    links: [],
    displayOrder: 7,
  },
  {
    id: 'raja-shekar-reddy-seelam',
    name: 'Raja Shekar Reddy Seelam',
    status: 'alumni',
    roles: [
      {
        title: 'Master Student',
        startDate: '2025-01',
        endDate: '2025-05',
        periodLabel: "Spring'25",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 8,
  },
  {
    id: 'sai-siva-prabhu-teja-kondapalli',
    name: 'Sai Siva Prabhu Teja Kondapalli',
    status: 'alumni',
    roles: [
      {
        title: 'Master Student',
        startDate: '2023-08',
        endDate: '2023-12',
        periodLabel: "Fall'23",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 8,
  },
  {
    id: 'srimant-kumar-mohanty',
    name: 'Srimant Kumar Mohanty',
    status: 'alumni',
    roles: [
      {
        title: 'Master Student',
        startDate: '2023-05',
        endDate: '2023-08',
        periodLabel: "Summer'23",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 9,
  },
  {
    id: 'van-phan',
    name: 'Van Phan',
    status: 'alumni',
    roles: [
      {
        title: 'Undergraduate Student',
        startDate: '2024-05',
        endDate: '2024-08',
        periodLabel: "Summer'24",
        institution: 'University of Central Florida',
      },
    ],
    highlight: "First author publication at RICSS'24",
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 10,
  },
  {
    id: 'emily-lofaro',
    name: 'Emily Lofaro',
    status: 'alumni',
    roles: [
      {
        title: 'Undergraduate Student',
        startDate: '2023-08',
        endDate: '2023-12',
        periodLabel: "Fall'23",
        institution: 'FIU',
        coAdvisedWith: 'Dr. Hadi Amini',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 11,
  },
  {
    id: 'danielle-leon',
    name: 'Danielle Leon',
    status: 'alumni',
    roles: [
      {
        title: 'Undergraduate Student',
        startDate: '2023-08',
        endDate: '2023-12',
        periodLabel: "Fall'23",
        institution: 'FIU',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 12,
  },
  {
    id: 'adonis-paulino',
    name: 'Adonis Paulino',
    status: 'alumni',
    roles: [
      {
        title: 'Undergraduate Student',
        startDate: '2023-05',
        endDate: '2023-08',
        periodLabel: "Summer'23",
        institution: 'Iona University',
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    links: [],
    displayOrder: 13,
  },
  {
    id: 'eric-xu',
    name: 'Eric Xu',
    status: 'alumni',
    roles: [
      {
        title: 'K-12 Student',
        startDate: '2023-05',
        endDate: '2023-08',
        periodLabel: "Summer'23",
      },
    ],
    highlight: '',
    keywords: [],
    subdirectionIds: [],
    contributions: [],
    firstEmployment: 'Admitted by UMass Amherst',
    links: [],
    displayOrder: 14,
  },
];
