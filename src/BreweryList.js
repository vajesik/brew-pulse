import React, { useState, useEffect } from "react";

function BreweryList() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {

        const responsePortland = await fetch(
          "https://api.openbrewerydb.org/breweries?by_city=portland&by_state=oregon&per_page=5"
        );
        const dataPortland = await responsePortland.json();

        const responseBoulder = await fetch(
          "https://api.openbrewerydb.org/breweries?by_city=boulder&by_state=colorado&per_page=5"
        );
        const dataBoulder = await responseBoulder.json();

        const combinedData = [...dataPortland, ...dataBoulder];

        setBreweries(combinedData);
      } catch (error) {
        console.error("Error fetching the breweries:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Breweries in Portland, OR & Boulder, CO</h1>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>{brewery.street}</p>
            <p>
              {brewery.city}, {brewery.state}
            </p>
            <p>{brewery.postal_code}</p>
            <p>
              <a
                href={brewery.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {brewery.website_url}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreweryList;
