/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from './@types'
import * as apiUtils from './@utils'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './v1.1/2/_hogeId@HogeId/entries.json'
import { Methods as Methods2 } from './v1.1/2/_hogeId@HogeId/test-4/index'
import { Methods as Methods3 } from './v1.1/2/_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods4 } from './v1.1/2/_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods5 } from './v1.1/3.1'
import { Methods as Methods6 } from './v1.1/users/_userId@number'
import { Methods as Methods7 } from './v2.0/index'

const api = <U>(client: AspidaClient<U>) => {
  const prefix = (client.baseURL === undefined ? 'https://example.com/api/' : client.baseURL).replace(/\/$/, '')

  return {
    v1_1: {
      $2: {
        _hogeId: (val0: ApiTypes.HogeId) => ({
          entries_json: {
            get: (option?: { config?: U }) =>
              client.fetch<Methods1['get']['resData']>(prefix, `/v1.1/2/${val0}/entries.json`, 'GET', option).json(),
            $get: async (option?: { config?: U }) =>
              (await client.fetch<Methods1['get']['resData']>(prefix, `/v1.1/2/${val0}/entries.json`, 'GET', option).json()).data
          },
          test_4: {
            _fugaId: (val1: number | string) => ({
              get: (option?: { query?: Methods3['get']['query'], config?: U }) =>
                client.fetch<Methods3['get']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'GET', option).json(),
              $get: async (option?: { query?: Methods3['get']['query'], config?: U }) =>
                (await client.fetch<Methods3['get']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'GET', option).json()).data,
              post: (option: { data?: Methods3['post']['reqData'], query: Methods3['post']['query'], config?: U }) =>
                client.fetch<Methods3['post']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'POST', option).json(),
              $post: async (option: { data?: Methods3['post']['reqData'], query: Methods3['post']['query'], config?: U }) =>
                (await client.fetch<Methods3['post']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'POST', option).json()).data,
              put: (option: { query: Methods3['put']['query'], config?: U }) =>
                client.fetch<Methods3['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'PUT', option).json(),
              $put: async (option: { query: Methods3['put']['query'], config?: U }) =>
                (await client.fetch<Methods3['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'PUT', option).json()).data,
              delete: (option: { query: Methods3['delete']['query'], config?: U }) =>
                client.fetch<Methods3['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'DELETE', option).json(),
              $delete: async (option: { query: Methods3['delete']['query'], config?: U }) =>
                (await client.fetch<Methods3['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4/${val1}`, 'DELETE', option).json()).data
            }),
            fuga_aa: {
              get: (option: { query: Methods4['get']['query'], config?: U }) =>
                client.fetch<Methods4['get']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'GET', option).json(),
              $get: async (option: { query: Methods4['get']['query'], config?: U }) =>
                (await client.fetch<Methods4['get']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'GET', option).json()).data,
              post: (option: { data?: Methods4['post']['reqData'], query: Methods4['post']['query'], config?: U }) =>
                client.fetch<Methods4['post']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'POST', option).json(),
              $post: async (option: { data?: Methods4['post']['reqData'], query: Methods4['post']['query'], config?: U }) =>
                (await client.fetch<Methods4['post']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'POST', option).json()).data,
              put: (option: { query: Methods4['put']['query'], config?: U }) =>
                client.fetch<Methods4['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'PUT', option).json(),
              $put: async (option: { query: Methods4['put']['query'], config?: U }) =>
                (await client.fetch<Methods4['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'PUT', option).json()).data,
              delete: (option: { data: Methods4['delete']['reqData'], query: Methods4['delete']['query'], config?: U }) =>
                client.fetch<Methods4['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'DELETE', option).json(),
              $delete: async (option: { data: Methods4['delete']['reqData'], query: Methods4['delete']['query'], config?: U }) =>
                (await client.fetch<Methods4['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4/fuga aa`, 'DELETE', option).json()).data
            },
            get: (option: { query: Methods2['get']['query'], config?: U }) =>
              client.fetch<void>(prefix, `/v1.1/2/${val0}/test-4`, 'GET', option).send(),
            $get: async (option: { query: Methods2['get']['query'], config?: U }) =>
              (await client.fetch<void>(prefix, `/v1.1/2/${val0}/test-4`, 'GET', option).send()).data,
            post: (option?: { data?: Methods2['post']['reqData'], query?: Methods2['post']['query'], config?: U }) =>
              client.fetch<void>(prefix, `/v1.1/2/${val0}/test-4`, 'POST', option).send(),
            $post: async (option?: { data?: Methods2['post']['reqData'], query?: Methods2['post']['query'], config?: U }) =>
              (await client.fetch<void>(prefix, `/v1.1/2/${val0}/test-4`, 'POST', option).send()).data,
            put: (option?: { query?: Methods2['put']['query'], config?: U }) =>
              client.fetch<Methods2['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4`, 'PUT', option).json(),
            $put: async (option?: { query?: Methods2['put']['query'], config?: U }) =>
              (await client.fetch<Methods2['put']['resData']>(prefix, `/v1.1/2/${val0}/test-4`, 'PUT', option).json()).data,
            delete: (option: { query: Methods2['delete']['query'], config?: U }) =>
              client.fetch<Methods2['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4`, 'DELETE', option).json(),
            $delete: async (option: { query: Methods2['delete']['query'], config?: U }) =>
              (await client.fetch<Methods2['delete']['resData']>(prefix, `/v1.1/2/${val0}/test-4`, 'DELETE', option).json()).data
          }
        })
      },
      $3_1: {
        get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: U }) =>
          client.fetch<Methods5['get']['resData']>(prefix, '/v1.1/3.1', 'GET', option).json(),
        $get: async (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: U }) =>
          (await client.fetch<Methods5['get']['resData']>(prefix, '/v1.1/3.1', 'GET', option).json()).data,
        post: (option: { data?: Methods5['post']['reqData'], query: Methods5['post']['query'], config?: U }) =>
          client.fetch<Methods5['post']['resData']>(prefix, '/v1.1/3.1', 'POST', option, 'URLSearchParams').json(),
        $post: async (option: { data?: Methods5['post']['reqData'], query: Methods5['post']['query'], config?: U }) =>
          (await client.fetch<Methods5['post']['resData']>(prefix, '/v1.1/3.1', 'POST', option, 'URLSearchParams').json()).data
      },
      users: {
        _userId: (val2: number) => ({
          get: (option: { query: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: U }) =>
            client.fetch<Methods6['get']['resData']>(prefix, `/v1.1/users/${val2}`, 'GET', option).json(),
          $get: async (option: { query: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: U }) =>
            (await client.fetch<Methods6['get']['resData']>(prefix, `/v1.1/users/${val2}`, 'GET', option).json()).data,
          post: (option: { query: Methods6['post']['query'], config?: U }) =>
            client.fetch<Methods6['post']['resData']>(prefix, `/v1.1/users/${val2}`, 'POST', option).json(),
          $post: async (option: { query: Methods6['post']['query'], config?: U }) =>
            (await client.fetch<Methods6['post']['resData']>(prefix, `/v1.1/users/${val2}`, 'POST', option).json()).data
        })
      }
    },
    v2_0: {
      get: (option: { data: Methods7['get']['reqData'], query: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: U }) =>
        client.fetch<Methods7['get']['resData'], Methods7['get']['resHeaders']>(prefix, '/v2.0', 'GET', option, 'FormData').json(),
      $get: async (option: { data: Methods7['get']['reqData'], query: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: U }) =>
        (await client.fetch<Methods7['get']['resData'], Methods7['get']['resHeaders']>(prefix, '/v2.0', 'GET', option, 'FormData').json()).data
    },
    get: (option?: { query?: Methods0['get']['query'], config?: U }) =>
      client.fetch<Methods0['get']['resData']>(prefix, '/', 'GET', option).formData(),
    $get: async (option?: { query?: Methods0['get']['query'], config?: U }) =>
      (await client.fetch<Methods0['get']['resData']>(prefix, '/', 'GET', option).formData()).data,
    post: (option: { data?: Methods0['post']['reqData'], query: Methods0['post']['query'], config?: U }) =>
      client.fetch<Methods0['post']['resData']>(prefix, '/', 'POST', option).arrayBuffer(),
    $post: async (option: { data?: Methods0['post']['reqData'], query: Methods0['post']['query'], config?: U }) =>
      (await client.fetch<Methods0['post']['resData']>(prefix, '/', 'POST', option).arrayBuffer()).data,
    put: (option: { query: Methods0['put']['query'], config?: U }) =>
      client.fetch<Methods0['put']['resData']>(prefix, '/', 'PUT', option).json(),
    $put: async (option: { query: Methods0['put']['query'], config?: U }) =>
      (await client.fetch<Methods0['put']['resData']>(prefix, '/', 'PUT', option).json()).data,
    delete: (option: { query: Methods0['delete']['query'], config?: U }) =>
      client.fetch<Methods0['delete']['resData']>(prefix, '/', 'DELETE', option).blob(),
    $delete: async (option: { query: Methods0['delete']['query'], config?: U }) =>
      (await client.fetch<Methods0['delete']['resData']>(prefix, '/', 'DELETE', option).blob()).data
  }
}

export { ApiTypes, apiUtils }
export type ApiInstance = ReturnType<typeof api>
export default api