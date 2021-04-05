# NLP News Analyzer
NLP news analyzer is a web application that allows users to use Natural Language Processing to determine the sentiment, subjectivity and irony of a story all by just inputing any valid url into the search box. Results will also yield a percentage level value of the confidence in the analysis.

## Natural Language Processing
Meaning Cloud Sentiment Analysis API was used to preform the analysis. You can read more about it [here](https://www.meaningcloud.com). 

## Built With
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
[Node](https://nodejs.org/en/)
[Express](https://expressjs.com)
[Sass](https://sass-lang.com)
[Webpack](https://webpack.js.org)

## Installation
1. Get free API Key for NLP @ [](https://www.meaningcloud.com)
2. Clone Repo
```
git clone https://github.com/alfonsoruiz/text-analysis.git
```
3. install dependencies
```
npm install
```

## Environment Variables
Setup enviroment variables [.env](https://www.npmjs.com/package/dotenv)

1. Create environment variables with desired port number
```
PORT=XXXX
process.env.PORT
```
2. Create environment variable for API Key
```
API_KEY = '[key from meaning cloud api]'
process.env.API_Key
```

## Development Mode

1. Change url string in getData function to new localhost port
```
const getData = async (url) => {
  Client.renderLoader(document.getElementById('result'));

  try {
    const {data, sourceUrl} = await Client.postData('[newLocalHost]/api', url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
};
```
2. Run project in development using webpack dev server
```
npm run build-dev
```
3. Start Local Server
```
npm start
```

## Production Mode

1. Change url string in getData function to new localhost port
```
const getData = async (url) => {
  Client.renderLoader(document.getElementById('result'));

  try {
    const {data, sourceUrl} = await Client.postData('[newLocalHost]/api', url);
    Client.processResults(data, sourceUrl);
  } catch(e) {
    console.error(e);
  }
};
```

2. Run project in production mode
```
npm run build-prod
```
3. Start Local Server
```
npm start
```

## Live Example
[](https://nlp-news-analyzer.herokuapp.com)