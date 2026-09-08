/**
 * @typedef {Object} ResearchSubdirection
 * @property {string} id - Stable kebab-case identifier used by people, papers, and news
 * @property {string} title
 * @property {string} summary
 * @property {string[]} keywords
 */

/**
 * @typedef {Object} ResearchDirection
 * @property {string} id
 * @property {string} title
 * @property {string} shortTitle
 * @property {string} summary
 * @property {ResearchSubdirection[]} subdirections
 * @property {number} displayOrder
 */

/** @type {ResearchDirection[]} */
export const researchDirections = [
  {
    id: 'ai-ml-security',
    title: 'On-device AI Security',
    shortTitle: 'On-device AI Security',
    summary: 'Security and privacy for AI models deployed on mobile, edge, and IoT devices.',
    subdirections: [
      {
        id: 'on-device-ml-security',
        title: 'On-device ML Extraction',
        summary: 'Discovering, extracting, and protecting deployed models.',
        keywords: ['on-device ML', 'model extraction', 'edge AI'],
      },
      {
        id: 'privacy-preserving-ai',
        title: 'Privacy-preserving AI',
        summary: 'Protecting sensitive training data, inputs, and model assets.',
        keywords: ['privacy', 'federated learning', 'multimodal AI'],
      },
      {
        id: 'secure-ai-inference',
        title: 'Secure AI Inference',
        summary: 'Preserving model and data integrity during inference.',
        keywords: ['secure inference', 'model protection', 'trusted execution'],
      },
    ],
    displayOrder: 1,
  },
  {
    id: 'embedded-iot-security',
    title: 'Embedded and System Security',
    shortTitle: 'Embedded and System Security',
    summary: 'Analysis and isolation techniques for embedded software, firmware, and connected devices.',
    subdirections: [
      {
        id: 'embedded-software-testing',
        title: 'Embedded Software Testing',
        summary: 'Practical fuzzing for firmware and embedded applications.',
        keywords: ['fuzzing', 'firmware', 'software testing'],
      },
      {
        id: 'embedded-isolation',
        title: 'Embedded Isolation and Compartmentalization',
        summary: 'Hardware-assisted isolation and least-privilege compartmentalization.',
        keywords: ['compartmentalization', 'DMA', 'least privilege'],
      },
      {
        id: 'iot-edge-security',
        title: 'IoT and Edge Security',
        summary: 'Securing connected devices and supporting edge services.',
        keywords: ['IoT', 'edge systems', 'device security'],
      },
    ],
    displayOrder: 3,
  },
  {
    id: 'cyber-physical-domain-security',
    title: 'Cyber-Physical and Domain-Specific Security',
    shortTitle: 'Domain-Specific Security',
    summary: 'Security mechanisms for safety-critical physical processes and operational domains.',
    subdirections: [
      {
        id: 'industrial-control-security',
        title: 'Industrial Control Systems',
        summary: 'Protecting control logic, PLCs, and operational technology.',
        keywords: ['ICS', 'PLC', 'operational technology'],
      },
      {
        id: 'medical-system-security',
        title: 'Medical System Security',
        summary: 'Security and safety for connected healthcare systems.',
        keywords: ['medical devices', 'healthcare security', 'safety'],
      },
      {
        id: 'manufacturing-security',
        title: 'Manufacturing Security',
        summary: 'Resilience for smart manufacturing processes and equipment.',
        keywords: ['smart manufacturing', 'industrial IoT', 'resilience'],
      },
      {
        id: 'automotive-security',
        title: 'Automotive and Vehicle Security',
        summary: 'Defenses for connected and autonomous vehicle systems.',
        keywords: ['automotive', 'connected vehicles', 'autonomous systems'],
      },
    ],
    displayOrder: 2,
  },
  {
    id: 'adaptive-system-defense',
    title: 'Adaptive System Defense and Resilience',
    shortTitle: 'Adaptive Defense',
    summary: 'Adaptive defenses that improve security, reliability, and resilience under uncertainty.',
    subdirections: [
      {
        id: 'malware-detection-mitigation',
        title: 'Malware Detection and Mitigation',
        summary: 'Adaptive detection and mitigation of malicious behavior.',
        keywords: ['malware', 'behavior analysis', 'adaptive defense'],
      },
      {
        id: 'information-flow-security',
        title: 'Information-Flow Security',
        summary: 'Tracking and controlling sensitive data across distributed systems.',
        keywords: ['information flow', 'privacy', 'distributed systems'],
      },
      {
        id: 'software-reliability-resilience',
        title: 'Software Reliability and Resilience',
        summary: 'Maintaining availability under unexpected or adversarial behavior.',
        keywords: ['reliability', 'resilience', 'system diversity'],
      },
    ],
    displayOrder: 4,
  },
];
