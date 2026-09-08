/**
 * @typedef {Object} ResearchSubdirection
 * @property {string} id - Stable kebab-case identifier used by people, papers, and news
 * @property {string} title
 * @property {string} summary
 * @property {string[]} keywords
 * @property {string[]} [publicationIds] - Curated publication order for the research card
 * @property {string[]} [hideVenuePublicationIds] - Publications shown without compact venue text
 * @property {boolean} [hidden] - Retains a stable taxonomy ID without rendering a card row
 */

/**
 * @typedef {Object} ResearchDirection
 * @property {string} id
 * @property {string} title
 * @property {string} shortTitle
 * @property {string} summary
 * @property {ResearchSubdirection[]} subdirections
 * @property {number} displayOrder
 * @property {boolean} [featured]
 * @property {boolean} [showPublicationVenues]
 * @property {boolean} [hidden] - Retains a stable taxonomy ID without rendering the direction
 */

/** @type {ResearchDirection[]} */
export const researchDirections = [
  {
    id: 'ai-ml-security',
    title: 'On-Device AI Security',
    shortTitle: 'On-Device AI Security',
    summary: 'Security and privacy for AI models deployed on mobile, edge, and IoT devices.',
    featured: true,
    subdirections: [
      {
        id: 'on-device-ml-security',
        title: 'AI Model & Deployment Extraction',
        summary: 'Discovering, extracting, and protecting deployed models.',
        keywords: ['on-device ML', 'model extraction', 'edge AI'],
        publicationIds: ['mind-your-weights-2021', 'on-device-ml-model-extraction-sok-2024'],
      },
      {
        id: 'secure-ai-inference',
        title: 'Secure & Confidential AI Inference',
        summary: 'Preserving model and data integrity during inference.',
        keywords: ['secure inference', 'model protection', 'trusted execution'],
        publicationIds: ['shadownet-2023', 'secureinfer-2025'],
      },
      {
        id: 'privacy-preserving-ai',
        title: 'Privacy-Preserving Edge AI',
        summary: 'Protecting sensitive training data, inputs, and model assets.',
        keywords: ['privacy', 'federated learning', 'multimodal AI'],
        publicationIds: ['privacy-preserving-multimodality-fl-2023'],
      },
    ],
    displayOrder: 1,
  },
  {
    id: 'embedded-iot-security',
    title: 'System and Embedded Security',
    shortTitle: 'System and Embedded Security',
    summary: 'Analysis and isolation techniques for embedded software, firmware, and connected devices.',
    subdirections: [
      {
        id: 'embedded-software-testing',
        title: 'Embedded Software Testing',
        summary: 'Practical fuzzing for firmware and embedded applications.',
        keywords: ['fuzzing', 'firmware', 'software testing'],
        publicationIds: ['shift-2024'],
      },
      {
        id: 'embedded-isolation',
        title: 'Isolation & Compartmentalization',
        summary: 'Hardware-assisted isolation and least-privilege compartmentalization.',
        keywords: ['compartmentalization', 'DMA', 'least privilege'],
        publicationIds: ['d-box-2022'],
      },
      {
        id: 'iot-edge-security',
        title: 'IoT and Edge Security',
        summary: 'Securing connected devices and supporting edge services.',
        keywords: ['IoT', 'edge systems', 'device security'],
        hidden: true,
      },
      {
        id: 'information-flow-security',
        title: 'Information Flow',
        summary: 'Tracking and controlling sensitive data across distributed and IoT systems.',
        keywords: ['information flow', 'privacy', 'distributed systems', 'IoT'],
        publicationIds: ['mitos-2020', 'ddift-2019'],
        hideVenuePublicationIds: ['mitos-2020'],
      },
    ],
    displayOrder: 3,
  },
  {
    id: 'cyber-physical-domain-security',
    title: 'Cyber-Physical & Domain-Specific Security',
    shortTitle: 'Cyber-Physical & Domain-Specific Security',
    summary: 'Security mechanisms for safety-critical physical processes and operational domains.',
    featured: true,
    subdirections: [
      {
        id: 'industrial-control-security',
        title: 'Industrial Control & PLC Security',
        summary: 'Protecting control logic, PLCs, and operational technology.',
        keywords: ['ICS', 'PLC', 'operational technology'],
        publicationIds: [
          'ics-attacks-defenses-sok-2021',
          'virtual-plc-honeypot-2023',
          'unsafe-behavior-detection-ics-2023',
          'model-poisoning-ics-2024',
          'mqtt-fuzzing-survey-2025',
        ],
      },
      {
        id: 'medical-system-security',
        title: 'Medical AI & System Security',
        summary: 'Security and safety for connected healthcare systems.',
        keywords: ['medical devices', 'healthcare security', 'safety'],
        publicationIds: ['black-box-behavioral-distillation-medical-llms-2025'],
      },
      {
        id: 'manufacturing-security',
        title: 'Manufacturing Security',
        summary: 'Resilience for smart manufacturing processes and equipment.',
        keywords: ['smart manufacturing', 'industrial IoT', 'resilience'],
        hidden: true,
      },
      {
        id: 'automotive-security',
        title: 'Automotive & Vehicle Security',
        summary: 'Defenses for connected and autonomous vehicle systems.',
        keywords: ['automotive', 'connected vehicles', 'autonomous systems'],
        publicationIds: ['snfuzz-mqtt-sn-2026'],
      },
      {
        id: 'cps-security-resilience',
        title: 'CPS Security & Resilience',
        summary: 'Architectures and defenses that improve cyber-physical system resilience.',
        keywords: ['cyber-physical systems', 'resilience', 'decentralization'],
        publicationIds: ['decentralizing-cps-resilience-2023'],
      },
    ],
    displayOrder: 2,
  },
  {
    id: 'adaptive-system-defense',
    title: 'Earlier Work: Adaptive Defense & System Resilience',
    shortTitle: 'Earlier Work: Adaptive Defense & System Resilience',
    summary: 'Adaptive defenses that improve security, reliability, and resilience under uncertainty.',
    showPublicationVenues: false,
    hidden: true,
    subdirections: [
      {
        id: 'malware-detection-mitigation',
        title: 'Malware Defense',
        summary: 'Adaptive detection and mitigation of malicious behavior.',
        keywords: ['malware', 'behavior analysis', 'adaptive defense'],
        publicationIds: [
          'propedeutica-2021',
          'praise-for-defensive-programming-2020',
          'challenges-pitfalls-malware-research-2021',
        ],
      },
      {
        id: 'software-reliability-resilience',
        title: 'Software Reliability',
        summary: 'Maintaining availability under unexpected or adversarial behavior.',
        keywords: ['reliability', 'resilience', 'system diversity'],
        publicationIds: ['bear-2016'],
      },
    ],
    displayOrder: 4,
  },
];
