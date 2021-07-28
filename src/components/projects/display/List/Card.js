import tw from 'twin.macro';
import ProjectManager from '../shared/ProjectManager';
import ProjectInfo from '../shared/ProjectInfo';
import AssignedTo from '../shared/AssignedTo';
import Status from '../shared/Status';
import Actions from '../shared/Actions';

export default function List() {
  return (
    <div tw="flex flex-col space-y-3 bg-white border-b p-5">
      <div tw="flex justify-between items-center">
        <ProjectInfo />
        <Actions />
      </div>
      <AssignedTo />
    </div>
  );
}
