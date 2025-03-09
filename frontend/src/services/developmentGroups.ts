import axios from "axios";
import DevelopmentGroup from "../components/models/developmentGroup/developmentGroup";

class DevelopmentGroups {
  async getAll(): Promise<DevelopmentGroup[]> {
    const response = await axios(
      `${import.meta.env.VITE_REST_SERVER_URL}/groups`
    );
    return response.data;
  }
}

const groupService = new DevelopmentGroups();
export default groupService;
