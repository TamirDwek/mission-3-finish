import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import Card from "../card/Card";
import Meeting from "../../models/meeting/meeting";
import DevelopmentGroup from "../../models/developmentGroup/developmentGroup";
import groupService from "../../../services/developmentGroups";
import meetingsService from "../../../services/meetings";

export default function List(): JSX.Element {
  const [meetings, setMeeting] = useState<Meeting[]>([]);
  const [developmentGroup, setGroup] = useState<DevelopmentGroup[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const groupFromService = await groupService.getAll();
        setGroup(groupFromService);
      } catch (e) {
        console.error("error", e);
      }
    })();
  }, []);

  async function meetingChanged(event: ChangeEvent<HTMLSelectElement>) {
    const groupId = event.currentTarget.value;
    const currentMeeting = await meetingsService.getPerGroup(groupId);
    console.log("📌 Meetings Data:", currentMeeting);

    setMeeting(currentMeeting);
  }

  return (
    <div className="List">
      <div className="CinemaSelection">
        <select onChange={meetingChanged} defaultValue="">
          <option value="" disabled>
            please select Group...
          </option>
          {developmentGroup.map(({ id, groupName }) => (
            <option key={id} value={id}>
              {groupName}
            </option>
          ))}
        </select>
      </div>
      <div>
        {meetings.map((e) => (
          <Card key={e.id} meeting={e} />
        ))}
      </div>
    </div>
  );
}
