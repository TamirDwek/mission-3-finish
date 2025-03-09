import { Router } from "express";
import validation from "../middlewares/validation";
import {addMeeting, geMeetingByGroupId } from "../controllers/meetings/controllers";
import { newMeetingValidator } from "../controllers/meetings/validator";

const meetingRouter = Router()


meetingRouter.get('/:id', geMeetingByGroupId )
meetingRouter.post('/', validation(newMeetingValidator),addMeeting )

export default meetingRouter