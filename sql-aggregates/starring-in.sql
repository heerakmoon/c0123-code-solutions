select "genres", count("genres") as movies
from "filmGenre"
join "films" using ('filmId')
join "genre" using ('genreId')
join
where "firstName" = 'List Monroe';
