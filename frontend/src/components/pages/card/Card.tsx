import Meeting from '../../models/meeting/meeting'
import './Card.css' 

interface CardProps {
    meeting: Meeting

}


export default function Card(props:CardProps):JSX.Element{

const { groupId, meetingStartingTime, meetingDescription, meetingRoom} = props.meeting

const {groupName} = props.meeting.developmentGroup || "Unknown";

console.log("📌 Group Name:", groupName);

return (
    <div className='Card'>
        <h4>Meeting Description:{meetingDescription}</h4>
        <p>Meeting Room: {meetingRoom}</p>
        <p>Meeting Time: {meetingStartingTime}</p>
        <p>Group Name: {groupName}</p>
        <p>Group Id: {groupId}</p>
        
    </div>
)
}