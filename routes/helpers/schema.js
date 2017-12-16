var data = {
  vanityUrl: {
    primary: "vanity-url-here",
    secondary: [ //if no main url matched, try 2nd, and third
      "music-1",
      "josh-moxey-radio-001",
    ]
  },
  header: {
    category: [
      {
        id: "",
        name: "",
        href: ""
      }
    ],
    title: "title",
    icon: "/path/to/icon.png",
    cta: [
      {
        text: "",
        url: ""
      }
    ],
    duration: [ //multiple durations for if I stopped, started, etc.
      {
        start: new Date(),
        end: null //active
      },
    ],
    detail: [ //podcast, shows, etc.
      {
        type: "Episode",
        value: 0,
      },
      {
        type: "Status", //
        value: "active",
      }
    ],
  },
  data: {
    dates: {
      dateCreated: new Date(),
      lastDateModified: new Date(),
      datesModified: [
        new Date()
      ],
    },
    tags: [
      "",
      "",
      ""
    ],
    related: [
      {
        title: "",
        category: "",
        img: "",
        href: "",
      }
    ],
    views: {
      count: 0,
    }
  },
  content: {
    description: [
      "As I stare at the white screen and input the start date, and feel like it should say null or N/A. It’s always easy to look back",
      "For me, music is art. It’s a rollercoaster ride. It’s fuel for workouts. It’s entertainment for my ears. It’s such a powerful thing overall. To say the least, I’m a fan.",
    ],
    introVideo: {
      //research what's required here for embedding
      //figure out the right service to use
    },
    whatsNew: [
      {
        type: "text",
        data: ""
      },
      {
        type: "img",
        data: ""
      }
    ],
    preview: [ //media?
      {
        url: "path/to/img/or https://...",
        type: "img",
        layout: "horizontal",
        caption: [
          "Beautiful image of xyz",
        ]
      },
    ],
    benefeatures: [ //ul
      "",
      "",
      ""
    ],
    timeline: [
      {
        date: new Date(),
        event: "",
        title: "",
        desc: "",
        icon: "path/to/img.png",
        href: ""
      },
    ],
    randomFacts: [
      {
        "question": "Favourite producer/DJ",
        "answer": "Jauz/Martin Garrix"
      }
    ],
    resources: [
      {
        img: "path/to/img",
        title: "title",
        desc: "",
        href: "https.."
      }
    ],
  }
}
