#!/bin/bash

die () {
   echo >&2 "$@"
   exit 1
}

[ "$#" -eq 2 ] || die "2 argument required, $# provided"

commands=`cat commands.json`
ip=$1
command=$2

if [ "$command" = "logs" ]; then
   cat /var/log/remote/`ssh -n root@$ip hostname`/rsyslogd.log > ./logs/"log - $ip".log
elif [ "$command" = "read" ]; then
   if [ -f ./logs/"logs- $ip".log ]; then
      cat ./logs/"logs - $ip".log
   else
      cat /var/log/remote/`ssh -n root@$ip hostname`/rsyslogd.log
   fi
else
   ssh -n root@$ip `node -pe "JSON.parse(process.argv[1]).$command" "$commands"`
fi