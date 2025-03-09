import axios from "axios";
import Draft from "../components/models/meeting/meetingDraft";
import Meeting from "../components/models/meeting/meeting";
class Meetings {
    
  async getPerGroup(groupId:string): Promise<Meeting[]> {
    const response = await axios<Meeting[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${groupId}`);
    console.log("📌 Response Data:", response.data); // ✅ וודא שהמידע מגיע כמו שצריך

    return response.data;
  }
  async add(draft:Draft): Promise<Meeting> {
    const response = await axios.post<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings`, draft);
    return response.data;
  }
  
}

const meetingsService = new Meetings();
export default meetingsService;
