import { Location } from "./location";

export type Animal = {
  name: string;
  color: string[];
  location: Location;
  description: string;
  specie: string;
  sex: "male" | "female";
  picture: string;
};
