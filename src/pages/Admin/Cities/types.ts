export interface City {
  id: number;
  name: string;
  description: string;
}

export type CityPayload = Omit<City, "id">;

export type GetCities = Array<City>;
