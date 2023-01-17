export const Main = (props) => {

    const moviesArray = [
        {
            id: 1,
            title: "The Godfather",
            rating: 9
        },
        {
            id: 2,
            title: "Forest Gump",
            rating: 9
        },
        {
            id: 3,
            title: "Gladiator",
            rating: 8
        }
    ]

    // const list = [
    //     <div><p>movie one</p></div>,
    //     <div>movie two</div>,
    //     <div>movie three</div>
    // ]
    
    return (
    <div>
        <h1>This is the Main div</h1>
        {moviesArray.map(movie => {
            return (
                <div>
                    <div key={movie.id}>
                        <h2>Title: {movie.title}</h2>
                        <p>Rating: {movie.rating}</p>
                    </div>
                </div>
            )
        })}
    </div>
    ) 
}