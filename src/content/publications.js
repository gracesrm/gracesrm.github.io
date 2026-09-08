import propedeuticaPdf from '../Downloads/paper/propedeutica_2018.pdf';

/**
 * @typedef {Object} PublicationAuthor
 * @property {string} name
 * @property {string} [personId] - RiS3 member ID from people.js, when applicable
 */

/**
 * @typedef {Object} PublicationLink
 * @property {'pdf'|'code'|'slides'|'video'|'project'|'doi'|'other'} type
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {Object} PublicationAward
 * @property {string} title
 * @property {string} [url]
 */

/**
 * @typedef {Object} Publication
 * @property {string} id - Stable kebab-case identifier, normally ending in the year
 * @property {string} title
 * @property {PublicationAuthor[]} authors
 * @property {string} authorsText - Original display text for the author line
 * @property {string} venue
 * @property {string} venueShort
 * @property {number} year
 * @property {'conference'|'journal'|'workshop'|'magazine'|'preprint'|'other'} type
 * @property {'published'|'accepted'|'forthcoming'|'preprint'} status
 * @property {string} [summary]
 * @property {string[]} subdirectionIds - IDs from researchDirections.js
 * @property {PublicationLink[]} links
 * @property {PublicationAward[]} [awards]
 * @property {boolean} [featured]
 */

/** @type {Publication[]} */
export const publications = [
  {
    id: 'on-device-ml-model-extraction-sok-2024',
    title: 'SoK: All You Need to Know About On-Device ML Model Extraction - The Gap Between Research and Practice.',
    authors: [
      { name: 'Tushar Nayan', personId: 'tushar-nayan' },
      { name: 'Qiming Guo' },
      { name: 'Mohammed Al Duniawi', personId: 'mohammed-al-duniawi' },
      { name: 'Marcus Botacin' },
      { name: 'Selcuk Uluagac' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
    ],
    authorsText: 'Tushar Nayan, Qiming Guo, Mohammed Al Duniawi, Marcus Botacin, Selcuk Uluagac, Ruimin Sun',
    venue: 'USENIX Security 2024.',
    venueShort: 'USENIX Security',
    year: 2024,
    type: 'conference',
    status: 'published',
    summary: 'Surveys the gap between research attacks and practical extraction of on-device ML models.',
    subdirectionIds: ['on-device-ml-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.usenix.org/system/files/sec24fall-prepub-2341-nayan.pdf' },
      { type: 'code', label: 'Code', url: 'https://github.com/sys-ris3/ML_Extraction_Sok' },
    ],
    featured: true,
  },
  {
    id: 'shift-2024',
    title: 'SHiFT: Semi-hosted Fuzz Testing for Embedded Applications.',
    authors: [
      { name: 'Alejandro Mera' },
      { name: 'Changming Liu' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Engin Kirda' },
      { name: 'Long Lu' },
    ],
    authorsText: 'Alejandro Mera, Changming Liu, Ruimin Sun, Engin Kirda, Long Lu',
    venue: 'USENIX Security 2024.',
    venueShort: 'USENIX Security',
    year: 2024,
    type: 'conference',
    status: 'published',
    summary: 'Introduces semi-hosted fuzz testing for embedded applications.',
    subdirectionIds: ['embedded-software-testing'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.usenix.org/system/files/sec24summer-prepub-88-mera.pdf' },
    ],
    featured: true,
  },
  {
    id: 'privacy-preserving-multimodality-fl-2023',
    title: 'Privacy-Preserving Oriented Design for Multi-Modality Models using FL.',
    authors: [
      { name: 'Mohammed Al Duniawi', personId: 'mohammed-al-duniawi' },
      { name: 'Kemal Akkaya' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
    ],
    authorsText: 'Mohammed Al Duniawi, Kemal Akkaya, Ruimin Sun',
    venue: '5th IEEE International Conference on Trust, Privacy and Security in Intelligent Systems and Applications (TPS-ISA). IEEE, 2023.',
    venueShort: 'IEEE TPS-ISA',
    year: 2023,
    type: 'conference',
    status: 'published',
    summary: 'Explores privacy-preserving multimodal models using federated learning.',
    subdirectionIds: ['privacy-preserving-ai'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1_HjnBRFnCIIs7k3iwFU-BFgNIeUysxpa/view?usp=sharing' },
    ],
  },
  {
    id: 'unsafe-behavior-detection-ics-2023',
    title: 'Unsafe Behavior Detection with Adaptive Contrastive Learning in Industrial Control Systems.',
    authors: [
      { name: 'Zheng, Xu' },
      { name: 'Wang, Tianchun' },
      { name: 'Chowdhury, Samin Yasar', personId: 'samin-yasar-chowdhury' },
      { name: 'Sun, Ruimin', personId: 'ruimin-sun' },
      { name: 'Luo, Dongsheng' },
    ],
    authorsText: 'Zheng, Xu and Wang, Tianchun and Chowdhury, Samin Yasar and Sun, Ruimin and Luo, Dongsheng',
    venue: '2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW). IEEE, 2023.',
    venueShort: 'IEEE EuroS&PW',
    year: 2023,
    type: 'workshop',
    status: 'published',
    summary: 'Detects unsafe ICS behavior with adaptive contrastive learning.',
    subdirectionIds: ['industrial-control-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1aNYjXjSzhHvkVYECAaUQpD6KpGPxPMo1/view?usp=sharing' },
    ],
  },
  {
    id: 'virtual-plc-honeypot-2023',
    title: 'The Case for Virtual PLC-enabled Honeypot Design.',
    authors: [
      { name: 'Samin Y. Chowdhury', personId: 'samin-yasar-chowdhury' },
      { name: 'Brandon Dudley' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
    ],
    authorsText: 'Samin Y. Chowdhury, Brandon Dudley, and Ruimin Sun.',
    venue: '2023 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW). IEEE, 2023.',
    venueShort: 'IEEE EuroS&PW',
    year: 2023,
    type: 'workshop',
    status: 'published',
    summary: 'Studies virtual PLCs as a foundation for industrial-control honeypots.',
    subdirectionIds: ['industrial-control-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1TV8T44Ht5zUohe1ixWwpaTS-6g_tLOw3/view?usp=sharing' },
      { type: 'code', label: 'Code', url: 'https://github.com/sys-ris3/PLCHoney' },
      { type: 'slides', label: 'Slides', url: 'https://drive.google.com/file/d/1lfbw1rhusml3ujGYg7zoYglVY56SSB5d/view?usp=sharing' },
    ],
    awards: [
      {
        title: 'Best Paper Award',
        url: 'https://www.computer.org/csdl/proceedings-article/eurospw/2023/272000a351/1OFtfz6r864',
      },
    ],
  },
  {
    id: 'shadownet-2023',
    title: 'ShadowNet: A Secure and Efficient On-device Model Inference System for Convolutional Neural Networks.',
    authors: [
      { name: 'Zhichuang Sun' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Changming Liu' },
      { name: 'Amrita Roy Chowdhury' },
      { name: 'Long Lu' },
      { name: 'Somesh Jha' },
    ],
    authorsText: 'Zhichuang Sun, Ruimin Sun, Changming Liu, Amrita Roy Chowdhury, Long Lu, Somesh Jha.',
    venue: 'IEEE Symposium on Security and Privacy (S&P), 2023.',
    venueShort: 'IEEE S&P',
    year: 2023,
    type: 'conference',
    status: 'published',
    summary: 'Protects on-device CNN inference efficiently.',
    subdirectionIds: ['on-device-ml-security', 'secure-ai-inference'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1SnGFwvKgPgpy-6q29DWYoMPVjqLLMXNE/view?usp=sharing' },
    ],
  },
  {
    id: 'decentralizing-cps-resilience-2023',
    title: 'Decentralizing Cyber Physical Systems for Resilience: An Innovative Case Study from A Cybersecurity Perspective.',
    authors: [
      { name: 'Xueping Liang' },
      { name: 'Charalambos Konstantinou' },
      { name: 'Sachin Shetty' },
      { name: 'Eranga Bandara' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
    ],
    authorsText: 'Xueping Liang, Charalambos Konstantinou, Sachin Shetty, Eranga Bandara, Ruimin Sun',
    venue: 'Computers & Security, Jan 1;124:102953, 2023.',
    venueShort: 'Computers & Security',
    year: 2023,
    type: 'journal',
    status: 'published',
    summary: 'Examines decentralized CPS design as a path to cyber resilience.',
    subdirectionIds: ['industrial-control-security', 'software-reliability-resilience'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.sciencedirect.com/science/article/pii/S0167404822003455' },
    ],
  },
  {
    id: 'online-binary-models-2022',
    title: 'Online Binary Models are Promising for Distinguishing Temporally Consistent Computer Usage Profiles.',
    authors: [
      { name: 'Giovanini, L.' },
      { name: 'Ceschin, F.' },
      { name: 'Silva, M.' },
      { name: 'Chen, A.' },
      { name: 'Kulkarni, R.' },
      { name: 'Banda, S.' },
      { name: 'Lysaght, M.' },
      { name: 'Qiao, H.' },
      { name: 'Sapountzis, N.' },
      { name: 'Sun, R.', personId: 'ruimin-sun' },
      { name: 'Matthews, B.' },
    ],
    authorsText: 'Giovanini, L., Ceschin, F., Silva, M., Chen, A., Kulkarni, R., Banda, S., Lysaght, M., Qiao, H., Sapountzis, N., Sun, R. and Matthews, B.',
    venue: 'IEEE Transactions on Biometrics, Behavior, and Identity Science, 2022.',
    venueShort: 'IEEE T-BIOM',
    year: 2022,
    type: 'journal',
    status: 'published',
    summary: 'Uses online binary models to distinguish temporally consistent usage profiles.',
    subdirectionIds: [],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1yI5xtzHH4eqYhAaimsKqZXZESqksB6jP/view?usp=sharing' },
    ],
  },
  {
    id: 'd-box-2022',
    title: 'D-Box: DMA-enabled compartmentalization for embedded applications.',
    authors: [
      { name: 'Alejandro Mera' },
      { name: 'Yi Hui Chen' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Engin Kirda' },
      { name: 'Long Lu' },
    ],
    authorsText: 'Alejandro Mera, Yi Hui Chen, Ruimin Sun, Engin Kirda, Long Lu',
    venue: '29th Network and Distributed System Security Symposium (NDSS), 2022.',
    venueShort: 'NDSS',
    year: 2022,
    type: 'conference',
    status: 'published',
    summary: 'Uses DMA-enabled compartmentalization to isolate embedded applications.',
    subdirectionIds: ['embedded-isolation'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.ndss-symposium.org/wp-content/uploads/2022-53-paper.pdf' },
      { type: 'code', label: 'Code', url: 'https://github.com/RiS3-Lab/D-Box' },
    ],
  },
  {
    id: 'challenges-pitfalls-malware-research-2021',
    title: 'Challenges and Pitfalls in Malware Research.',
    authors: [
      { name: 'Marcus Botacin' },
      { name: 'Fabricio Ceschin' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Daniela Oliveira' },
      { name: 'André Grégio' },
    ],
    authorsText: 'Marcus Botacin, Fabricio Ceschin, Ruimin Sun, Daniela Oliveira, André Grégio.',
    venue: 'Computers & Security, Jul 1;106:102287, 2021.',
    venueShort: 'Computers & Security',
    year: 2021,
    type: 'journal',
    status: 'published',
    summary: 'Examines methodological challenges and pitfalls in malware research.',
    subdirectionIds: ['malware-detection-mitigation'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.sciencedirect.com/science/article/pii/S0167404821001115' },
    ],
  },
  {
    id: 'ics-attacks-defenses-sok-2021',
    title: 'SoK: Attacks on Industrial Control Logic and Formal Verification-Based Defenses.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Alejandro Mera' },
      { name: 'Long Lu' },
      { name: 'David Choffnes' },
    ],
    authorsText: 'Ruimin Sun, Alejandro Mera, Long Lu, David Choffnes.',
    venue: 'IEEE European Symposium on Security and Privacy (EuroS&P), 2021.',
    venueShort: 'IEEE EuroS&P',
    year: 2021,
    type: 'conference',
    status: 'published',
    summary: 'Systematizes attacks on industrial control logic and formal-verification defenses.',
    subdirectionIds: ['industrial-control-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://drive.google.com/file/d/1w7NOg4L_VnR183n8SAo6Z528BF5hrN5a/view?usp=sharing' },
      { type: 'code', label: 'Code', url: 'https://github.com/sys-ris3/ICS-sok-code' },
    ],
  },
  {
    id: 'mind-your-weights-2021',
    title: 'Mind Your Weight(s): A Large-scale Study on Insufficient Machine Learning Model Protection in Mobile Apps.',
    authors: [
      { name: 'Zhichuang Sun' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Long Lu' },
      { name: 'Alan Mislove' },
    ],
    authorsText: 'Zhichuang Sun, Ruimin Sun, Long Lu, Alan Mislove.',
    venue: 'USENIX Security, 2021.',
    venueShort: 'USENIX Security',
    year: 2021,
    type: 'conference',
    status: 'published',
    summary: 'Measures weak protection of ML models in mobile applications at scale.',
    subdirectionIds: ['on-device-ml-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.usenix.org/system/files/sec21-sun-zhichuang.pdf' },
      { type: 'code', label: 'Code', url: 'https://github.com/RiS3-Lab/ModelXRay' },
    ],
  },
  {
    id: 'praise-for-defensive-programming-2020',
    title: 'A Praise for Defensive Programming - Leveraging Uncertainty for Effective Malware Mitigation.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Marcus Botacin' },
      { name: 'Nikolaos Sapountzis' },
      { name: 'Xiaoyong Yuan' },
      { name: 'Matt Bishop' },
      { name: 'Donald E Porter' },
      { name: 'Xiaolin Li' },
      { name: 'Andre Gregio' },
      { name: 'Daniela Oliveira' },
    ],
    authorsText: 'Ruimin Sun, Marcus Botacin, Nikolaos Sapountzis, Xiaoyong Yuan, Matt Bishop, Donald E Porter, Xiaolin Li, Andre Gregio, Daniela Oliveira.',
    venue: 'IEEE Transactions on Dependable and Secure Computing (TDSC), 2020.',
    venueShort: 'IEEE TDSC',
    year: 2020,
    type: 'journal',
    status: 'published',
    summary: 'Uses uncertainty-aware defensive programming for malware mitigation.',
    subdirectionIds: ['malware-detection-mitigation'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://ieeexplore.ieee.org/document/9061034' },
    ],
  },
  {
    id: 'mitos-2020',
    title: 'MITOS: Optimal Propagation Decisioning in Dynamic Information Flow Tracking.',
    authors: [
      { name: 'Nikolaos Sapountzis' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Xuetao Wei' },
      { name: 'Yier Jin' },
      { name: 'Jedidiah R. Crandall' },
      { name: 'Daniela Oliveira' },
    ],
    authorsText: 'Nikolaos Sapountzis, Ruimin Sun, Xuetao Wei, Yier Jin, Jedidiah R. Crandall, Daniela Oliveira.',
    venue: 'IEEE International Conference on Distributed Computing Systems (ICDCS), 2020.',
    venueShort: 'IEEE ICDCS',
    year: 2020,
    type: 'conference',
    status: 'published',
    summary: 'Optimizes indirect-flow propagation decisions in dynamic information-flow tracking.',
    subdirectionIds: ['information-flow-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://ieeexplore.ieee.org/document/9355732' },
    ],
  },
  {
    id: 'ddift-2019',
    title: 'DDIFT: Decentralized Dynamic Information Flow Tracking for IoT Privacy and Security.',
    authors: [
      { name: 'Nikolaos Sapountzis' },
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Daniela Oliveira' },
    ],
    authorsText: 'Nikolaos Sapountzis, Ruimin Sun, Daniela Oliveira.',
    venue: 'NDSS Decentralized IoT Systems and Security Worshop (DISS), 2019.',
    venueShort: 'NDSS DISS',
    year: 2019,
    type: 'workshop',
    status: 'published',
    summary: 'Decentralizes dynamic information-flow tracking for IoT privacy and security.',
    subdirectionIds: ['information-flow-security', 'iot-edge-security'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.ndss-symposium.org/wp-content/uploads/diss2019_07_Sapountzis_paper.pdf' },
    ],
  },
  {
    id: 'propedeutica-2021',
    title: 'Learning Fast and Slow: PROPEDEUTICA for Real-time Malware Detection.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Xiaoyong Yuan' },
      { name: 'Pan He' },
      { name: 'Qile Zhu' },
      { name: 'Aokun Chen' },
      { name: 'Andre Gregio' },
      { name: 'Daniela Oliveira' },
      { name: 'Xiaolin Li' },
    ],
    authorsText: 'Ruimin Sun, Xiaoyong Yuan, Pan He, Qile Zhu, Aokun Chen, Andre Gregio, Daniela Oliveira, Xiaolin Li.',
    venue: 'IEEE Transactions on Neural Networks and Learning Systems (TNNLS), 2021.',
    venueShort: 'IEEE TNNLS',
    year: 2021,
    type: 'journal',
    status: 'published',
    summary: 'Combines fast and slow learning for real-time malware detection.',
    subdirectionIds: ['malware-detection-mitigation'],
    links: [
      { type: 'pdf', label: 'PDF', url: propedeuticaPdf },
    ],
  },
  {
    id: 'dose-makes-the-poision-2017',
    title: 'The Dose Makes the Poision - Leveraging Uncertainty for Effective Malware Detection.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Xiaoyong Yuan' },
      { name: 'Andrew Lee' },
      { name: 'Matt Bishop' },
      { name: 'Don Porter' },
      { name: 'Xiaolin Li' },
      { name: 'Andre Gregio' },
      { name: 'Daniela Oliveira' },
    ],
    authorsText: 'Ruimin Sun, Xiaoyong Yuan, Andrew Lee, Matt Bishop, Don Porter, Xiaolin Li, Andre Gregio and Daniela Oliveira.',
    venue: 'IEEE Conference on Dependable and Secure Computing (DSC), 2017.',
    venueShort: 'IEEE DSC',
    year: 2017,
    type: 'conference',
    status: 'published',
    summary: 'Uses uncertainty to improve malware detection.',
    subdirectionIds: ['malware-detection-mitigation'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://ieeexplore.ieee.org/document/8073803' },
    ],
  },
  {
    id: 'bear-2016',
    title: 'Bear: A Framework for Understanding Application Sensitivity to OS (Mis)Behavior.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Andrew Lee' },
      { name: 'Aokun Chen' },
      { name: 'Don Porter' },
      { name: 'Matt Bishop' },
      { name: 'Daniela Oliveira' },
    ],
    authorsText: 'Ruimin Sun, Andrew Lee, Aokun Chen, Don Porter, Matt Bishop and Daniela Oliveira.',
    venue: 'IEEE International Symposium on Software Reliability Engineering (ISSRE), 2016.',
    venueShort: 'IEEE ISSRE',
    year: 2016,
    type: 'conference',
    status: 'published',
    summary: 'Studies application sensitivity to unexpected operating-system behavior.',
    subdirectionIds: ['software-reliability-resilience'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://ieeexplore.ieee.org/document/7774537' },
    ],
  },
  {
    id: 'unpredictability-as-deception-2015',
    title: 'The Case for Unpredictability as Deception as OS Features.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Don Porter' },
      { name: 'Daniela Oliveira' },
      { name: 'Matt Bishop' },
    ],
    authorsText: 'Ruimin Sun, Don Porter, Daniela Oliveira and Matt Bishop.',
    venue: 'USENIX ;login, 2015.',
    venueShort: 'USENIX ;login',
    year: 2015,
    type: 'magazine',
    status: 'published',
    summary: 'Explores operating-system unpredictability as a deception mechanism.',
    subdirectionIds: ['software-reliability-resilience'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.usenix.org/system/files/login/articles/login_aug15_03_sun.pdf' },
    ],
  },
  {
    id: 'less-predictable-os-behavior-2015',
    title: 'The Case for Less Predictable Operating System Behavior.',
    authors: [
      { name: 'Ruimin Sun', personId: 'ruimin-sun' },
      { name: 'Don Porter' },
      { name: 'Daniela Oliveira' },
      { name: 'Matt Bishop' },
    ],
    authorsText: 'Ruimin Sun, Don Porter, Daniela Oliveira and Matt Bishop.',
    venue: '15th Workshop on Hot Topics in Operating Systems (HotOS), 2015.',
    venueShort: 'HotOS',
    year: 2015,
    type: 'workshop',
    status: 'published',
    summary: 'Argues for less predictable operating-system behavior.',
    subdirectionIds: ['software-reliability-resilience'],
    links: [
      { type: 'pdf', label: 'PDF', url: 'https://www.usenix.org/system/files/conference/hotos15/hotos15-paper-sun.pdf' },
    ],
  },
];
