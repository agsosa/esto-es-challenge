/*
  List of cards to display projects

  To use simple pass an array of project objects as props
*/

import tw from 'twin.macro';
import ProjectInfo from './shared/ProjectInfo';
import AssignedTo from './shared/AssignedTo';
import Actions from './shared/Actions';
import PropTypes from 'prop-types';

const Container = tw.div`w-full flex flex-col items-center md:grid md:grid-cols-2 md:gap-3`;

const Card = tw.div`flex flex-col space-y-3 shadow-sm bg-white border-b-2 p-5 w-full`;
const CardHeader = tw.div`flex justify-between items-center`;

export default function Cards({ projects, mutate }) {
  return (
    <Container>
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((p) => (
          <Card key={p.id}>
            <CardHeader>
              <ProjectInfo project={p} />
              <Actions project={p} mutate={mutate} />
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

Cards.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  mutate: PropTypes.func.isRequired
}