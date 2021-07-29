/*
  Component to display a project's assignee name & avatar

  To use simply pass a project object through props
*/

import tw from 'twin.macro';
import Image from 'next/image';
import HStack from '@components/common/HStack';
import PropTypes from 'prop-types';

const AsigneeAvatar = tw(Image)`rounded-full bg-gray-200`;

export default function AssignedTo({project}) {
  return (
    <HStack>
      <AsigneeAvatar src='/person.webp' width='30px' height='30px' />
      <span>{project?.assignee?.firstName} {project?.assignee?.lastName}</span>
    </HStack>
  );
}

AssignedTo.propTypes = {
  project: PropTypes.shape({ assignee: PropTypes.object.isRequired }).isRequired
}