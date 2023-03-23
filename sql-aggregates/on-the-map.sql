select "countryId", count("cityId") as numOfCities
from "countries"
join "cities" using ("countryId")
group by "countryId";
