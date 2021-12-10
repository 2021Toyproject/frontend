// TODO
// 테스팅용 나중에 수정해야됨
import { USER_TEST_REDUCER } from '../Action/user';

const userInitialState = {
  user: null,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_TEST_REDUCER: {
      console.log('USER REDUCER');
      return {
        user: 'test',
      };
    }
    default:
      return state;
  }
};

export default userReducer;
