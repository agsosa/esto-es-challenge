import tw, { styled } from 'twin.macro';
import ProjectInfo from './shared/ProjectInfo'
import AssignedTo from './shared/AssignedTo'
import Actions from './shared/Actions'
import ProjectManager from './shared/ProjectManager'
import Status from './shared/Status'

const Table = tw.table`w-full shadow-md bg-white`;

const HeaderRow = tw.tr`border-b`;
const Header = styled.th(({ roundedLeft, roundedRight }) => [
  tw`p-6 bg-alabaster-500 text-black text-left`,
  roundedLeft && tw`rounded-tl-lg`,
  roundedRight && tw`rounded-tr-lg`,
]);

const DataRow = tw.tr`bg-white`;
const Data = tw.td`p-5 border-b`;

export default function TableComponent({ projects }) {

  return (
    <Table>
      {/* Header */}
      <HeaderRow>
        <Header roundedLeft>Project Info</Header>
        <Header>Project Manager</Header>
        <Header>Assigned to</Header>
        <Header>Status</Header>
        <Header roundedRight>Actions</Header>
      </HeaderRow>

      {/* Data */}
      {Array.isArray(projects) ? (
        projects.map((p) => (
          <DataRow>
            <Data>
              <ProjectInfo project={p} />
            </Data>
            <Data>
              <ProjectManager project={p} />
            </Data>
            <Data>
              <AssignedTo project={p} />
            </Data>
            <Data>
              <Status project={p} />
            </Data>
            <Data>
              <Actions project={p} />
            </Data>
          </DataRow>
        ))
      ) : (
        <Data>No projects available</Data>
      )}
    </Table>
  );
}
