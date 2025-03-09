import { NextFunction, Response, Request } from "express";
import Meetings from "../../models/meetings";
import DevelopmentGroups from "../../models/developmentGroups";

export async function geMeetingByGroupId(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const groupId = req.params.id;

    const meeting = await Meetings.findAll({
      where: { groupId},
      include: [{ model: DevelopmentGroups, as: "developmentGroup" }]
    });
    res.json(meeting);
  } catch (e) {
    next(e);
  }
}

export async function addMeeting(
  req: Request<
    {},
    {},
    {
      groupId: string,
      meetingStartingTime: Date,
      meetingDescription: string,
      meetingRoom: string,
    }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const addMeeting= await Meetings.create(req.body);
    await addMeeting.reload({include: [DevelopmentGroups]});
    res.json(addMeeting);
  } catch (e) {
    next(e);
  }
}

