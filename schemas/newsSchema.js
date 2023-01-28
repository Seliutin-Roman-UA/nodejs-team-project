const { Schema, model } = required("mongoose");

const news = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const News = model("news", news);

module.exports = News;
