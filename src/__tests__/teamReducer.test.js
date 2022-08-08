import reducer from '../redux/team/teamSlice';

test('should return the inital state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    data: [], error: null, status: "idle", dataStat: {}
  });
});
