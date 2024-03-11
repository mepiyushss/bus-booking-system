import axios from "axios";

export default async function fetchBusDetails() {
  const data = await axios
    .get(
      "https://raw.githubusercontent.com/mepiyushss/bus-booking-system/main/src/component/bus-data.json"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
  const buses = data.buses;
  console.log("data", buses);

  return buses;
}
