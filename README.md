[![Maintainability](https://api.codeclimate.com/v1/badges/d90c89b9e85c59723123/maintainability)](https://codeclimate.com/github/alfonsoruiz/text-analysis/maintainability)

# NLP News Analyzer
NLP news analyzer is a web application that allows users to use Natural Language Processing to determine the sentiment, subjectivity and irony of a story all by just inputing any valid url into the search box. Results will also yield a percentage level value of the confidence in the analysis.

## Natural Language Processing
Meaning Cloud Sentiment Analysis API was used to preform the analysis. You can read more about it [here](https://www.meaningcloud.com). 

## Built With
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) |
[Node](https://nodejs.org/en/) |
[Express](https://expressjs.com) |
[Sass](https://sass-lang.com) |
[Webpack](https://webpack.js.org) |

## Installation
1. Get free API Key for NLP @ [meaningcloud.com](https://www.meaningcloud.com)
2. Clone Repo
```
git clone https://github.com/alfonsoruiz/text-analysis.git
```
3. install dependencies
```
npm install
```

### Environment Variables
Setup enviroment variables to learn more read about [.env](https://www.npmjs.com/package/dotenv)

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

### Development Mode
1. Run project in development using webpack dev server
```
npm run build-dev
```
2. Start Local Server
```
npm start
```

### Production Mode
2. Run project in production mode
```
npm run build-prod
```
3. Start Local Server
```
npm start
```

## Live Example
See a live example of the site [NLP News Analyzer](https://nlp-news-analyzer.herokuapp.com)