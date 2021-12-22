import { Topic } from '$/types'

export type Methods = {
  get: {
    //TODO 型エラーが出るのでいったんanyで逃げるおって修正
    resBody: any
  }
  patch: {
    reqBody: Partial<Pick<Topic, 'title' | 'message' | 'tag'>>
    status: 204
  }
}
