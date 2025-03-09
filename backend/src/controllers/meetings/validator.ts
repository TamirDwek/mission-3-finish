import Joi from "joi";

export const newMeetingValidator = Joi.object({
  groupId: Joi.string().uuid().required(), 
  meetingStartingTime: Joi.required(), 
  meetingDescription: Joi.string().max(255).required(), 
  meetingRoom: Joi.string().max(50).required() 
});

