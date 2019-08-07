import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

export default class TestView extends React.Component<any, any> {
  render() {
    return (
      <div>
        <MaterialTable
          title={<Button variant="contained" color="primary">刷新</Button>}
          data={[
            {
              id: 1,
              name: "a",
              createTime: "2018-01-01"
            },
            {
              id: 2,
              name: "b",
              createTime: "2018-01-01"
            }
          ]}
          columns={[
            { title: "试验名称", field: "name" },
            { title: "创建时间", field: "createTime" }
          ]}
          parentChildData={(row: any, rows: any) => rows.find((a: any) => a.id === row.parentId)}
          options={{
            selection: true
          }}
        />
      </div>
    );
  }
}