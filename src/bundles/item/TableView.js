import React from 'react'

const TableView = function (props) {
  return <table className="table table-responsive table-striped" style={{ width: '100%' }}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Name</td>
          <td>Description</td>
          <td>Price</td>
          <td>Category</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
}
export default TableView
