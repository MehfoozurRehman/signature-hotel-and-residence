import axios from "axios";

export function GetAllUnitsByFilter(
  minFloor,
  maxFloor,
  minArea,
  maxArea,
  unitType
) {
  debugger;
  if (unitType !== null)
    return axios.get(
      process.env.REACT_APP_BASEURL +
        "api/unit/getFilteredList?min_floor=" +
        minFloor +
        "&max_floor=" +
        maxFloor +
        "&min_unit_area=" +
        minArea +
        "&max_unit_area=" +
        maxArea +
        "&unit_type=" +
        unitType
    );
  else
    return axios.get(
      process.env.REACT_APP_BASEURL +
        "api/unit/getFilteredList?min_floor=" +
        minFloor +
        "&max_floor=" +
        maxFloor +
        "&min_unit_area=" +
        minArea +
        "&max_unit_area=" +
        maxArea
    );
}

export const GetFloorListByCategory = (data) => {
  return axios.get(
    process.env.REACT_APP_BASEURL +
      "api/floor/getFloorByCategoryList?category_id=" +
      data,
    {
      ["axios-retry"]: {
        retries: 5,
      },
    }
  );
};

export const GetUnitByMaxRate = () => {
  return axios.get(process.env.REACT_APP_BASEURL + "api/unit/getMaxUnitArea", {
    ["axios-retry"]: {
      retries: 5,
    },
  });
};
