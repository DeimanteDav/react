import React from 'react'
import SeriesItem from './SeriesItem.js';
import './SeriesList.css'

const SeriesList = (props) => {
    // const seriesListElements = props.seriesData.map((series, index) => {
    //     return (
    //       <SeriesItem    
    //         title={series.title}
    //         poster={series.poster}
    //         releaseDate={series.releaseDate}
    //         endDate={series.endDate}
    //         rating={series.rating}
    //         description={series.description}
    //         cast={series.cast}
    //         key={index}
    //      />
    //     )
    // })

    return (
        <div className='series-list'>
            {/* {props.seriesData.map((series, index) => (
                <SeriesItem    
                    title={series.title}
                    poster={series.poster}
                    releaseDate={series.releaseDate}
                    endDate={series.endDate}
                    rating={series.rating}
                    description={series.description}
                    cast={series.cast}
                    key={index}
                /> 
            ))} */}
            {props.seriesData.map((series, index) => <SeriesItem data={series} key={index}/>)}
        </div>
    )
}

export default SeriesList