import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };

/**
 *
 * Thiết lập Redux store với khả năng lưu trữ và khôi phục state từ localStorage hoặc sessionStorage thông qua thư viện redux-persist.
 * Ở đây là đang dùng localStorage
 *
 * createStore: hàm để tạo store Redux.
 *
 * applyMiddleware: thêm middleware (như thunk) để xử lý các tác vụ bất đồng bộ.
 *
 * thunk : middleware giúp xử lý các hành động bất đồng bộ
 *
 * rootReducer: tập hợp các reducer, giúp cập nhật các phần khác nhau của state.
 *
 */
