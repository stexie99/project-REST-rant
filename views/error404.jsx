const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src='/images/kitten.jpg' alt='grey kitten'/>
              <div>
                image from <a href='https://placekitten.com/500/500'></a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404