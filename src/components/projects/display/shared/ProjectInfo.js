/*
  Component to display a project's info (name, creation date)

  To use simply pass a project object through props
*/

import tw from 'twin.macro';
import VStack from '@components/common/VStack';
import HStack from '@components/common/HStack';
import PropTypes from 'prop-types';

const DateValue = tw.span`text-sm text-gray-400`;
const DateLabel = tw(DateValue)`hidden sm:flex`;

export default function ProjectInfo({ project }) {
  const d = new Date(project?.createdAt);
  let dateString;

  // Format creation date -> day/month/year hours:minutes pm/am
  if (d && !isNaN(d.getTime()))
    dateString = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()} ${
      d.getHours() > 12 ? 'pm' : 'am'
    }`;

  return (
    <VStack>
      <span>{project?.projectName}</span>
      <HStack><DateLabel>Creation date:</DateLabel> <DateValue>{dateString}</DateValue></HStack>
    </VStack>
  );
}

ProjectInfo.propTypes = {
  project: PropTypes.shape({ createdAt: PropTypes.object.isRequired, projectName: PropTypes.string.isRequired }).isRequired
}