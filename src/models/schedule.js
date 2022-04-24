import { schedule } from 'node-cron'

export function runSchedule(callback, time) {
  schedule(time, callback)
}