/*
  Component to display a project's status

  To use simply pass a project object through props
*/

import tw from 'twin.macro';
import PropTypes from 'prop-types';

const Status = tw.div`inline px-2 py-1 bg-alabaster-500 rounded-lg border text-center`;

export default function StatusComponent({project}) {
  return <Status value={project?.status}>{project?.status ? "Enabled" : "Disabled"}</Status>;
}

StatusComponent.propTypes = {
  project: PropTypes.shape({ status: PropTypes.bool.isRequired }).isRequired
}