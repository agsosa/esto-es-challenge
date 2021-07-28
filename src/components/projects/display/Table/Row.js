import tw from 'twin.macro';
import ProjectManager from '../shared/ProjectManager';
import ProjectInfo from '../shared/ProjectInfo';
import AssignedTo from '../shared/AssignedTo';
import Status from '../shared/Status';
import Actions from '../shared/Actions';

const TableRow = tw.tr`bg-white`;
const Data = tw.td`p-5 border-b`;

export default function Row() {
  return (
    <TableRow>
      <Data>
        <ProjectInfo />
      </Data>
      <Data>
        <ProjectManager />
      </Data>
      <Data>
        <AssignedTo />
      </Data>
      <Data>
        <Status />
      </Data>
      <Data>
        <Actions />
      </Data>
    </TableRow>
  );
}
