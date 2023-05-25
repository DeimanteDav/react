import Card from "./Card"
import './SeriesItem.css'

const SeriesItem = (props) => {
    
    const {title, poster, releaseDate, endDate, description, rating, cast, genres, topRatedEpisodes, allEpisodes, moreLikeThis} = props.data

    if (!title && !poster) {
        return
    }
 
    const imageAlt = `${title} poster`
    const imageElement = poster && <img src={poster} alt={imageAlt}/> 
    const endDateText = endDate ? endDate : 'ongoing'
    const dateElement = releaseDate && <span>{releaseDate}-{endDateText}</span>
    const descriptionElement = description ? <p>{description}</p> : ''
    const ratingElement = rating && <span>{rating}/10</span>
    const castElement = cast && (
        <div className="cast-wrapper"> 
            <h3>Cast</h3> 
            <ul className="inline-list">
                {cast.map((actor, i) => <li key={i}>{actor}</li>)}
            </ul> 
        </div>
    )

    const genresElement = genres && (
        <div className="genres-wrapper">
            <h3>Genres</h3>
            <ul className="inline-list">
                {genres.map((genre, i) => <li key={i}>{genre}</li>)}
            </ul>
        </div>
    )

    const topRatedEpisodesElement = topRatedEpisodes && (
        <div className="top-rated-wrapper"> 
            <h3>Top rated episodes</h3>
            <ul className="block-list">
                {topRatedEpisodes.map((topRatedEp, index) => {
                    return  <li  key={index}><a href={topRatedEp.link}className="link">{topRatedEp.episode} - {topRatedEp.name} </a></li>
                })} 
            </ul>
        </div>
    )

    const allEpisodesElement = allEpisodes && <a href={allEpisodes} className="link">View all episodes</a>

    const moreLikeThisElement = moreLikeThis && (
        <div className="more-wrapper">
            <h3>More like this</h3>
            <ul className="block-list">
                {moreLikeThis.map((series, index) => {
                    return <li key={index}><a href={series.link}className="link">{series.name}</a></li>
                })}
            </ul>
        </div>
    )

    return ( 
        <Card>
            <div className='series-item'>
                {imageElement}
                <div>
                    <h2 className="h2" id="h2-id">{title}</h2>
                    {dateElement}
                    {descriptionElement}
                    {ratingElement}
                    {castElement}
                    {genresElement}
                    {topRatedEpisodesElement}
                    {allEpisodesElement}
                    {moreLikeThisElement}
                </div>
            </div>
        </Card>
    )
}

export default SeriesItem