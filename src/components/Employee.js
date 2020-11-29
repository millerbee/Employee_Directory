import React from "react";
// import Employee from "./Employee";
//this is the code to sort the data by name or location

const useSortableData = (employees, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...employees];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [employees, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedItems, requestSort, sortConfig };
};



const Employee= (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(props.employees);
  const getClassNamesFor = (name) => {
      if (!sortConfig) {
          return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;

  };
  return (

      <table>
       
          <thead>

          <tr>

              <th>
                  <button
                      type="button"
                      onClick={() => requestSort('name')}
                      className={getClassNamesFor('name')}
                      
                  >
                      Name
                  </button>
              </th>

              <th>
                     Email
              </th>
              <th>
                      Phone
              </th>
              <th>
              <button
                      type="button"
                      onClick={() => requestSort('location')}
                      className={getClassNamesFor('location')}
                      
                  >
                  
                      Location
                      </button>
              </th>
          </tr>
          </thead>
          <tbody>
          {employees.map((employee) => (
              <tr key={employee.id}>

                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.location}</td>
              </tr>
          ))}
          </tbody>
      </table>
  );
};


export default Employee;

//tutorials for sorting and searching merged together