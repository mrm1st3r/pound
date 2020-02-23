import {createAction, union} from "@ngrx/store";
import {Call} from "./calls.model";

export const loadCalls = createAction('[Calls] load calls');
export const callsLoaded = createAction('[Calls] calls loaded', (calls: Call[]) => ({calls}));

const all = union({callsLoaded, loadCalls});
export type CallsActions = typeof all;
