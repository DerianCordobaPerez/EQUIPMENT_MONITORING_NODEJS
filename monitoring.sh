#!/usr/bin/env bash

die () {
   echo >&2 "$@"
   exit 1
}

[ "$#" -eq 2 ] || die "2 argument required, $# provided"

ip=$1
command=$2

declare -A commands=(
   ["memory"]="free"
   ["disk"]="df -h"
   ["ip"]="ifconfig"
   ["ports"]="netstat -lu && netstat -lt"
   ["users"]="lastb"
   ["process"]="ps -aux | tail --lines=10"
   ["table"]="netstat -nr"
   ["dhcp"]="cat /etc/dhcp/dhcpd.conf | grep group -A 100"
   ["dns"]="cat /etc/bind/named.conf.local"
   ["web"]="apache2ctl -S"
   ["snmp"]="snmpget -v1 -c public 192.168.10.1 sysDescr.0"
   ["client"]="hostname"
)

if [ "$command" = "logs" ]; then
   cat /var/log/remote/`ssh -n root@$ip hostname`/rsyslogd.log > ./logs/"log - $ip".log
elif [ "$command" = "read" ]; then
   if [ -f ./logs/"logs- $ip".log ]; then
      cat ./logs/"logs - $ip".log
   else
      cat /var/log/remote/`ssh -n root@$ip hostname`/rsyslogd.log
   fi
else
   # ssh root@$ip bash -c "'
      
   # '"
   if [ -v commands[$command] ]; then
      ${commands[$command]}
   fi
fi