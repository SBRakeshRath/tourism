const mapboxApiKey =
  "pk.eyJ1Ijoic2JyYWtlc2hyYXRoIiwiYSI6ImNsbWxyNWhyNzBndjAyaWw4dG12c2J1anoifQ.GGjKhUFn5_CwCjgmAE5vqw";

// const address =
//   '6RRJ+XWG, Barhadanda Road, Old Town, Bhubaneswar, Odisha 751002'
async function addressToCoordinate(address) {
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${mapboxApiKey}`;

  try {
    const res = await fetch(geocodingUrl);
    const data = await res.json();
    // console.log(data);
    const coordinates = data.features[0].geometry.coordinates;
    const latitude = coordinates[1];
    const longitude = coordinates[0];
    return { longitude, latitude };
  } catch (error) {
    console.log(error);
  }
}


export default addressToCoordinate
// console.log(await addressToCoordinate(address));

