
import { Container, inject } from 'inversify'
import { buildProviderModule, provide } from 'inversify-binding-decorators'
import 'reflect-metadata'
const container = new Container()

export { buildProviderModule, container, provide, inject }
