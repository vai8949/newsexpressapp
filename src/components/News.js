import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Asia shares tense as Fed looms, Ukraine a concern - Reuters",
      description:
        "Asian share markets slipped on Monday with the Federal Reserve expected to confirm it will soon start draining the massive liquidity that has fuelled the huge gains in growth stocks in recent years.",
      url: "https://www.reuters.com/markets/europe/global-markets-wrapup-1-pix-2022-01-24/",
      urlToImage:
        "https://www.reuters.com/resizer/u3JYBcmaWOBRu9OH98h_5xmDYqg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IPLCLPYARJK45AHNKI4CTTGDUQ.jpg",
      publishedAt: "2022-01-24T00:35:00Z",
      content:
        "SYDNEY, Jan 24 (Reuters) - Asian share markets slipped on Monday with the Federal Reserve expected to confirm it will soon start draining the massive liquidity that has fuelled the huge gains in grow… [+3790 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "Jim Metzendorf",
      title: "AC Podcast 555: Pixel 6 Fixes; NVIDIA Shield TV Bugs",
      description:
        "The January 2022 update is available now for Pixel 6 phones. It brings some quality of life improvements for their users. But the the news isn't so good for NVIDIA Shield TV after an Android 11 update. However, NVIDIA says fixes for Plex, Kodi, and more are o…",
      url: "https://www.androidcentral.com/ac-podcast-555-pixel-6-fixes-nvidia-shield-tv-bugs",
      urlToImage:
        "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/google-pixel-6-home-screen-material-you.jpg",
      publishedAt: "2022-01-24T01:46:52Z",
      content:
        "The January 2022 update is available now for Pixel 6 phones. It brings some quality of life improvements for their users. But the the news isn't so good for NVIDIA Shield TV after an Android 11 updat… [+442 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Mike Murphy",
      title:
        "Futures Movers: Stock futures rise Sunday after Wall Street’s worst week since 2020",
      description:
        "The upcoming week will see a number of quarterly earnings reports from big-name companies and a meeting of the Federal Reserve.",
      url: "https://www.marketwatch.com/story/stock-futures-rise-sunday-after-wall-streets-worst-week-since-2020-11642982623",
      urlToImage: "https://images.mktw.net/im-435623/social",
      publishedAt: "2022-01-24T00:03:00Z",
      content:
        "U.S. stock-index futures rose on Sunday, following the worst week on Wall Street since March 2020.Dow Jones Industrial Average futures \r\n YM00,\r\n +0.43%\r\ngained more than 100 points Sunday evening, w… [+1029 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Mike Murphy",
      title:
        "What's Worth Streaming: Here’s everything coming to HBO Max in February 2022 — and what’s leaving",
      description:
        "Get ready for new seasons of 'Last Week Tonight' and 'Raised By Wolves,' a new movie from Steven Soderbergh and much more.",
      url: "https://www.marketwatch.com/story/heres-everything-coming-to-hbo-max-in-february-2022-and-whats-leaving-11642988254",
      urlToImage: "https://images.mktw.net/im-472598/social",
      publishedAt: "2022-01-24T01:37:00Z",
      content:
        "AT&amp;Ts \r\n T,\r\n -1.52%\r\nHBO Max has a solid slate of originals coming in February, along with some big-name movies and the season finales of some of its buzziest shows.While its the end of the seas… [+8478 chars]",
    },

    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Andreas Donath",
      title:
        "Project Titan: Technischer Leiter für Apples Autoprojekt wirft hin",
      description:
        "Der Leiter des Software-Engineering-Programms für Apples Autoteam hat das Unternehmen nach sieben Jahren verlassen. (Apple Car, Apple)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fproject-titan-technischer-leiter-fuer-apples-autoprojekt-wirft-hin-2201-162612-rss.html&referer=https%3A%2F%2Ft.co%2F3a9e3480c0",
      urlToImage: null,
      publishedAt: "2022-01-24T06:12:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Andreas Donath",
      title: "Softwarefehler: iPhone 13 mit rosa eingefärbten Displays",
      description:
        "Einige Besitzer des Apple iPhone 13 berichten von einem rosafarbenen Bildschirm. Apple spricht von einem Softwarefehler, der behoben werde. (iPhone 13, Display)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fsoftwarefehler-iphone-13-mit-rosa-eingefaerbten-displays-2201-162614-rss.html&referer=https%3A%2F%2Ft.co%2F8fe7921fdb",
      urlToImage: null,
      publishedAt: "2022-01-24T06:36:03Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        'DeFi traders complain about network instability that hit Solana this weekend, four months after its last outage; Solana pushes update to fix "the worst effects" (Frank Chaparro/The Block)',
      description:
        "Frank Chaparro / The Block:\nDeFi traders complain about network instability that hit Solana this weekend, four months after its last outage; Solana pushes update to fix “the worst effects”  —  Jim Greco, like many traders who have had to deal with the Solana …",
      url: "https://www.techmeme.com/220123/p7",
      urlToImage:
        "https://www.tbstat.com/wp/uploads/2021/05/20210527_Solana_Generic_2.jpg",
      publishedAt: "2022-01-24T01:25:13Z",
      content:
        "Big Technology— by Alex Kantrowitz\r\nRevealing the systems in the tech world that drive what we see in the headlines, focusing primarily on the tech giants: Amazon, Apple, Facebook, Google, and Micros… [+3 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "OfficeSpace Software, which lets companies manage hybrid workspaces, desk and room booking, raises $150M from Vista Equity Partners (PYMNTS.com)",
      description:
        "PYMNTS.com:\nOfficeSpace Software, which lets companies manage hybrid workspaces, desk and room booking, raises $150M from Vista Equity Partners  —  Workspace management platform OfficeSpace Software has received a $150 million strategic investment from the in…",
      url: "https://www.techmeme.com/220124/p1",
      urlToImage:
        "https://securecdn.pymnts.com/wp-content/uploads/2022/01/OfficeSpace-Software-investments-funding-1000x600.jpg",
      publishedAt: "2022-01-24T05:25:07Z",
      content:
        "Big Technology— by Alex Kantrowitz\r\nRevealing the systems in the tech world that drive what we see in the headlines, focusing primarily on the tech giants: Amazon, Apple, Facebook, Google, and Micros… [+3 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "Australian PM Scott Morrison lost control of his official WeChat account months ago, while the still-active account now promotes Chinese life in Australia (Kirsty Needham/Reuters)",
      description:
        "Kirsty Needham / Reuters:\nAustralian PM Scott Morrison lost control of his official WeChat account months ago, while the still-active account now promotes Chinese life in Australia  —  Australia's Prime Minister Scott Morrison's Liberal Party lost access to h…",
      url: "https://www.techmeme.com/220124/p2",
      urlToImage:
        "https://www.reuters.com/resizer/uRhMsq9caR5u4J_msTo6CrWI7y8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XJWBGZPHORP3RE3G54CMLCEHQI.jpg",
      publishedAt: "2022-01-24T06:35:06Z",
      content:
        "Big Technology— by Alex Kantrowitz\r\nRevealing the systems in the tech world that drive what we see in the headlines, focusing primarily on the tech giants: Amazon, Apple, Facebook, Google, and Micros… [+3 chars]",
    },

    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "Amid a shift in malware targeting UEFI firmware, Kaspersky details new MoonBounce UEFI bootkit that can survive even after swapping the infected PC's hard drive (Catalin Cimpanu/The Record)",
      description:
        "Catalin Cimpanu / The Record:\nAmid a shift in malware targeting UEFI firmware, Kaspersky details new MoonBounce UEFI bootkit that can survive even after swapping the infected PC's hard drive  —  Security researchers from Kaspersky said on Thursday that they h…",
      url: "https://www.techmeme.com/220123/p8",
      urlToImage:
        "https://therecord.media/wp-content/uploads/2022/01/moon-night-sky-cloud.jpg",
      publishedAt: "2022-01-24T04:15:00Z",
      content:
        "Big Technology— by Alex Kantrowitz\r\nRevealing the systems in the tech world that drive what we see in the headlines, focusing primarily on the tech giants: Amazon, Apple, Facebook, Google, and Micros… [+3 chars]",
    },
  ];

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f49d64fb1c374f43aef946545c796c96&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=f49d64fb1c374f43aef946545c796c96&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=f49d64fb1c374f43aef946545c796c96&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center" style={{ margin: "40px 0px" }}>
          NewsMonkey Top Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    desc={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
