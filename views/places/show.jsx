const React = require('react')
const Def= require('../default')

function show(data){  
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic}/>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                    <a href={ `/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                    </a>  
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                    Delete
                    </button>
                    </form>     
                </div>  
            </main>
        </Def>
    )
}

module.exports = show