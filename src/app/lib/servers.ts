const issues = [
  {
    problem: true,
    type: "major",
    hours: 3,
    minutes: 45,
    details: ["Database connection issue", "High CPU usage", "Timeout errors"],
    date: "Dec 21, 2024",
  },
  {
    problem: true,
    type: "major",
    hours: 3,
    minutes: 45,
    details: ["Database connection issue", "High CPU usage", "Timeout errors"],
    date: "Dec 21, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: false,
    date: "Dec 19, 2024",
  },
  {
    problem: true,
    type: "major",
    hours: 5,
    minutes: 15,
    details: ["API response delay", "Memory leak detected", "Server crash"],
    date: "Dec 15, 2024",
  },
  {
    problem: true,
    type: "partial",
    hours: 0,
    minutes: 20,
    details: ["Button hover state issue", "Color inconsistency"],
    date: "Dec 14, 2024",
  },
  {
    problem: true,
    type: "partial",
    hours: 0,
    minutes: 20,
    details: ["Button hover state issue", "Color inconsistency"],
    date: "Dec 14, 2024",
  },
  {
    problem: false,
    date: "Dec 10, 2024",
  },
  {
    problem: true,
    type: "partial",
    hours: 0,
    minutes: 20,
    details: ["Button hover state issue", "Color inconsistency"],
    date: "Dec 14, 2024",
  },
];
export const server = [
  {
    name: "pulsetic",
    issues,
    status: "up",
    ipAddress: "192.168.1.1",
    responseTime: "120ms",
  },
  {
    name: "Database",
    issues,
    status: "down",
    ipAddress: "192.168.1.3",
    responseTime: "90ms",
  },
  {
    name: "Website",
    issues,
    status: "degraded",
    ipAddress: "192.168.1.2",
    responseTime: "110ms",
  },
];

export const incidents = [
  {
    date: "Nov 1, 2024",
    title: "API Latency Issue",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
    ],
  },
  {
    date: "Nov 2, 2024",
    problem: false,
  },
  {
    date: "Nov 3, 2024",
    title: "Partial Outage in Europe",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 3, 14:00 PST",
        status: "Monitoring",
        text: "Resolved partial outage, monitoring systems closely.",
      },
    ],
  },
  {
    date: "Nov 4, 2024",
    problem: false,
  },
  {
    date: "Nov 5, 2024",
    title: "High Error Rates Detected",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 5, 16:30 PST",
        status: "Update",
        text: "Error rates reduced, investigating root cause.",
      },
    ],
  },
  {
    date: "Nov 6, 2024",
    problem: false,
  },
  {
    date: "Nov 7, 2024",
    title: "Database Performance Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
    ],
  },
  {
    date: "Nov 8, 2024",
    problem: false,
  },
  {
    date: "Nov 9, 2024",
    title: "Unexpected Downtime",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 9, 12:00 PST",
        status: "Resolved",
        text: "Systems restored after unexpected downtime.",
      },
    ],
  },
  {
    date: "Nov 10, 2024",
    problem: false,
  },
  {
    date: "Nov 11, 2024",
    title: "API Rate Limiting Issue",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
    ],
  },
  {
    date: "Nov 12, 2024",
    problem: false,
  },
  {
    date: "Nov 13, 2024",
    title: "Service Unavailability in Asia",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 13, 11:45 PST",
        status: "Update",
        text: "Investigating unavailability affecting Asia region.",
      },
    ],
  },
  {
    date: "Nov 14, 2024",
    problem: false,
  },
  {
    date: "Nov 15, 2024",
    title: "Minor Latency Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 15, 08:30 PST",
        status: "Resolved",
        text: "Minor latency issues resolved.",
      },
    ],
  },
  {
    date: "Nov 16, 2024",
    problem: false,
  },
  {
    date: "Nov 17, 2024",
    title: "System Maintenance Alert",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 17, 22:00 PST",
        status: "Planned",
        text: "Scheduled maintenance ongoing.",
      },
    ],
  },
  {
    date: "Nov 18, 2024",
    problem: false,
  },
  {
    date: "Nov 19, 2024",
    title: "Intermittent Connection Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 19, 18:30 PST",
        status: "Update",
        text: "Connection errors identified, implementing a fix.",
      },
    ],
  },
  {
    date: "Nov 20, 2024",
    problem: false,
  },
  {
    date: "Nov 21, 2024",
    title: "High Latency Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 21, 12:10 PST",
        status: "Resolved",
        text: "Latency issues resolved, systems are stable.",
      },
    ],
  },
  {
    date: "Nov 22, 2024",
    problem: false,
  },
  {
    date: "Nov 23, 2024",
    title: "Unexpected API Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 23, 14:45 PST",
        status: "Monitoring",
        text: "Error rates back to normal, monitoring systems.",
      },
    ],
  },
  {
    date: "Nov 24, 2024",
    problem: false,
  },
  {
    date: "Nov 25, 2024",
    title: "Service Degradation Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 25, 09:20 PST",
        status: "Identified",
        text: "Degradation detected, root cause identified.",
      },
    ],
  },
  {
    date: "Nov 26, 2024",
    problem: false,
  },
  {
    date: "Nov 27, 2024",
    title: "Performance Issues in Americas",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 27, 17:30 PST",
        status: "Resolved",
        text: "Performance issues resolved for Americas region.",
      },
    ],
  },
  {
    date: "Nov 28, 2024",
    problem: false,
  },
  {
    date: "Nov 29, 2024",
    title: "API Timeout Errors",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 29, 11:15 PST",
        status: "Update",
        text: "Timeout errors reduced, systems stable.",
      },
    ],
  },
  {
    date: "Nov 30, 2024",
    problem: false,
  },
  {
    date: "Nov 1, 2024",
    title: "API Latency Issue",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
    ],
  },
  {
    date: "Nov 2, 2024",
    problem: false,
  },
  {
    date: "Nov 3, 2024",
    title: "Partial Outage in Europe",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 3, 14:00 PST",
        status: "Monitoring",
        text: "Resolved partial outage, monitoring systems closely.",
      },
    ],
  },
  {
    date: "Nov 4, 2024",
    problem: false,
  },
  {
    date: "Nov 5, 2024",
    title: "High Error Rates Detected",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 5, 16:30 PST",
        status: "Update",
        text: "Error rates reduced, investigating root cause.",
      },
    ],
  },
  {
    date: "Nov 6, 2024",
    problem: false,
  },
  {
    date: "Nov 7, 2024",
    title: "Database Performance Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
    ],
  },
  {
    date: "Nov 8, 2024",
    problem: false,
  },
  {
    date: "Nov 9, 2024",
    title: "Unexpected Downtime",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 9, 12:00 PST",
        status: "Resolved",
        text: "Systems restored after unexpected downtime.",
      },
    ],
  },
  {
    date: "Nov 10, 2024",
    problem: false,
  },
  {
    date: "Nov 11, 2024",
    title: "API Rate Limiting Issue",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
    ],
  },
  {
    date: "Nov 12, 2024",
    problem: false,
  },
  {
    date: "Nov 13, 2024",
    title: "Service Unavailability in Asia",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 13, 11:45 PST",
        status: "Update",
        text: "Investigating unavailability affecting Asia region.",
      },
    ],
  },
  {
    date: "Nov 14, 2024",
    problem: false,
  },
  {
    date: "Nov 15, 2024",
    title: "Minor Latency Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 15, 08:30 PST",
        status: "Resolved",
        text: "Minor latency issues resolved.",
      },
    ],
  },
  {
    date: "Nov 16, 2024",
    problem: false,
  },
  {
    date: "Nov 17, 2024",
    title: "System Maintenance Alert",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 17, 22:00 PST",
        status: "Planned",
        text: "Scheduled maintenance ongoing.",
      },
    ],
  },
  {
    date: "Nov 18, 2024",
    problem: false,
  },
  {
    date: "Nov 19, 2024",
    title: "Intermittent Connection Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 19, 18:30 PST",
        status: "Update",
        text: "Connection errors identified, implementing a fix.",
      },
    ],
  },
  {
    date: "Nov 20, 2024",
    problem: false,
  },
  {
    date: "Nov 21, 2024",
    title: "High Latency Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 21, 12:10 PST",
        status: "Resolved",
        text: "Latency issues resolved, systems are stable.",
      },
    ],
  },
  {
    date: "Nov 22, 2024",
    problem: false,
  },
  {
    date: "Nov 23, 2024",
    title: "Unexpected API Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 23, 14:45 PST",
        status: "Monitoring",
        text: "Error rates back to normal, monitoring systems.",
      },
    ],
  },
  {
    date: "Nov 24, 2024",
    problem: false,
  },
  {
    date: "Nov 25, 2024",
    title: "Service Degradation Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 25, 09:20 PST",
        status: "Identified",
        text: "Degradation detected, root cause identified.",
      },
    ],
  },
  {
    date: "Nov 26, 2024",
    problem: false,
  },
  {
    date: "Nov 27, 2024",
    title: "Performance Issues in Americas",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 27, 17:30 PST",
        status: "Resolved",
        text: "Performance issues resolved for Americas region.",
      },
    ],
  },
  {
    date: "Nov 28, 2024",
    problem: false,
  },
  {
    date: "Nov 29, 2024",
    title: "API Timeout Errors",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 29, 11:15 PST",
        status: "Update",
        text: "Timeout errors reduced, systems stable.",
      },
    ],
  },
  {
    date: "Nov 30, 2024",
    problem: false,
  },
  {
    date: "Nov 1, 2024",
    title: "API Latency Issue",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
      {
        date: "Nov 1, 10:15 PST",
        status: "Update",
        text: "Investigating latency issues affecting some users.",
      },
    ],
  },
  {
    date: "Nov 2, 2024",
    problem: false,
  },
  {
    date: "Nov 3, 2024",
    title: "Partial Outage in Europe",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 3, 14:00 PST",
        status: "Monitoring",
        text: "Resolved partial outage, monitoring systems closely.",
      },
    ],
  },
  {
    date: "Nov 4, 2024",
    problem: false,
  },
  {
    date: "Nov 5, 2024",
    title: "High Error Rates Detected",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 5, 16:30 PST",
        status: "Update",
        text: "Error rates reduced, investigating root cause.",
      },
    ],
  },
  {
    date: "Nov 6, 2024",
    problem: false,
  },
  {
    date: "Nov 7, 2024",
    title: "Database Performance Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
      {
        date: "Nov 7, 09:45 PST",
        status: "Identified",
        text: "Database bottleneck identified, working on a fix.",
      },
    ],
  },
  {
    date: "Nov 8, 2024",
    problem: false,
  },
  {
    date: "Nov 9, 2024",
    title: "Unexpected Downtime",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 9, 12:00 PST",
        status: "Resolved",
        text: "Systems restored after unexpected downtime.",
      },
    ],
  },
  {
    date: "Nov 10, 2024",
    problem: false,
  },
  {
    date: "Nov 11, 2024",
    title: "API Rate Limiting Issue",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
      {
        date: "Nov 11, 15:20 PST",
        status: "Monitoring",
        text: "Rate limiting issue fixed, monitoring closely.",
      },
    ],
  },
  {
    date: "Nov 12, 2024",
    problem: false,
  },
  {
    date: "Nov 13, 2024",
    title: "Service Unavailability in Asia",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 13, 11:45 PST",
        status: "Update",
        text: "Investigating unavailability affecting Asia region.",
      },
    ],
  },
  {
    date: "Nov 14, 2024",
    problem: false,
  },
  {
    date: "Nov 15, 2024",
    title: "Minor Latency Issues",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 15, 08:30 PST",
        status: "Resolved",
        text: "Minor latency issues resolved.",
      },
    ],
  },
  {
    date: "Nov 16, 2024",
    problem: false,
  },
  {
    date: "Nov 17, 2024",
    title: "System Maintenance Alert",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 17, 22:00 PST",
        status: "Planned",
        text: "Scheduled maintenance ongoing.",
      },
    ],
  },
  {
    date: "Nov 18, 2024",
    problem: false,
  },
  {
    date: "Nov 19, 2024",
    title: "Intermittent Connection Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 19, 18:30 PST",
        status: "Update",
        text: "Connection errors identified, implementing a fix.",
      },
    ],
  },
  {
    date: "Nov 20, 2024",
    problem: false,
  },
  {
    date: "Nov 21, 2024",
    title: "High Latency Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 21, 12:10 PST",
        status: "Resolved",
        text: "Latency issues resolved, systems are stable.",
      },
    ],
  },
  {
    date: "Nov 22, 2024",
    problem: false,
  },
  {
    date: "Nov 23, 2024",
    title: "Unexpected API Errors",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 23, 14:45 PST",
        status: "Monitoring",
        text: "Error rates back to normal, monitoring systems.",
      },
    ],
  },
  {
    date: "Nov 24, 2024",
    problem: false,
  },
  {
    date: "Nov 25, 2024",
    title: "Service Degradation Detected",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 25, 09:20 PST",
        status: "Identified",
        text: "Degradation detected, root cause identified.",
      },
    ],
  },
  {
    date: "Nov 26, 2024",
    problem: false,
  },
  {
    date: "Nov 27, 2024",
    title: "Performance Issues in Americas",
    problem: true,
    type: "major",
    issues: [
      {
        date: "Nov 27, 17:30 PST",
        status: "Resolved",
        text: "Performance issues resolved for Americas region.",
      },
    ],
  },
  {
    date: "Nov 28, 2024",
    problem: false,
  },
  {
    date: "Nov 29, 2024",
    title: "API Timeout Errors",
    problem: true,
    type: "partial",
    issues: [
      {
        date: "Nov 29, 11:15 PST",
        status: "Update",
        text: "Timeout errors reduced, systems stable.",
      },
    ],
  },
  {
    date: "Nov 30, 2024",
    problem: false,
  },
];
