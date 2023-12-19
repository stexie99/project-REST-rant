const React = require('react')
const Def= require('../default')

function show(data){  
    let comments = (
        <h3 className="inactive">
        No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings= data.place.comments.reduce((tot,c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for(let i = 0; i < averageRating; i++) {
            stars += 'â­ï¸'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
        return (
            <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
                <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            </div>
        )})
    }
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
                <hr/>
                <h2>Comments</h2>  
                {comments}
            </main>
        </Def>
    )
}

module.exports = show