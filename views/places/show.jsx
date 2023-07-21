const React = require('react')
const Def= require('../default')

function show(data){    
    return(
        <Def>
            <main>
                <h1>{data.places.name}</h1>
                <img src={data.places.pic}/>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>Located in {data.places.city}, {data.places.state} and serving {data.places.cuisines}</p>
                    <a href="" className="btn btn-warning"> 
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