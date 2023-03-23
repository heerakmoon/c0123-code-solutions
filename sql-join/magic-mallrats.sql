select "firstName", "lastName"
from "customers"
join "inventory" using ("filmId")
join "customers" using ("storeId")
where "title" = 'Magic Mallrats';
