import axios from "axios";

export interface Incidence {
  date: string;
  title: string;
  description: string;
  photo: string;
}
//sebastian santos 2021-1096
export class Endpoints {
  public async registerIncidence(incidence: Incidence): Promise<void> {
    const { data } = await axios.post("http://10.0.0.6:3000/api/info", incidence);
    return data;
  }
  public async getIncidences(): Promise<Incidence[]> {
    const { data } = await axios.get("http://10.0.0.6:3000/api/info");

    return data;
  }
  public async deleteIncidences(): Promise<void> {
    const { data } = await axios.delete("http://10.0.0.6:3000/api/info");

    return data;
  }
}
