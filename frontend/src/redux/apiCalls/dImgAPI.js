import request from "../../utils/request";

export function downloadImagery(bgDate, enDate, coords) {
  return async () => {
    const response = await request.post("/dimg", {
      polygon: [coords],
      dates: [bgDate, enDate],
      collection: "C02",
    });
    // console.log(response);
    return response;
  };
}
