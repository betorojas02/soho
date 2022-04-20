//
// Copyright (C) 2021 - Banco Davivienda S.A. y sus filiales.
//

import { buildProviderModule, container } from '../ioc/inversify.config'
import { TYPES } from './types'

/* REST Controllers */
import '../../controller/proyectos.controller'


/* Services */
import '../../services/proyectoService/proyectoServices'


container.load(buildProviderModule())
