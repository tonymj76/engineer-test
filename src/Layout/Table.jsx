import { useMemo } from "react";
import Table from "../components/Table/table.component";
import { TableContainer } from "../components/Table/table.style";
import highrisk from "../assets/icons/svg/highrisk-arrow.svg";
import midrisk from "../assets/icons/svg/midrisk-arrow.svg";
import lowrisk from "../assets/icons/svg/lowrisk-arrow.svg";
import { TableData } from "../service/tableData";

const TableDisplay = () => {
  const { data: tableDate, isLoading } = TableData();
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "check",
        Cell: ({ cell: { value } }) => <img src={value} alt="check" />,
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "LOCATION",
        accessor: "location",
        Cell: ({ cell: { value } }) => (
          <div className="location">
            <h3>{value.state}</h3>
            <p>{value.addr}</p>
          </div>
        ),
      },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <div className={value === "No Issues" ? "noStatus" : "status"}>
            {value}
          </div>
        ),
      },
      {
        Header: "ENTRIES",
        accessor: "entries",
        Cell: ({ cell: { value } }) => (
          <div className="entries">
            <h3>{value.name}</h3>
            <p>{value.type}</p>
          </div>
        ),
      },
      {
        Header: "RISK PROFILE",
        accessor: "riskprofile",
        Cell: ({ cell: { value } }) => (
          <div
            className={
              value === "Mid Risk"
                ? "mid-risk"
                : value === "Low Risk"
                ? "low-risk"
                : "high-risk"
            }
          >
            <div className="risk flex-item">
              <img
                src={
                  value === "Mid Risk"
                    ? midrisk
                    : value === "Low Risk"
                    ? lowrisk
                    : highrisk
                }
                alt="status risk"
                className="img-risk"
              />
              <p className="risk-text">{value}</p>
            </div>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "action",
        Cell: ({ cell: { value } }) => (
          <div className="actionbutton">
            <img src={value} alt="value" />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => tableDate, [tableDate]);
  return (
    <TableContainer>
      {isLoading ? (
        ""
      ) : (
        <Table columns={columns} data={data} rowNumber={20} check></Table>
      )}
    </TableContainer>
  );
}

export default TableDisplay;