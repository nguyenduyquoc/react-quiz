import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

/**
 * createStore: hàm để tạo store Redux.
 *
 * applyMiddleware: thêm middleware (như thunk) để xử lý các tác vụ bất đồng bộ.
 *
 * thunk : middleware giúp xử lý các hành động bất đồng bộ
 *
 * composeWithDevTools: thêm công cụ hỗ trợ phát triển (Redux DevTools) để dễ dàng kiểm tra và gỡ lỗi.
 *
 * rootReducer: tập hợp các reducer, giúp cập nhật các phần khác nhau của state.
 *
 * reduce : có nghĩa là thu gọn, giảm bớt
 */
