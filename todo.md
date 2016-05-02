### TODO:

This app will be ingesting data from an API provided by Xively. There are a few
architectural and design patterns we need to nail down before proceeding. One of
those steps will be figuring out the shape of data we'll be polling. It could be
inefficient to push *all* possible data down to the client, so we want create efficient
publications on the server. I'd like to explore using something like GraphQL in
the near future, but for now, this will be a fairly "by-the-books" Meteor application.

Once the pub/sub model is made, the next step will be data visualizations. For that
I'm planning to use D3.js, with possibly an abstraction like [FusionCharts](http://www.fusioncharts.com/).

For the UI, I want to use [React](https://facebook.github.io/react/).
For the Database, Mongo.
For synchronization, [Redux](http://redux.js.org/).
Using these libraries in tandem will make scaling more natural, plus it gives me
a chance to learn more Redux. In the future, if our data needs get more complex
and we want to expand to GraphQL, we'll be able to feed data into the UI via decorators.

We'll probably want to write some logic so that unchanged data doesn't store a
complete Mongo document, but rather places a timestamp of when the polling occurred
and "unchanged" value in the database. Bloat could become a problem over time, so
we'll eventually want to dump to an S3 bucket or local machine (monthly?).

##### Milestones

- [ ] Assess API response objects from Xively
- [ ] store RESTful queries in Mongo
- [ ] create chron jobs for frequent polling
- [ ] create responsive UI for data vis
- [ ] incorporate more endpoints to show general plant data


More Links!
- [ReactD3](http://www.reactd3.org)
- [High Charts](http://www.highcharts.com/)
