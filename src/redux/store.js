import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/**
 * createStore: hàm để tạo store Redux.
 *
 * applyMiddleware: thêm middleware (như thunk) để xử lý các tác vụ bất đồng bộ.
 *
 * thunk : middleware giúp xử lý các hành động bất đồng bộ
 *
 * rootReducer: tập hợp các reducer, giúp cập nhật các phần khác nhau của state.
 *
 */
