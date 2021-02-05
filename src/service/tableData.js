import apiCall from "./api";
import {useQuery} from "react-query";
import ActionIcon from '../assets/icons/svg/actionicon.svg';
import circleIcon from "../assets/icons/svg/circle-arrow.svg";

const tableDatailsURL = "persons?_quantity=10&_gender=male&_birthday_start=2005-01-01";
export const TableData = () => useQuery('tableData', async() => {
  try {
    const {
      data
    } = await apiCall.get(tableDatailsURL)
    return data.data.map(info => (
      {
        check: circleIcon,
        name: `${info.firstname} ${info.lastname}`,
        location: {
          state: info.address.country,
          addr: `${info.address.buildingNumber} ${info.address.streetName} ${info.address.street}`,
        },
        status: "No Issues",
          entries: {
            name: "19 Unique Entries",
            type: "Homogenous"
          },
          riskprofile: "Low Risk",
          action: ActionIcon,
      }
    ))
  } catch (error) {
    throw new Error(error)
  }
})
