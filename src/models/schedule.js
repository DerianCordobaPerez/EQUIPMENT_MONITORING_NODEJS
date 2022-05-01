import { schedule } from 'node-cron'

export function runSchedule(callback, time, args) {
  schedule(time, () => callback(args))
}