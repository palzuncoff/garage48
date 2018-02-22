export const GET_TOPIC_LIST = 'GET_TOPIC_LIST'


export const loadTopicsBySubject = subjectId => {
  type: GET_TOPIC_LIST,
  payload: {
    subjectId,
  },
}
