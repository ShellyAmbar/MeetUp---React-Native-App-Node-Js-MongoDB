const axios = require("axios").default;

axios.defaults.baseURL = "http://192.168.14.147:3000/api";

const fackGroupId = "5da2406de1732e4210858453";

class MeetupApi {
  constructor() {
    this.groupId = fackGroupId;
    this.path = "/groups/" + this.groupId + "/meetups";
  }
  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    return data.meetups;
  }
}

export { MeetupApi };
