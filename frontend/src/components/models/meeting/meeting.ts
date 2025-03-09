
import DevelopmentGroup from "../developmentGroup/developmentGroup"
import Draft from "./meetingDraft"

export default interface Meeting extends Draft{
   id:string
   developmentGroup: DevelopmentGroup
}