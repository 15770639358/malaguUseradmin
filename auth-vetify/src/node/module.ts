import './service/UserService';
import './service/roleService';
import './service/authService'
import { autoBind } from '@malagu/core';
import { autoBindEntities } from '@malagu/typeorm';
import * as entities from './entity';

autoBindEntities(entities);
export default autoBind();
