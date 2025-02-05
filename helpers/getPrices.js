import fetch from "node-fetch";

export default async (ids) => {
  const prices = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
      ","
    )}&vs_currencies=usd`
  )
    .then((res) => res.json())
    .then((data) => {
      return ids.map((id) => data[id].usd);
    });

  return prices;
};
