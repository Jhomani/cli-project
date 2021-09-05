const capitalize = require("../utils");

const page = (name, module) =>
  ` import React, { useEffect } from 'react'; 
import { useDispatch } from 'react-redux'; 
 
import ${capitalize(name)} from '@${module.toLowerCase()}/${capitalize(name)}'; 
import AppLayout from '../../containers/AppLayout'; 
 
import injectSaga from '@utils/inject-saga'; 
import injectReducer from '@utils/inject-reducer'; 
import saga from '@${module.toLowerCase()}/${capitalize(name)}/redux/sagas'; 
import reducer from '@${module.toLowerCase()}/${capitalize(name)}/redux/reducer'; 
 
import { initial${capitalize(name)}Start } 
from '@${module.toLowerCase()}/${capitalize(name)}/redux/actions'; 

import { compose } from 'redux'; 
 
export function ${capitalize(name)}Page() { 
  const dispatch = useDispatch(); 
 
  useEffect(() => { 
    dispatch(initial${capitalize(name)}Start()); 
  }, []); 
 
  return (<> 
    <AppLayout> 
      <${capitalize(name)} /> 
    </AppLayout> 
  </> 
  ) 
}; 
 
const withReducer = injectReducer({ key: '${name.toLowerCase()}', reducer }); 
const withSagas = injectSaga({ key: '${capitalize(name)}', saga }); 
 
export default compose(withSagas, withReducer)(${capitalize(name)}Page); 
`

module.exports = page;