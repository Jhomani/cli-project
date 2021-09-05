const capitalize = require("../utils");

const styles = (name) =>
  `import styled from 'styled-components';
import { palette } from 'styled-theme';

const ${capitalize(name)}Wrapper = styled.div\`
\`;

export default ${capitalize(name)}Wrapper;
`;

module.exports = styles;