import { City, Province } from "../payload-types";
import Provinces from "./fixtures/provinces";
import Cities from "./fixtures/cities";
import { create } from "./util";

const createProvincesCities = async () => {
  const provincePromises: Promise<Province | undefined>[] = [];

  for (let i = 0; i < Provinces.length; i++) {
    const province = Provinces[i];

    const promise = create<Province>(
      "provinces",
      { nameFa: { equals: province.nameFa } },
      province
    );
    provincePromises.push(promise);
  }
  console.log("provinces prepared");
  const provinces = await Promise.all(provincePromises);
  console.log("provinces done");

  const citiesPromises: Promise<City | undefined>[] = [];
  for (let i = 0; i < Cities.length; i++) {
    const city = Cities[i];
    const promise = create<City>(
      "cities",
      { nameFa: { equals: city.nameFa } },
      {
        nameFa: city.nameFa,
        nameEn: city.nameEn,
        province: provinces.find((p) => p && p.code === city.provinceCode)?.id,
      }
    );
    citiesPromises.push(promise);
  }
  return Promise.all(citiesPromises);
};

export default createProvincesCities;
