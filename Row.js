import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";      

function Row({ title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovie] = useState([]);

    const base_url= "https://image.tmdb.org/t/p/original/";

    const data = [

            
{backdrop_path: '/4yPfNmCbrokLuQsolaHs271p2Fj.jpg', first_air_date: '2020-04-27', genre_ids: Array(2),poster_path
:
"/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg", id: 100883, name: 'Never Have I Ever'},
{backdrop_path: '/xZUZ9i6vVayjyhR1vRo9Bjku4h.jpg', first_air_date: '2016-01-25', genre_ids: Array(2),poster_path
: 
"/ekZobS8isE6mA53RAiGDG93hBxL.jpg", id: 63174, name: 'Lucifer'},
{backdrop_path: '/mUZqXvIWtyEQ8YrfCiRVqfNYaMl.jpg', first_air_date: '2023-05-18', genre_ids: Array(2),poster_path
: 
"/hxvTdKAwv27PUfpXOQp6AwWr6V.jpg" , id: 195670, name: 'XO, Kitty'},
{backdrop_path: '/3ib0uov9Qq9JtTIEGL39irTa3vZ.jpg', first_air_date: '2018-09-24', genre_ids: Array(3),poster_path
: 
"/eTemCphrglLKrXOsNRhYezHA7H9.jpg", id: 79696, name: 'Manifest'},
{backdrop_path: '/sVMKQRBMruOtTwYxgZ9LJ4jWa7c.jpg', first_air_date: '2023-06-01', genre_ids: Array(1),poster_path
: 
"/yalKb2PnX8km1HzEc1Ii0fqGl8z.jpg", id: 216228, name: 'THE DAYS'},

{backdrop_path: '/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg', first_air_date: '2022-11-23', genre_ids: Array(3),poster_path
: 
"/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", id: 119051, name: 'Wednesday'},

{backdrop_path: '/7e7GKWe49a8g96KP037PcrGtG6I.jpg', first_air_date: '2023-05-31', genre_ids: Array(1),poster_path
: 
"/3KyyfuG5VxUmpJFnw0pa1SkTsuL.jpg", id: 227371, name: 'Fake Profile'},

{backdrop_path: '/rmmKVswMSMJfBxPAe4rn5jN2Tb0.jpg', first_air_date: '2023-05-25', genre_ids: Array(3),poster_path
: 
"/ryqcPZCEnEahBW4X06QZBUmtavp.jpg", id: 221300, name: 'FUBAR'},

{backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', first_air_date: '2016-07-15', genre_ids: Array(3),poster_path
: 
"/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg", id: 66732, name: 'Stranger Things'},

{backdrop_path: '/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg', first_air_date: '2015-10-10', genre_ids: Array(3),poster_path
: 
"/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", id: 63333, name: 'The Last Kingdom'},

{backdrop_path: '/A5ITI2kmvcMpQYEPpToTSdtWZzX.jpg', first_air_date: '2023-06-07', genre_ids: Array(1),poster_path
: 
"/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg", id: 226135, name: 'Arnold'},

{backdrop_path: '/q7XOgkp0NfjqVRYxzU0eGg7wSrm.jpg', first_air_date: '2011-12-04', genre_ids: Array(3),poster_path
: 
"/o9KmWrG9rbFhB7jWW4vFHTmqv28.jpg", id: 42009, name: 'Black Mirror'},

{backdrop_path: '/8Xs20y8gFR0W9u8Yy9NKdpZtSu7.jpg', first_air_date: '2022-01-28', genre_ids: Array(3),poster_path
: 
"/8gjbGKe5WNOaLrkoeOUPLvDhPhK.jpg", id: 99966, name: 'All of Us Are Dead'},

{backdrop_path: '/eqRvKwTcBvfiA7EojFae8ZUJXdp.jpg', first_air_date: '2023-06-09', genre_ids: Array(3),poster_path
: 
"/kxU1hhebWZGaz8gkMVi8zkZhzVt.jpg", id: 127529, name: 'Bloodhounds'},

{backdrop_path: '/5MApdDAuUA6DzUPDMcdplsidvwV.jpg', first_air_date: '2021-06-04', genre_ids: Array(2),poster_path
: 
"/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg", id: 103768, name: 'Sweet Tooth'},

{backdrop_path: '/uyNSskEsn8rQdHmsbw2udfiAh.jpg', first_air_date: '2020-05-08', genre_ids: Array(2),poster_path
: 
"/9WN7hVLAx7LEhLn5ZPylUEghM4m.jpg", id: 101918, name: 'Valeria'},

{backdrop_path: '/3UP0ZfrtuUYcCvBW8u4TReC3Vww.jpg', first_air_date: '2023-06-09', genre_ids: Array(3),poster_path
: 
"/ifJzwm47nzVF4mxiv2n6tzMh3av.jpg", id: 214603, name: "This World Can't Tear Me Down"},

{backdrop_path: '/foGkPxpw9h8zln81j63mix5B7m8.jpg', first_air_date: '2019-12-20', genre_ids: Array(3),poster_path
: 
"/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", id: 71912, name: 'The Witcher'},

{backdrop_path: '/xVofSPrSJPCJpNVCUUQVW600NoB.jpg', first_air_date: '2023-05-04', genre_ids: Array(1),poster_path
: 
"/eR7btjpvOugivUYSoEsD2iAOYsJ.jpg", id: 196454, name: 'Queen Charlotte: A Bridgerton Story'},

{backdrop_path: '/9nBVkNBe4x9HKDAzxjxlIqecxCW.jpg', first_air_date: '2021-06-25', genre_ids: Array(2),poster_path
: 
"/kfcJl5e8CRWDU7e4vX6uNABPRbS.jpg", id: 126280, name: 'Sex/Life'
        }
      ];
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>
                {title}
            </h2>
        <div className="row_posters">
            
        {data.map(movie=>(
                <img 
                 className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`
            } 
                    
                />
                ))}
        </div>
            
            
        </div>
    );
}

export default Row;