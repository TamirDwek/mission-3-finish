import { Router } from "express";
import validation from "../middlewares/validation";
import {addMeeting, getMeetingByGroupId } from "../controllers/meetings/controllers";
import { newMeetingValidator } from "../controllers/meetings/validator";

const meetingRouter = Router()


meetingRouter.get('/:id', getMeetingByGroupId )
meetingRouter.post('/', validation(newMeetingValidator),addMeeting )

export default meetingRouter