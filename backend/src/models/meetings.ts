import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import DevelopmentGroups from "./developmentGroups";

@Table({
    underscored: true
})
export default class Meetings extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @ForeignKey(() => DevelopmentGroups)
    @AllowNull(false)
    @Column(DataType.UUID)
    groupId: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    meetingStartingTime: Date;

    @AllowNull(false)
    @Column
    meetingDescription: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    meetingRoom: string;

    
    @BelongsTo(() => DevelopmentGroups,  { as: "group" }) 
    developmentGroup: DevelopmentGroups;
}
