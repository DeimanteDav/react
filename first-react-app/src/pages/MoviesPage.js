import React from 'react'
import SeriesList from '../components/SeriesList'

const MoviesPage = () => {
    const seriesData = [
        {
          title: 'Alice in Borderland',
          poster: 'https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_QL75_UX380_CR0,4,380,562_.jpg',
          releaseDate: 2020,
          description: 'A group of bored delinquents are transported to a parallel dimension as part of a survival game.',
          cast: ['Kento Yamazaki', 'Tao Tsuchiya', 'Nijirô Murakami', 'Eleanor Noble'],
          genres: ['Action', 'Drama', 'Mystery'],
          topRatedEpisodes: [
            {
              episode: 'S2.E3',
              name: 'Episode #2.3',
              link: 'https://www.imdb.com/title/tt22868344/?ref_=tt_eps_top'
            },
            {
              episode: 'S1.E3',
              name: 'Episode 3',
              link: 'https://www.imdb.com/title/tt13618828/?ref_=tt_eps_top'
            }
          ],
          allEpisodes: 'https://www.imdb.com/title/tt10795658/episodes?ref_=tt_eps',
          moreLikeThis: [
            {
              name: 'Squid Game', 
              link: 'https://www.imdb.com/title/tt10919420/?ref_=tt_sims_tt_t_1'
            },
            {
              name: 'All of Us Are Dead', 
              link: 'https://www.imdb.com/title/tt14169960/?ref_=tt_sims_tt_t_2'
            },
            {
              name: 'Sweet Home', 
              link: 'https://www.imdb.com/title/tt11612120/?ref_=tt_sims_tt_t_3'
            },
            {
              name: 'Hellbound', 
              link: 'https://www.imdb.com/title/tt12235718/?ref_=tt_sims_tt_t_5'
            },
            {
              name: 'Extracurricular', 
              link: 'https://www.imdb.com/title/tt10262630/?ref_=tt_sims_tt_t_6'
            },
          ]
        },
        {
          title: 'The Last of Us',
          poster: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
          releaseDate: 2023,
          description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          rating: 8.9,
          cast: ['Pedro Pascal', 'Bella Ramsey', 'Anna Torv', 'Lamar Johnson'],
          genres: ['Action', 'Adventure', 'Drama'],
          topRatedEpisodes: [
            {
              episode: 'S1.E5',
              name: 'Endure and Survive',
              link: 'https://www.imdb.com/title/tt14659486/?ref_=tt_eps_top'
            },
            {
              episode: 'S1.E8',
              name: 'When We Are in Need',
              link: 'https://www.imdb.com/title/tt15747176/?ref_=tt_eps_top'
            }
          ],
          allEpisodes: 'https://www.imdb.com/title/tt3581920/episodes?ref_=tt_eps',
          moreLikeThis: [
            {
              name: 'Game of Thrones', 
              link: 'https://www.imdb.com/title/tt0944947/?ref_=tt_sims_tt_t_1'
            },
            {
              name: 'The Mandalorian', 
              link: 'https://www.imdb.com/title/tt8111088/?ref_=tt_sims_tt_t_2'
            },
            {
              name: 'Stranger Things', 
              link: 'https://www.imdb.com/title/tt4574334/?ref_=tt_sims_tt_t_3'
            },
            {
              name: 'Breaking Bad', 
              link: 'https://www.imdb.com/title/tt0903747/?ref_=tt_sims_tt_t_4'
            },
            {
              name: 'The Boys', 
              link: 'https://www.imdb.com/title/tt1190634/'
            },
          ]
        },
        {
          title: 'Breaking Bad',
          poster: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,4,380,562_.jpg',
          releaseDate: 2008,
          endDate: 2013,
          description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
          rating: 9.5,
          cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn', 'Betsy Brandt'],
          genres: ['Crime', 'Drama', 'Thriller'],
          topRatedEpisodes: [
            {
              episode: 'S5.E14',
              name: 'Ozymandias',
              link: 'https://www.imdb.com/title/tt2301451/?ref_=tt_eps_top'
            },
            {
              episode: 'S5.16',
              name: 'Felina',
              link: 'https://www.imdb.com/title/tt2301455/?ref_=tt_eps_top'
            }
          ],
          allEpisodes: 'https://www.imdb.com/title/tt0903747/episodes?ref_=tt_eps',
          moreLikeThis: [
            {
              name: 'Better Call Saul', 
              link: 'https://www.imdb.com/title/tt3032476/'
            },
            {
              name: 'Game of Thrones', 
              link: 'https://www.imdb.com/title/tt0944947/?ref_=tt_sims_tt_t_1'
            },
            {
              name: 'Chernobyl', 
              link: 'https://www.imdb.com/title/tt7366338/?ref_=tt_sims_tt_t_3'
            },
            {
              name: 'Stranger Things', 
              link: 'https://www.imdb.com/title/tt4574334/?ref_=tt_sims_tt_t_4'
            },
            {
              name: 'El Camino: A Breaking Bad Movie', 
              link: 'https://www.imdb.com/title/tt9243946/?ref_=tt_sims_tt_t_5'
            },
          ]
        },
        {
          title: 'Better Call Saul',
          poster: 'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_QL75_UX380_CR0,4,380,562_.jpg',
          releaseDate: 2015,
          endDate: 2022,
          rating: 8.9,
          cast: ['Bob Odenkirk', 'Rhea Seehorn', 'Jonathan Banks', 'Patrick Fabian'],
          genres: ['Crime', 'Drama'],
          topRatedEpisodes: [
            {
              episode: 'S6.E7',
              name: 'Plan and Execution',
              link: 'https://www.imdb.com/title/tt12187040/?ref_=tt_eps_top'
            },
            {
              episode: 'S6.E13',
              name: 'Saul Gone',
              link: 'https://www.imdb.com/title/tt11630828/?ref_=tt_eps_top'
            }
          ],
          allEpisodes: 'https://www.imdb.com/title/tt3032476/episodes?ref_=tt_eps_sm',
          moreLikeThis: [
            {
              name: 'Breaking Bad', 
              link: 'https://www.imdb.com/title/tt0903747/?ref_=tt_sims_tt_t_4'
            },
            {
              name: 'El Camino: A Breaking Bad Movie', 
              link: 'https://www.imdb.com/title/tt9243946/?ref_=tt_sims_tt_t_5'
            },
            {
              name: 'Game of Thrones', 
              link: 'https://www.imdb.com/title/tt0944947/?ref_=tt_sims_tt_t_1'
            },
            {
              name: 'The Sopranos', 
              link: 'https://www.imdb.com/title/tt7366338/?ref_=tt_sims_tt_t_3'
            },
            {
              name: 'The Boys', 
              link: 'https://www.imdb.com/title/tt1190634/?ref_=tt_sims_tt_t_5'
            },
          ]
        }
      ]
       
  return (
    <div className='page-content'>
    <h1>TV series</h1>
    <SeriesList seriesData={seriesData}></SeriesList>
  </div>
  )
}

export default MoviesPage