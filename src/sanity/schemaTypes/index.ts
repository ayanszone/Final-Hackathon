import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { editor } from './editor'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, editor]
}
