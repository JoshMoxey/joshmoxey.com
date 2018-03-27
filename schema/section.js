const data = {
  active: true,
  type: "section",
  title: "The Josh Moxey Show",
  sectionIds: [
    "jms", "podcast", "show"
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
  filters: [
    {
      title: "Home",
      href: "",
    },
    {
      title: "Recent",
      href: "/recent",
    },
    {
      title: "Most Viewed",
      href: "/most-viewed",
    },
    {
      title: "Recent",
      href: "recent",
    }
  ],
  body: {
    description: [
      "Lorem ipsum dolor sit amet, vehicula nunc, non id ligula est aptent rutrum, maecenas justo metus. Nam nec euismod, pellentesque mi urna mauris feugiat ut. Et dolor velit, condimentum sapien vulputate, vitae quam nulla odit eros tempor, curabitur euismod orci et. Mollis feugiat in pede libero, eros mi vehicula enim, sed imperdiet, a justo ut semper suspendisse gravida curae, purus turpis. Magna ornare auctor libero. Tortor elit in tincidunt facilisi, in ut id, praesent lobortis laoreet scelerisque suspendisse quis ornare.",
      "Torquent semper, et dolor quis justo dui placerat eros, arcu hendrerit sociis, urna ad ut curae libero ut. Sapien tempor suscipit cras pede odio, nec sed a a consectetuer risus, ac nunc lacus quis ipsum. Ultricies proin ante integer, ut magna a et mi aenean, nisl wisi suscipit, vel quam accumsan et mi id aliquam. Et et. Odio sit dictumst, vitae eu quis dolores tellus, adipiscing duis enim eros nisl vestibulum, est etiam dui et nisl. Sed eu commodo ut erat proin, enim donec erat, sodales sit nisl, at et proin quam tempor ac senectus.",
      "Tincidunt tempus mi, urna non. Interdum in et fringilla lobortis. Eget neque sed eget a, ac mi lorem non mauris nam volutpat. Cras per, mauris massa mi voluptatem. Erat maecenas in ligula vitae integer urna, scelerisque mauris tellus venenatis eget fermentum neque, aliquet egestas, mi ut nunc. Eget purus mauris, ipsum ante interdum tincidunt in, velit semper ullamcorper eget aliquam rhoncus.",
    ],
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
          href: "https://facebook.com/share",
          external: true,
        },
      ],
    }
  ],
  data: {
    details: [
      {
        name: "",
        date: new Date(),
      },
      {
        date: new Date(),
      },
      {
        date: new Date(),
      },
    ],
    dates: {
      dateCreated: new Date(),
      lastDateModified: new Date(),
      datesModified: [
        new Date()
      ],
    },
    tags: [
      "Podcast",
      "The Josh Moxey Show",
    ],
    views: {
      count: 0,
    },
  },
  related: [
    "gems",
    "radio"
  ]
//gather pages included
//map through and create arrays of all the info required
//append to data object
//have a main detail outlined by the section? ie. for jms, it's episode. Or date.

}