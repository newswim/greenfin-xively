import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Feeds = new Mongo.Collection('Feeds');

Feeds.schema = new SimpleSchema({
  id:            {type: Number},
  title:         {type: String},
  private:       {type: Boolean},   // might actually be a string
  feed:          {type: String},
  auto_feed_url: {type: String},
  status:        {type: String},
  updated:       {type: Date},
  created:       {type: Date},
  creator:       {type: String},
  version:       {type: String},
  datastreams:   {type: Object},
})


export default Feeds
