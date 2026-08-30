// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-preprint-out-on-chemrxiv-molecular-analysis-and-design-using-multimodal-generative-ai-via-multi-agent-modeling",
          title: 'Preprint out on ChemRxiv: Molecular analysis and design using multimodal generative AI via...',
          description: "",
          section: "News",},{id: "news-named-a-2024-nsf-graduate-research-fellow-in-mit-civil-and-environmental-engineering-write-up-from-mit-cee",
          title: 'Named a 2024 NSF Graduate Research Fellow in MIT Civil and Environmental Engineering...',
          description: "",
          section: "News",},{id: "news-paper-published-in-molecular-systems-design-amp-amp-engineering-molecular-analysis-and-design-using-generative-ai-via-multi-agent-modeling",
          title: 'Paper published in Molecular Systems Design &amp;amp;amp; Engineering: Molecular analysis and design using...',
          description: "",
          section: "News",},{id: "news-paper-out-in-the-journal-of-biomechanical-engineering-a-meta-analysis-defining-variations-in-murine-long-bone-biomechanical-testing",
          title: 'Paper out in the Journal of Biomechanical Engineering: A meta-analysis defining variations in...',
          description: "",
          section: "News",},{id: "news-joined-the-35th-class-of-the-doe-computational-science-graduate-fellowship-as-a-mechanics-and-materials-phd-student-at-mit-mit-cee-announcement-and-my-fellow-profile",
          title: 'Joined the 35th class of the DOE Computational Science Graduate Fellowship as a...',
          description: "",
          section: "News",},{id: "news-paper-out-in-the-journal-of-biomechanical-engineering-a-contactless-bending-approach-that-reduces-variability-in-murine-long-bone-mechanical-testing",
          title: 'Paper out in the Journal of Biomechanical Engineering: a contactless bending approach that...',
          description: "",
          section: "News",},{id: "news-new-preprint-higher-order-knowledge-representations-for-agentic-scientific-reasoning-hypergraphs-as-the-substrate-for-multi-agent-reasoning",
          title: 'New preprint: Higher-Order Knowledge Representations for Agentic Scientific Reasoning — hypergraphs as the...',
          description: "",
          section: "News",},{id: "news-new-preprint-graphagents-knowledge-graph-guided-agentic-ai-for-cross-domain-materials-design",
          title: 'New preprint: GraphAgents: Knowledge graph-guided agentic AI for cross-domain materials design.',
          description: "",
          section: "News",},{id: "news-new-preprint-to-agents-a-multi-agent-ai-framework-for-subjective-preference-guided-topology-optimization",
          title: 'New preprint: TO-Agents: A multi-agent AI framework for subjective preference-guided topology optimization.',
          description: "",
          section: "News",},{id: "news-presented-my-first-poster-as-a-doe-csgf-fellow-at-the-2026-annual-program-review-in-washington-d-c-on-high-performance-computing-and-optimization-i-m-looking-for-a-practicum-project-at-a-doe-national-lab-next-summer-get-in-touch-if-you-think-we-could-collaborate",
          title: 'Presented my first poster as a DOE CSGF fellow at the 2026 Annual...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-multi-agent-ai-for-engineering-design-at-wccm-eccomas-2026-in-munich-the-17th-world-congress-on-computational-mechanics-and-10th-european-congress-on-computational-methods-in-applied-sciences-and-engineering",
          title: 'Gave a talk on multi-agent AI for engineering design at WCCM-ECCOMAS 2026 in...',
          description: "",
          section: "News",},{id: "news-spoke-at-asme-idetc-cie-2026-in-houston-in-the-rethinking-design-in-the-age-of-artificial-intelligence-session-on-to-agents-a-multi-agent-ai-framework-for-subjective-preference-guided-topology-optimization",
          title: 'Spoke at ASME IDETC-CIE 2026 in Houston, in the “Rethinking Design in the...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
