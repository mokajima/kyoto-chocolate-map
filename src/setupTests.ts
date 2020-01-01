import { GlobalWithFetchMock } from 'jest-fetch-mock'

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock
customGlobal.fetch = require('jest-fetch-mock') // eslint-disable-line import/newline-after-import
customGlobal.fetchMock = customGlobal.fetch

fetchMock.enableMocks()
