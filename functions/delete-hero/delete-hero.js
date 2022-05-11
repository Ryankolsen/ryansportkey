// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const API_KEY = process.env.REACT_APP_MONGODB_API_KEY;
const fetch = require("node-fetch");

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: "No identity instance detected. Did you enable it?",
      }),
    };
  }
  const { identity, user } = context.clientContext;

  const heroId = event.queryStringParameters.id;

  console.log(heroId);

  try {
    const response = await fetch(
      "https://data.mongodb-api.com/app/data-xajht/endpoint/data/beta/action/deleteOne",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key": API_KEY,
        },
        body: JSON.stringify({
          dataSource: "MainCluster",
          database: "ryansPortkey",
          collection: "heros",
          filter: { id: heroId },
        }),
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, msg: data }),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
