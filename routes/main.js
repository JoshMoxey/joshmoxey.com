const router = require('express').Router()
const mongo = require("./db")
const ObjectId = require('mongodb').ObjectID
const session = require('express-session')
const bodyParser = require('body-parser')
const flash = require("connect-flash")

router
// .get("/", function (req, res) {
//   res.render("body/index", {
//     title: "Home" + title,
//     route: "index"
//   })
// })
// .get("/content", function (req, res) {
//   res.render("body/content", {
//     title: "Content" + title,
//     route: "content"
//   })
// })
// .get("/projects", function (req, res) {
//   res.render("body/projects", {
//     title: "Projects" + title,
//     route: "projects"
//   })
// })
  .get("/profile", function (req, res) {
    res.render("body/profile", {
      title: "Profile",
      route: "profile"
    })
  })
  // .get("/section", function (req, res) {
  //   res.render("body/section", {
  //     title: "section" + title,
  //     route: "section"
  //   })
  // })
  .get("/data/page/podcast", (req, res) => {
    //for simple "live" at time of podcast being live
    //check for live date of the page
    //if it's past that date, load it
    //else, next()

    // res.render("body/page-podcast", {
    res.json({
      header: {
        banner: {
          hasBanner: true,
          img: "http://fullhdwall.com/wp-content/uploads/2016/08/Widescreen-Space.jpg",
          gradient: "135deg, #333, #999",
          color: "#333333",
        },
        category: [
          {
            id: "",
            name: "The Josh Moxey Show",
            href: "podcast"
          },
          {
            id: "",
            name: "Reflections",
            href: "podcast"
          }
        ],
        title: "An Introduction to Josh Moxey: Who I Am and Why I Started This Podcast",
        icon: "/public/img/profile.jpg",
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
        description: [
          "Lorem ipsum dolor sit amet, vehicula nunc, non id ligula est aptent rutrum, maecenas justo metus. Nam nec euismod, pellentesque mi urna mauris feugiat ut. Et dolor velit, condimentum sapien vulputate, vitae quam nulla odit eros tempor, curabitur euismod orci et. Mollis feugiat in pede libero, eros mi vehicula enim, sed imperdiet, a justo ut semper suspendisse gravida curae, purus turpis. Magna ornare auctor libero. Tortor elit in tincidunt facilisi, in ut id, praesent lobortis laoreet scelerisque suspendisse quis ornare.",
          "Torquent semper, et dolor quis justo dui placerat eros, arcu hendrerit sociis, urna ad ut curae libero ut. Sapien tempor suscipit cras pede odio, nec sed a a consectetuer risus, ac nunc lacus quis ipsum. Ultricies proin ante integer, ut magna a et mi aenean, nisl wisi suscipit, vel quam accumsan et mi id aliquam. Et et. Odio sit dictumst, vitae eu quis dolores tellus, adipiscing duis enim eros nisl vestibulum, est etiam dui et nisl. Sed eu commodo ut erat proin, enim donec erat, sodales sit nisl, at et proin quam tempor ac senectus.",
          "Tincidunt tempus mi, urna non. Interdum in et fringilla lobortis. Eget neque sed eget a, ac mi lorem non mauris nam volutpat. Cras per, mauris massa mi voluptatem. Erat maecenas in ligula vitae integer urna, scelerisque mauris tellus venenatis eget fermentum neque, aliquet egestas, mi ut nunc. Eget purus mauris, ipsum ante interdum tincidunt in, velit semper ullamcorper eget aliquam rhoncus.",
        ],
        embed: "https://embed.simplecast.com/b6b044af?color=f5f5f5",
        // showNotes: [
        //   {
        //     time: "0:45",
        //     text: ""
        //     href: "https://apple.com/asdf",
        //   }
        // ]
        resources: [
          {
            href: "https://",
            title: "same"
          }
        ],
        related: [
          {
            title: "Josh Moxey Radio 001",
            category: "Josh Moxey Radio",
            img: "/img/profile.png",
            href: "",
          },
          {
            title: "Josh Moxey Radio 002",
            category: "Josh Moxey Radio",
            img: "/img/profile.png",
            href: "",
          },
          {
            title: "Josh Moxey Radio 004",
            category: "Josh Moxey Radio",
            img: "/img/profile.png",
            href: "",
          }
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
        vanityUrl: [
          "Why-I-Started-The-Podcast",
        ],
        category: "",
        creator: "",
        author: "Josh Moxey",
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
          "Introduction",
        ],
        views: {
          count: 0,
        }
      },
    })
  })
  .get("/data/section/jms", (req, res) => {
    //for simple "live" at time of podcast being live
    //check for live date of the page
    //if it's past that date, load it
    //else, next()

    // res.render("body/page-podcast", {
    res.json({
      header: {
        banner: {
          hasBanner: true,
          img: "http://fullhdwall.com/wp-content/uploads/2016/08/Widescreen-Space.jpg",
          gradient: "135deg, #333, #999",
          color: "#333333",
        },
        title: "The Josh Moxey Show",
        icon: "/public/img/profile.jpg",
      },
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
        type: "section",
        id: 1,
        url: ["the-josh-moxey-show", "jms", "tjms", "show", "podcast"],
        category: "",
        creator: "",
        author: "Josh Moxey",
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
      pages: [
        {
          title: "An Introduction to Josh Moxey: Who I Am And Why I Started A Podcast",
          href: "",
          detail: "Episode 1",
          img: "/path/to/icon"
        }
      ]
      //gather pages included
      //map through and create arrays of all the info required
      //append to data object
      //have a main detail outlined by the section? ie. for jms, it's episode. Or date.

    })
  })
  .get("/data/page/radio", function (req, res) {
    //for simple "live" at time of podcast being live
    //check for live date of the page
    //if it's past that date, load it
    //else, next()

    // res.render("body/page-radio", {
    res.json({
      title: "page" + title,
      route: "page",
      data: {
        vanityUrl: {
          primary: "Why-I-Started-The-Podcast", //etc
          secondary: [
            "1",
          ]
        },
        header: {
          category: [
            {
              id: "",
              name: "Josh Moxey Radio",
              href: "radio"
            }
          ],
          title: "Josh Moxey Radio 001",
          icon: "/img/profile.jpg",
          cta: [
            // {
            //   text: "",
            //   url: ""
            // }
          ],
          detail: [ //podcast, shows, etc.
            //how do I render this  best?
            {
              type: "Episode",
              value: 0,
            },
            {
              type: "Status", //
              value: "active",
            },
            {
              dates: [
                // {
                //   type: "duration",
                //   start: new Date(),
                //   end: null //active
                // },
                {
                  type: "date",
                  text: "Date published",
                  date: new Date(),
                },
              ],
            },
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
            "Podcast",
            "The Josh Moxey Show",
            "Introduction",
          ],
          related: [
            {
              title: "",
              category: "",
              img: "/img/profile.png",
              href: "",
            }
          ],
          views: {
            count: 0,
          }
        },
        content: {
          description: [
            "I'm pumped to debut a series I'm calling Josh Moxey Radio.",
            "So here's the gist. I love, love, love music. You'll know this if you've ever seen me at a live show or see me dancing in my kitchen. The location is irrelevant - it's what it does to me that matters. I digress.",
            "As fun as it would be to be a DJ/producer, I'm not willing to put the time into getting good at it and I also don't think I have the talent to pull it off. But... I do have a wicked taste in music in my opinion, and I want to share music I love with the world.",
            "It's rare you'll hear a non-dance song. I am all for electronic music, and I don't listen to really anything beside it.",
            "Without further ado, here's my first episode. "
            //soft to hard
            //make people's days just a little bit better through upgrading their library
            //make their libraries just a little bit better
          ],
          embed: "https://tools.applemusic.com/embed/v1/playlist/pl.u-zPyLA2vudW4ePJ?country=ca",
          listenLinks: [
            {
              name: "Apple Music",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Soundcloud",
              icon: "/icon/stitcher.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Spotify",
              icon: "/icon/googleplay.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "YouTube",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
          ],
          shareLinks: [
            {
              name: "Facebook",
              icon: "/icon/facebook.svg",
              href: "https://facebook.com/share",
            },
            {
              name: "Twitter",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Google+",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Pinterest",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Reddit",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "LinkedIn",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Tumblr",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "VK",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
            {
              name: "Email",
              icon: "/icon/itunes.svg",
              href: "https://apple.com/asdf",
            },
          ],
          // showNotes: [
          //   {
          //     time: "iTunes",
          //     icon: "/icon/itunes.svg",
          //     href: "https://apple.com/asdf",
          //   }
          // ]
          resources: [
            {
              href: "https://",
              title: "same"
            }
          ]
        }
      }
    })
  })
  .get("/data/page/skill", function (req, res) {
    res.json({
      // res.render("body/page-skill", {
      title: "page" + title,
      route: "page",
      data: {
        vanityUrl: "front-end-web-development",
        header: {
          category: [
            {
              id: "",
              name: "Skill",
              href: "skill"
            }
          ],
          title: "Front end web development",
          icon: "/img/code.png",
          cta: [
            // {
            //   text: "",
            //   url: ""
            // }
          ],
          detail: [
            {
              type: "Episode",
              value: 0,
            },
            {
              type: "Status", //
              value: "active",
            },
          ],
          dates: [
            {
              type: "duration",
              start: {
                date: new Date(2016, 8),
                text: "September 2016"
              },
              end: {
                date: null,
                text: "Now"
              }
            },
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
            "Podcast",
            "The Josh Moxey Show",
            "Introduction",
          ],
          related: [
            {
              title: "",
              category: "",
              img: "/img/profile.png",
              href: "",
            }
          ],
          views: {
            count: 0,
          }
        },
        content: {
          description: [
            "How I got started w/ front end coding",
            "I've been coding for this long",
            "Why I enjoy coding right now",
            "What it means to me",
            "What I like to code in",
            "Front end development is probably my favourite",
            "My favourite part of front end is the visual aspect",
          ],
          rating: 4,
          subSkills: [
            {
              name: "HTML",
              rating: 4.5,
              desc: [
                "1st p",
                "2nd p"
              ]
            },
            {
              name: "CSS",
              rating: 4.75,
              desc: [
                "1st p",
                "2nd p"
              ]
            },
          ],
          projects: [
            {
              name: "Internalize",
              href: "../path/to/project/page",
              icon: "/img/code.png",
              desc: [
                "1st p",
                "2nd p"
              ]
            },
            {
              name: "Lists",
              href: "../path/to/project/page",
              icon: "/img/code.png",
              desc: [
                "1st p",
                "2nd p"
              ]
            },
            {
              name: "Thoughts",
              href: "../path/to/project/page",
              icon: "/img/code.png",
              desc: [
                "1st p",
                "2nd p"
              ]
            },
          ],
          resources: [
            {
              href: "https://",
              title: "same"
            }
          ]
        }
      }
    })
  })
  .get("/data/page/project", function (req, res) {
    res.json({
      // res.render("body/page-project", {
      title: "page" + title,
      route: "page",
      data: {
        vanityUrl: "lists",
        header: {
          category: [
            {
              id: "",
              name: "Project",
              href: "project"
            }
          ],
          title: "Lists",
          icon: "/img/background.jpg",
          cta: [
            {
              text: "Visit site",
              url: ""
            }
          ],
          detail: [
            {
              type: "Episode",
              value: 0,
            },
            {
              type: "Status", //
              value: "active",
            },
          ],
          dates: [
            {
              type: "duration",
              start: {
                date: new Date(2016, 8),
                text: "September 2016"
              },
              end: {
                date: null,
                text: "Now"
              }
            },
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
            "Podcast",
            "The Josh Moxey Show",
            "Introduction",
          ],
          related: [
            {
              title: "",
              category: "",
              img: "/img/profile.png",
              href: "",
            }
          ],
          views: {
            count: 0,
          }
        },
        content: {
          preview: [
            {
              type: "img",
              src: "/img/mock/iphone-1.jpg",
              ori: 2,
              caption: [
                "Beautiful image of xyz",
              ]
            },
            {
              type: "img",
              src: "/img/mock/if.png",
              ori: 1,
              caption: [
                "Beautiful image of xyz",
              ]
            },
            {
              type: "img",
              src: "/img/mock/iphone-3.jpg",
              ori: 2,
              caption: [
                "Beautiful image of xyz",
              ]
            },
            {
              type: "img",
              src: "/img/mock/trello.jpg",
              ori: 2,
              caption: [
                "Beautiful image of xyz",
              ]
            },
            //Screenshot of adding a new item
            //Screenshot of adding a new list
            //Reshuffle gif
          ],
          whatsNew: [
            {
              date: new Date(),
              version: 0.12,
              content: [
                {
                  type: "img",
                  data: ""
                },
                {
                  type: "text",
                  data: ""
                }
              ],
            },
            {
              date: new Date(),
              version: 0.12,
              content: [
                {
                  type: "img",
                  data: ""
                },
                {
                  type: "text",
                  data: ""
                }
              ],
            },
            {
              date: new Date(),
              version: 0.12,
              content: [
                {
                  type: "img",
                  data: ""
                },
                {
                  type: "text",
                  data: ""
                }
              ],
            }
          ],
          description: [
            "p",
            "a",
            "parenteau?"
          ],
          benefeatures: [ //& benefits?
            {
              title: "",
              text: ""
            }
          ],
          testimonials: [ //feed id and find the rest
            {
              name: "Kevin Systrom",
              positionShort: "",
              message: "",
            }
          ],
          myRole: {
            title: "Chief Everything Officer",
            details: [
              "As I did this project solo, I spent a lot of time learning to code.",
              ""
            ]
          },
          origin: [
            "",
            ""
          ],
          accomplishments: [
            {
              title: "",
              text: ""
            },
          ],
          skillsInvolved: [ //ol
            {
              skill: "front-end web development",
              href: "../../",
              subskills: [
                ""
              ]
            }
          ],
          biggestLessons: [ //ul?
            ""
          ],
          attatchments: [
            {
              img: "path/to/img",
              title: "",
              desc: [
                ""
              ]
            }
          ],

          resources: [
            {
              href: "https://",
              title: "same"
            }
          ]
        }
      }
    })
  })
  .get("/page/past", function (req, res) {
    res.json({
      // res.render("body/page-project", {
      title: "page" + title,
      route: "page",
      data: {
        vanityUrl: "lists",
        header: {
          category: [
            {
              id: "",
              name: "Project",
              href: "project"
            }
          ],
          title: "Lists",
          icon: "/img/code.png",
          cta: [
            {
              text: "",
              url: ""
            }
          ],
          detail: [
            {
              type: "Episode",
              value: 0,
            },
            {
              type: "Status", //
              value: "active",
            },
          ],
          dates: [
            {
              type: "duration",
              start: {
                date: new Date(2016, 8),
                text: "September 2016"
              },
              end: {
                date: null,
                text: "Now"
              }
            },
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
            "Podcast",
            "The Josh Moxey Show",
            "Introduction",
          ],
          related: [
            {
              title: "",
              category: "",
              img: "/img/profile.png",
              href: "",
            }
          ],
          views: {
            count: 0,
          }
        },
        content: {
          preview: [
            {
              url: "path/to/img or https://...",
              type: "img",
              ratio: 1,
              caption: [
                "Beautiful image of xyz",
              ]
            }
            //Screenshot of adding a new item
            //Screenshot of adding a new list
            //Reshuffle gif
          ],
          whatsNew: [
            {
              type: "img",
              data: ""
            },
            {
              type: "text",
              data: ""
            }
          ],
          description: [
            "",
            "",
          ],
          benefeatures: [ //& benefits?
            {
              title: "",
              text: ""
            }
          ],
          testimonials: [ //feed id and find the rest
            {
              name: "Kevin Systrom",
              positionShort: "",
              message: "",
            }
          ],
          myRole: {
            title: "Chief Everything Officer",
            details: [
              "As I did this project solo, I spent a lot of time learning to code.",
              ""
            ]
          },
          origin: [
            "",
            ""
          ],
          accomplishments: [
            {
              title: "",
              text: ""
            },
          ],
          skillsInvolved: [ //ol
            {
              skill: "front-end web development",
              href: "../../",
              subskills: [
                ""
              ]
            }
          ],
          biggestLessons: [ //ul?
            ""
          ],
          attatchments: [
            {
              img: "path/to/img",
              title: "",
              desc: [
                ""
              ]
            }
          ],
          resources: [
            {
              href: "https://",
              title: "same"
            }
          ]
        }
      }
    })
  })
  .get("/data/:main", function (req, res) {
    mongo.db.collection("main")
      .findOne({"data.href": req.params.main}, (err, result) => {
        if (err) {
          return console.log(err)
        }
        mongo.db.collection("main")
          .find({"ACCESS.category": {$in: result.DATA.HERE}}).toArray()
      })
    //get

  })
  .get("/data/:section/:page", function (req, res) {
    //if page === null/undefined, only search for section
    //else, search for page too
    //if no page


    //check if main matches a page
    //if it does, do a second request to grab the pages it references
    //else if no match, next()
  })
  .get("/data/:section/", function (req, res) {
    //check if main matches a page
    //if it does, do a second request to grab the pages it references
    //else if no match, next() and send 404 data
  })
  .get("/:url", function (req, res, next) { //redirect system
    //potential:
    //get request to show loading...
    //if url found, redirect there
    //else, render a 404 dynamically
    mongo.db.collection("redirects")
      .findOne({"input": req.params.url}, function (err, result) {
        if (!result) return next()
        res.redirect(result.output)
      })
  })
  .get("/jsdisabled", function (req, res, next) {
    res.render("body/error/jsdisabled", {
      //todo make this an actual page
      title: 'Error: Javascript disabled | Internalize',
      route: "error"
    })
  })
  .use(function (req, res, next) {
    res.status(404).send("error four o four")
  })

module.exports = router;