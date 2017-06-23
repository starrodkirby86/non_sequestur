import React from 'react';
import { Table, Image, Progress } from 'semantic-ui-react';

export const AssignerTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell width={3}>Name</Table.HeaderCell>
      <Table.HeaderCell width={2}>Idol Group</Table.HeaderCell>
      <Table.HeaderCell width={2}>School Year</Table.HeaderCell>
      <Table.HeaderCell width={6}>Affection</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export const AssignerTableRow = ({name, avatarPath, idolGroup, schoolYear, affection}) => (
  <Table.Row>
    <Table.Cell><Image size="tiny" floated="left" src={avatarPath}/> {name}</Table.Cell>
    <Table.Cell>{idolGroup}</Table.Cell>
    <Table.Cell>{schoolYear}</Table.Cell>
    <Table.Cell><Progress percent={affection}/></Table.Cell>
  </Table.Row>
);