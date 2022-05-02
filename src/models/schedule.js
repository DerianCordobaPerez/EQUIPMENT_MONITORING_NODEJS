import { schedule } from 'node-cron'

/**
 * "Runs a callback function with arguments after a specified time."
 * 
 * The first argument is the callback function. The second argument is the time in milliseconds. The
 * third argument is an array of arguments to pass to the callback function
 * @param callback - The function to be called.
 * @param time - The time in milliseconds to wait before running the callback.
 * @param args - The arguments to pass to the callback function.
 */
export function runSchedule(callback, time, args) {
  schedule(time, () => callback(args))
}