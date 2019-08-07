import React from "react";
import MaterialTable from 'material-table';


export default class SupervisedView extends  React.Component<any, any> {
  render() {
    return (
      <div>
        <MaterialTable
          title="Basic Tree Data Preview"
          data={[
            {
              id: 1,
              name: 'a',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63,
              sex: 'Male',
              type: 'adult',
            },
            {
              id: 2,
              name: 'b',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 34,
              sex: 'Female',
              type: 'adult',
              parentId: 1,
            },
            {
              id: 3,
              name: 'c',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 34,
              sex: 'Female',
              type: 'child',
              parentId: 1,
            },
            {
              id: 4,
              name: 'd',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 34,
              sex: 'Female',
              type: 'child',
              parentId: 3,
            },
            {
              id: 5,
              name: 'e',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 34,
              sex: 'Female',
              type: 'child',
            },
            {
              id: 6,
              name: 'f',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 34,
              sex: 'Female',
              type: 'child',
              parentId: 5,
            },
          ]}
          columns={[
            { title: '模型名称', field: 'name' },
            { title: 'Accuracy', field: 'surname' },
            { title: '性能(AUC)', field: 'sex' },
            { title: '执行速度', field: 'type', removable: false },
            { title: '时间', field: 'birthYear', type: 'numeric' },
            {
              title: '操作',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          parentChildData={(row:any, rows:any) => rows.find((a: any) => a.id === row.parentId)}
          options={{
            selection: true,
          }}
        />
      </div>
    );
  }
}