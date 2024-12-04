import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Berries Boßmann",
      title: "ARD-Sportschau sichert Bundesliga-Rechte bis 2029 | Sport",
      description:
        "Die ARD-Sportschau behält die Bundesliga-Rechte und zeigt weiterhin die Zusammenfassungen der Samstagnachmittag-Spiele im Free-TV.",
      url: "https://www.bild.de/sport/fussball/ard-sportschau-sichert-bundesliga-rechte-bis-2029-674ef74d6ee5aa76f7490503",
      urlToImage:
        "https://images.bild.de/674ef74d6ee5aa76f7490503/5df3c38eae92fb7549167c374cfd3cee,580edcb5?w=1280",
      publishedAt: "2024-12-03T13:00:02Z",
      content:
        "Rechte-Krimi um die Sportschau entschieden welcher Sender überraschend hoch mitpokerte\r\nRechte-Krimi um die Sportschau entschieden welcher Sender überraschend hoch mitpokerte\r\nRechte-Krimi um die Spo… [+678 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "In Pictures: Sporting photos of the week",
      description:
        "A selection of some of the most striking sports photographs taken around the world over the past seven days.",
      url: "http://www.bbc.co.uk/sport/articles/cgm97pwx9l7o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/2db8/live/a5b50f80-b163-11ef-a0f2-fd81ae5962f4.jpg",
      publishedAt: "2024-12-03T12:07:19.7552087Z",
      content:
        "Image caption, Teahupoo, with Sam Ewing on board, during the Hatton's Grace Hurdle on day two of the Fairyhouse Winter Festival in Meath",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Sports Personality of the Year 2024: Vote for World Sport Star",
      description:
        "Voting is now open for BBC Sports Personality's World Sport Star of the Year 2024 - meet the nominees and vote for your favourite.",
      url: "http://www.bbc.co.uk/sport/articles/cvgkxr5y15do",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/7c14/live/9644e350-ae92-11ef-8291-733526dcf0f0.jpg",
      publishedAt: "2024-12-03T08:37:16.9523784Z",
      content:
        "Sport: Athletics Country: Sweden\r\nDuplantis, more commonly known as Mondo, is regarded as the greatest pole vaulter of all time and enjoyed another record-breaking year in 2024.\r\nThe 25-year-old reta… [+454 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "RJ Young",
      title:
        "College football playoff predictions: Potential Ohio State-Georgia Round 1 matchup",
      description:
        "FOX Sports college football analyst RJ Young reveals his updated CFP projections heading into conference championship week.",
      url: "https://www.foxsports.com/stories/college-football/college-football-playoff-predictions-potential-ohio-state-georgia-round-1-matchup",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/12/1408/814/2024-10-08-rjyoung-cfb-bracket-storycard.jpg?ve=1&tl=1",
      publishedAt: "2024-12-02T23:04:15Z",
      content:
        "Now that the 2024 college football regular season has come to an end and conference championship weekend has arrived, it's important to point out a lesson we've all learned this year: \r\nThe unexpecte… [+4451 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Liam Hoofe",
      title:
        "Best betting sites UK | Top betting site offers for October 2024...",
      description:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events…",
      url: "https://talksport.com/betting/1760032/best-betting-sites-uk/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2024/08/talksport-best-betting-sites-uk-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2024-10-04T08:45:00Z",
      content:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events, … [+17381 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "New Micah Parsons Show ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
      urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2021/10/Micah-Parsons.jpg?resize=1536,1024&quality=75&strip=all",
      publishedAt: "2023-11-27T20:37:24.6381564Z",
      content: null,
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: " Mikal Bridges Interview ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
      urlToImage: "https://media.gq.com/photos/657c7f672bb9364d938dbae4/16:9/w_1920,c_limit/GQ_Mikal%20Bridges_Cam%201_%20103%201.jpg",
      publishedAt: "2023-11-27T20:37:24.3882176Z",
      content: "Nets star sits down with Taylor Rooks for exclusive convo.",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>News Monkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.length>=45? element.title.slice(0,45)+"...":element.title}
                    description={element.description.slice(0, 88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
