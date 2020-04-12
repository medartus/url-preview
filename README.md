
# Url Preview 💻

Url preview is an API providing metadata from any webpage. This Node.js application is based on the [Metascraper](https://github.com/microlinkhq/metascraper) project. 

You can get such data as : language, author, title, publisher, image, logo, description, etc.

If you want to add some specific endpoints or scrap metadata that are not handled, don't hesitate to open an issue and contribute !

## How to use it ? 👩‍💻

You only have to do some http request to the api : `https://url-preview.herokuapp.com/api/v1`

### GET /preview

#### Request

Example : `https://url-preview.herokuapp.com/v1/preview?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ`

|  Parameters  |       Value       |
| :----------: | :---------------: |
|     `url`    |    Url to scrap   |

> Don't forger to [url encode](https://www.urlencoder.org/) the value you pass to the url parameter !

#### Response

Response body:

```json
{
    "lang":"en",
    "author":"Official Rick Astley",
    "title":"Rick Astley - Never Gonna Give You Up (Video)",
    "publisher":"YouTube",
    "image":"https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "logo":"https://logo.clearbit.com/youtube.com","
    date":"2009-10-24T00:00:00.000Z",
    "description":"Rick Astley’s official music video for “Never Gonna Give You Up” Listen to Rick Astley: https://RickAstley.lnk.to/_listenYD Subscribe to the official Rick As...",
    "url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "audio":null
}
```

## License 🧾

Released under the MIT License.

Maintained by [Marc-Etienne Dartus](https://github.com/medartus) with help from [contributors](https://github.com/medartus/url-preview/graphs/contributors).