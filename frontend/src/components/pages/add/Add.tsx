import { useEffect, useState } from 'react'
import './Add.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Draft from '../../models/meeting/meetingDraft'
import DevelopmentGroup from '../../models/developmentGroup/developmentGroup'
import groupService from '../../../services/developmentGroups'
import meetingsService from '../../../services/meetings'

export default function Add(): JSX.Element {
    const [developmentGroup, setGroup] = useState<DevelopmentGroup[]>([])

    useEffect(() => {
        (async () => {
            try {
                const GroupFromService = await groupService.getAll();
                console.log("groups :", GroupFromService);
                setGroup(GroupFromService);
            } catch (e) {
                console.error("Error:", e);
            }
        })();
    }, []);

    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            await meetingsService.add(draft);
            alert('Meeting added successfully');
            navigate('/');
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                
                {/* Meeting Starting Time - Date Validation */}
                <label>Meeting Starting Time</label>
                <input
                    type="datetime-local"
                    {...register("meetingStartingTime", {
                        required: "Meeting starting time is required",
                    })}
                />
                <span className='error'>{formState.errors.meetingStartingTime?.message}</span>

                {/* Meeting Description */}
                <label>Meeting Description</label>
                <input
                    type="text"
                    placeholder='Meeting Description'
                    {...register("meetingDescription", {
                        required: "Meeting description is required",
                        maxLength: { value: 255, message: "Description cannot exceed 255 characters" },
                    })}
                />
                <span className='error'>{formState.errors.meetingDescription?.message}</span>

                {/* Meeting Room */}
                <label>Meeting Room</label>
                <input
                    type="text"
                    placeholder='Meeting Room'
                    {...register("meetingRoom", {
                        required: "Meeting room is required",
                        maxLength: { value: 50, message: "Room name cannot exceed 50 characters" },
                    })}
                />
                <span className='error'>{formState.errors.meetingRoom?.message}</span>

                <label>Group</label>
                <select
                    defaultValue={''}
                    {...register("groupId", {
                        required: "Group is required",
                    })}
                >
                    <option value="" disabled>Please select a group...</option>
                    {developmentGroup.map(({ id, groupName }) => (
                        <option key={id} value={id}>{groupName}</option>
                    ))}
                </select>
                <span className='error'>{formState.errors.groupId?.message}</span>

                <button>Add Meeting</button>
            </form>
        </div>
    )
}
