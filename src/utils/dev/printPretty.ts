import { pretty } from './pretty'

export const printPretty = (message: any, object: any) => {
  console.log(message, pretty(object))
}
