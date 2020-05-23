// imports
import {RuntimeError} from "./RuntimeError";


// error definitions

export class NotImplementedError extends RuntimeError {}

export class InvalidOperationError extends RuntimeError {}

export class IllegalStateError extends RuntimeError {}
