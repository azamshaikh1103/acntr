import React from 'react';

const Employees = () => {
  const employeesData = [
    { id: 1, name: "Alice Johnson", department: "HR" },
    { id: 2, name: "Bob Williams", department: "Engineering" },
    { id: 3, name: "Charlie Brown", department: "Finance" },
    { id: 4, name: "David Smith", department: "Marketing" },
    { id: 5, name: "Emma Watson", department: "Sales" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Roster</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered border-secondary">
          <thead className="table-dark">
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td className="fw-semibold">{employee.name}</td>
                <td>
                  <span className={`badge ${
                    employee.department === 'Engineering' ? 'bg-primary' :
                    employee.department === 'HR' ? 'bg-danger' :
                    employee.department === 'Finance' ? 'bg-success' :
                    employee.department === 'Marketing' ? 'bg-warning text-dark' :
                    'bg-secondary'
                  }`}>
                    {employee.department}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
