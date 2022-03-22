const axios = require('axios');
const jsStringify = require('js-stringify');
let queryString = 'https://kitsu.io/api/edge/anime';
module.exports = function(app) {
  app.route('/lastest/:count').get((req, res) => {
    let count = parseInt(req.params.count);
    const limit = 18;
    const offset = count * limit;
    const url = queryString + `?page[limit]=${limit}&page[offset]=${offset}&sort=updatedAt`
    console.log(url);
    listAnime(url).then(list => {
        res.render('pug',
                 {jsStringify,
                   showHeader: true,
                  showContent: true,
                  showFooter: true,
                  list: list.data
                   });
      })
  })
  
  app.route('/').get((req, res) => {
      const params = '?sort=updatedAt&page[limit]=18';
      listAnime(queryString + params).then(list => {
        res.render('pug',
                 {jsStringify,
                   showHeader: true,
                  showContent: true,
                  showFooter: true,
                  list: list.data
                   });
      })
  })
  
}
async function listAnime(url){
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
}

function convertToQuery(page, sort) {
  let array = [];
  for(const ele in page){
    array.push(`page[${ele}]=${page[ele]}`);
  }
  array.push(`sort=${sort}`);
  return '?' + array.join('&');
}