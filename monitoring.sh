#!bin/bash

die () {
    echo >&2 "$@"
    exit 1
}

[ "$#" -eq 2 ] || die "2 argument required, $# provided"

ip=$1
command=$2

ssh root@$ip bash -c "'
   host=$(hostname)
   
   if [ "$command" = "memory" ]; then
       free
   elif [ "$command" = "disk" ]; then
       df -h
   elif [ "$command" = "ip" ]; then
       ifconfig
   elif [ "$command" = "ports" ]; then
      netstat -lu && netstat -lt
   elif [ "$command" = "process" ]; then
      ps -aux
   elif [ "$command" = "users" ]; then
      lastb
   elif [ "$command" = "table" ]; then
      netstat -nr
   elif [ "$command" = "dhcp" ]; then
      cat /etc/dhcp/dhcpd.conf | grep group -A 100
   elif [ "$command" = "dns" ]; then
      cat /etc/bind/named.conf.local
   elif [ "$command" = "web" ]; then
      apache2ctl -S
   elif [ "$command" = "logs" ]; then
      if [ ! -f /var/log/remote/$host/rsyslogd.log ]; then
         touch ./logs/logs - $ip.log
      fi

      cat /var/log/remote/$host/rsyslogd.log > ./logs/logs - $ip.log
   elif [ "$command" = "read" ]; then
      if [ ! -f ~/rsyslogd.log ]; then
         cat ./logs/logs - $ip.log
      else
         cat /var/log/remote/$host/rsyslogd.log
      fi
   elif [ "$command" = "client" ]; then
      hostname
   fi
'"