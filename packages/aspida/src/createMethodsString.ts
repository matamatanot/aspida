import { LowerHttpMethod } from './'
import { Method } from './parseInterface'

export default (
  methods: Method[],
  indent: string,
  importName: string,
  newPrefix: string,
  path: string
) =>
  methods
    .map(({ name, props }) => {
      const isOptionRequired =
        (props.query && !props.query.hasQuestion) ||
        (props.reqBody && !props.reqBody.hasQuestion) ||
        (props.reqHeaders && !props.reqHeaders.hasQuestion)

      const reqBody = (method: LowerHttpMethod) =>
        props.reqBody
          ? ` body${props.reqBody.hasQuestion ? '?' : ''}: ${importName}['${method}']['reqBody'],`
          : ''
      const query = (method: LowerHttpMethod) =>
        props.query
          ? ` query${props.query.hasQuestion ? '?' : ''}: ${importName}['${method}']['query'],`
          : ''
      const reqHeaders = (method: LowerHttpMethod) =>
        props.reqHeaders
          ? ` headers${
              props.reqHeaders.hasQuestion ? '?' : ''
            }: ${importName}['${method}']['reqHeaders'],`
          : ''
      const resHeaders = (method: LowerHttpMethod) =>
        props.resHeaders
          ? `, ${importName}['${method}']['resHeaders']`
          : props.status
          ? ', BasicHeaders'
          : ''
      const status = (method: LowerHttpMethod) =>
        `${props.status ? `, ${importName}['${method}']['status']` : ''}`
      const option = (method: LowerHttpMethod) =>
        `option${isOptionRequired ? '' : '?'}: {${reqBody(method)}${query(method)}${reqHeaders(
          method
        )} config?: T }`
      const request = () =>
        `, option${
          !props.reqBody
            ? ''
            : props.reqFormat
            ? `, '${props.reqFormat.value}'`
            : props.reqBody && /^(ArrayBuffer|Blob|string)$/.test(props.reqBody.value)
            ? `, '${props.reqBody.value}'`
            : ''
        }`
      const resBody = (method: LowerHttpMethod) =>
        `${props.resBody ? `${importName}['${method}']['resBody']` : 'void'}`
      const resMethodName = () =>
        !props.resBody
          ? 'send'
          : ({ ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
              [key: string]: string
            })[props.resBody.value] || 'json'

      const tmpChanks = [
        `(${option(name)}) =>`,
        `fetch<${resBody(name)}${resHeaders(name)}${status(
          name
        )}>(${newPrefix}, ${path}, ${name.toUpperCase()}${request()}).${resMethodName()}()`
      ]

      return `${indent}  ${name}: ${tmpChanks[0]}
${indent}    ${tmpChanks[1]},
${indent}  $${name}: ${tmpChanks[0]}
${indent}    ${tmpChanks[1]}.then(r => r.body)`
    })
    .join(',\n')
