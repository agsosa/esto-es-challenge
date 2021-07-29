import tw from 'twin.macro';
import ProjectInfo from './shared/ProjectInfo';
import AssignedTo from './shared/AssignedTo';
import Actions from './shared/Actions';

const Container = tw.div`w-full flex flex-col items-center md:grid md:grid-cols-2 md:gap-3`;

const Card = tw.div`flex flex-col space-y-3 shadow-sm bg-white border-b-2 p-5 w-full`;
const CardHeader = tw.div`flex justify-between items-center`;

export default function List({ projects }) {
  return (
    <Container>
      {Array.isArray(projects) ? (
        projects.map((p) => (
          <Card>
            <CardHeader>
              <ProjectInfo project={p} />
              <Actions project={p} />
            </CardHeader>
            <AssignedTo project={p} />
          </Card>
        ))
      ) : (
        <span>No projects available</span>
      )}
    </Container>
  );
}
