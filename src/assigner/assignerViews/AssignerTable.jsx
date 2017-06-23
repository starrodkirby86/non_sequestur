import React from 'react';
import { Table } from 'semantic-ui-react';
import { AssignerTableHeader, AssignerTableRow } from './AssignerTableElements';
import { connect } from 'react-redux';

const mapStateToAssignersProps = (state) => {
  const assigners = state.assigners.map(a => ({...a}));
  return {assigners};
};

export const assignerTable = ({assigners}) => {
  const assignerRows = assigners.map(a => <AssignerTableRow {...a}
                                                            key={a.name}/>);
  return (
    <Table selectable
           padded
           compact
           verticalAlign="middle">
      <AssignerTableHeader />
      <Table.Body>
        {assignerRows}
      </Table.Body>
    </Table>
  )
};

export const AssignerTable = connect(
  mapStateToAssignersProps,
)(assignerTable);

export default AssignerTable;