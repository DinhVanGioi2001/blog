import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
    try {   
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        console.log(err);
        yield put(actions.getPosts.getPostsFailure(err));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        console.log('[create - post]', post);
        yield put(actions.createPost.createPostSuccess(post));
    } catch (err) {
        console.log(err);
        yield put(actions.createPost.createPostFailure(err));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}

export default mySaga;