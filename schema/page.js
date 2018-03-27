const data = {
  active: true, //if inactive, show 404
  type: "content",
  title: "An Introduction to Josh Moxey: Who I Am and Why I Started This Podcast",
  // sectionId: [
  //   "podcast", "reflections"
  // ],
  sectionIds: [
    {
      name: "The Josh Moxey Show",
      id: "podcast"
    },
    {
      name: "Reflections",
      id: "reflections"
    }
  ],
  pageIds: [
    "001",
    "josh-moxey-radio-001"
  ],
  style: {
    img: "/public/img/profile.jpg",
    banner: {
      active: true,
      img: "http://fullhdwall.com/wp-content/uploads/2016/08/Widescreen-Space.jpg",
      gradient: "135deg, #333, #999",
      color: "#333333",
    },
    colors: [],
  },
  details: {
    dates: {
      dateCreated: new Date(),
      lastDateModified: new Date(),
      datesModified: [
        new Date()
      ],
    },
    additionalDetails: [
      {
        id: "date-recorded",
        name: "Date Recorded",
        value: new Date()
      },
      {
        id: "number",
        name: "Number",
        value: "Episode 1"
      },
      {
        id: "duration",
        name: "Duration",
        href: "12:30"
      },
    ],
    views: 0,
  },
  tags: [
    "podcast",
    "the josh moxey show",
    "introduction",
    "intro",
    "content"
  ],
  body: {
    description: [
      "Lorem ipsum dolor sit amet, vehicula nunc, non id ligula est aptent rutrum, maecenas justo metus. Nam nec euismod, pellentesque mi urna mauris feugiat ut. Et dolor velit, condimentum sapien vulputate, vitae quam nulla odit eros tempor, curabitur euismod orci et. Mollis feugiat in pede libero, eros mi vehicula enim, sed imperdiet, a justo ut semper suspendisse gravida curae, purus turpis. Magna ornare auctor libero. Tortor elit in tincidunt facilisi, in ut id, praesent lobortis laoreet scelerisque suspendisse quis ornare.",
      "Torquent semper, et dolor quis justo dui placerat eros, arcu hendrerit sociis, urna ad ut curae libero ut. Sapien tempor suscipit cras pede odio, nec sed a a consectetuer risus, ac nunc lacus quis ipsum. Ultricies proin ante integer, ut magna a et mi aenean, nisl wisi suscipit, vel quam accumsan et mi id aliquam. Et et. Odio sit dictumst, vitae eu quis dolores tellus, adipiscing duis enim eros nisl vestibulum, est etiam dui et nisl. Sed eu commodo ut erat proin, enim donec erat, sodales sit nisl, at et proin quam tempor ac senectus.",
      "Tincidunt tempus mi, urna non. Interdum in et fringilla lobortis. Eget neque sed eget a, ac mi lorem non mauris nam volutpat. Cras per, mauris massa mi voluptatem. Erat maecenas in ligula vitae integer urna, scelerisque mauris tellus venenatis eget fermentum neque, aliquet egestas, mi ut nunc. Eget purus mauris, ipsum ante interdum tincidunt in, velit semper ullamcorper eget aliquam rhoncus.",
    ],
    preview: [
      {
        type: "img",
        img: "http://via.placeholder.com/500x350",
        caption: [
          "Beautiful image of xyz",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/400x700",
        caption: [
          "Beautiful image of xyz",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/501",
        caption: [
          "Beautiful image of xyzuyvghbu",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/500x350",
        caption: [
          "Beautiful image of xyz",
        ]
      },
    ],
    embed: "https://embed.simplecast.com/b6b044af?color=f5f5f5",
    related: [
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
    ],
    showNotes: false,
    resources: false,
  },
  links: [
    {
      shortText: "Visit",
      longerText: false,
      priority: 1,
      links: [
        {
          name: "iTunes",
          href: "https://itunes.apple.com/ca/podcast/the-josh-moxey-show/id1305500400?mt=2",
          external: true,
        },
        {
          name: "Stitcher",
          href: "https://www.stitcher.com/podcast/josh-moxey/the-josh-moxey-show",
          external: true,
        },
        {
          name: "Google Play",
          href: "https://play.google.com/music/m/I5n3a2frujlcypze4b4fh5v2jdi?t=The_Josh_Moxey_Show",
          external: true,
        },
        {
          name: "TuneIn",
          href: "https://tunein.com/radio/The-Josh-Moxey-Show-p1056867/",
          external: true,
        },
        {
          name: "Facebook",
          href: "",
          external: true,
        },
        {
          name: "YouTube",
          href: "",
          external: true,
        },
      ],
    },
    {
      shortText: "Share",
      longerText: false,
      priority: 1,
      links: [
        {
          name: "Facebook",
          href: "https://facebook.com/share",
          external: true,
        },
        {
          name: "Twitter",
          href: "https://facebook.com/share",
          external: true,
        },
        {
          name: "Instagram",
          href: "https://facebook.com/share",
          external: true,
        },
      ],
    },
    {
      shortText: "More",
      longerText: false,
      priority: 10,
      links: [
        {
          name: "Facebook",
          icon: "/icon/facebook.svg",
          external: true,
        },
      ],
    }
  ],
}

const data2 = {
  header: {
    banner: {
      active: true,
      img: "http://fullhdwall.com/wp-content/uploads/2016/08/Widescreen-Space.jpg",
      gradient: "135deg, #333, #999",
      color: "#333333",
    },
    title: "An Introduction to Josh Moxey: Who I Am and Why I Started This Podcast",
    img: "/public/img/profile.jpg",
    section: [
      {
        name: "The Josh Moxey Show",
        href: "podcast"
      },
      {
        name: "Reflections",
        href: "reflections"
      }
    ],
    detail: [
      {
        name: "Episode",
        value: 0,
      },
      {
        type: "Status", //
        value: "active",
      },
    ],
  },
  body: {
    description: [
      "Lorem ipsum dolor sit amet, vehicula nunc, non id ligula est aptent rutrum, maecenas justo metus. Nam nec euismod, pellentesque mi urna mauris feugiat ut. Et dolor velit, condimentum sapien vulputate, vitae quam nulla odit eros tempor, curabitur euismod orci et. Mollis feugiat in pede libero, eros mi vehicula enim, sed imperdiet, a justo ut semper suspendisse gravida curae, purus turpis. Magna ornare auctor libero. Tortor elit in tincidunt facilisi, in ut id, praesent lobortis laoreet scelerisque suspendisse quis ornare.",
      "Torquent semper, et dolor quis justo dui placerat eros, arcu hendrerit sociis, urna ad ut curae libero ut. Sapien tempor suscipit cras pede odio, nec sed a a consectetuer risus, ac nunc lacus quis ipsum. Ultricies proin ante integer, ut magna a et mi aenean, nisl wisi suscipit, vel quam accumsan et mi id aliquam. Et et. Odio sit dictumst, vitae eu quis dolores tellus, adipiscing duis enim eros nisl vestibulum, est etiam dui et nisl. Sed eu commodo ut erat proin, enim donec erat, sodales sit nisl, at et proin quam tempor ac senectus.",
      "Tincidunt tempus mi, urna non. Interdum in et fringilla lobortis. Eget neque sed eget a, ac mi lorem non mauris nam volutpat. Cras per, mauris massa mi voluptatem. Erat maecenas in ligula vitae integer urna, scelerisque mauris tellus venenatis eget fermentum neque, aliquet egestas, mi ut nunc. Eget purus mauris, ipsum ante interdum tincidunt in, velit semper ullamcorper eget aliquam rhoncus.",
    ],
    preview: [
      {
        type: "img",
        img: "http://via.placeholder.com/500x350",
        caption: [
          "Beautiful image of xyz",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/400x700",
        caption: [
          "Beautiful image of xyz",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/501",
        caption: [
          "Beautiful image of xyzuyvghbu",
        ]
      },
      {
        type: "img",
        img: "http://via.placeholder.com/500x350",
        caption: [
          "Beautiful image of xyz",
        ]
      },
    ],
    embed: "https://embed.simplecast.com/b6b044af?color=f5f5f5",
    related: [
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
      {
        pageId: "Josh Moxey Radio 001",
        categoryId: "Josh Moxey Radio",
      },
    ],
    showNotes: false,
    resources: false,
  },
  links: [
    {
      shortText: "Visit",
      longerText: false,
      priority: 1,
      links: [
        {
          name: "iTunes",
          href: "https://itunes.apple.com/ca/podcast/the-josh-moxey-show/id1305500400?mt=2",
          external: true,
        },
        {
          name: "Stitcher",
          href: "https://www.stitcher.com/podcast/josh-moxey/the-josh-moxey-show",
          external: true,
        },
        {
          name: "Google Play",
          href: "https://play.google.com/music/m/I5n3a2frujlcypze4b4fh5v2jdi?t=The_Josh_Moxey_Show",
          external: true,
        },
        {
          name: "TuneIn",
          href: "https://tunein.com/radio/The-Josh-Moxey-Show-p1056867/",
          external: true,
        },
        {
          name: "Facebook",
          href: "",
          external: true,
        },
        {
          name: "YouTube",
          href: "",
          external: true,
        },
      ],
    },
    {
      shortText: "Share",
      longerText: false,
      priority: 1,
      links: [
        {
          name: "Facebook",
          href: "https://facebook.com/share",
          external: true,
        },
        {
          name: "Twitter",
          href: "https://facebook.com/share",
          external: true,
        },
        {
          name: "Instagram",
          href: "https://facebook.com/share",
          external: true,
        },
      ],
    },
    {
      shortText: "More",
      longerText: false,
      priority: 10,
      text: "More",
      links: [
        {
          name: "Facebook",
          icon: "/icon/facebook.svg",
          external: true,
        },
      ],
    }
  ],
  data: {
    active: true, //if inactive, show 404
    pageUrl: [
      ""
    ],
    sectionId: [
      "reflections"
    ],
    type: "content",
    details: [],
    dates: {
      dateCreated: new Date(),
      lastDateModified: new Date(),
      datesModified: [
        new Date()
      ],
    },
    tags: [
      "podcast",
      "the josh moxey show",
      "introduction",
      "intro",
      "content"
    ],
    views: 0,
  },
}