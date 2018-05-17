const express = require('express');
const path = require('path');
const app = express();
const Hexo = require('hexo');
const config = require('./config.json');

const baseDir = path.join(__dirname, '..', 'pl');
const buildDir = path.join(__dirname, '..', 'build', 'pl');

const options = {
  config: '_prod-config.yml',
  debug: true,
};

const hexo = new Hexo(baseDir, options);
hexo.init();

const rebuild = () => hexo
  .call('generate', {})
  .catch((e) => console.error(e));


app.get('/regenerate', (req, res) => {
  if (config.key === req.query.key) {
    rebuild()
    res.send('Success');
  } else {
    res.send('ok');
  }
});

app.use('/', express.static(buildDir));

app.listen(3030);
