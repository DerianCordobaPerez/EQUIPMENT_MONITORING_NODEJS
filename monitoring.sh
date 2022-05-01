die () {
    echo >&2 "$@"
    exit 1
}

[ "$#" -eq 2 ] || die "2 argument required, $# provided"

ip=$1
command=$2

# if [ "$command" = "memory" ]; then
#     free
# elif [ "$command" = "disk" ]; then
#     df -h | awk '{print $4}'
# elif [ "$command" = "ip" ]; then
#     ifconfig
# elif [ "$command" = "ports" ]; then
#     netstat -lt && netstat -lu
# elif [ "$command" = "process" ]; then
#     ps -aux | head --lines=10
# elif [ "$command" = "users" ]; then
#     last | head --lines=10
# elif [ "$command" = "table" ]; then
#     netstat -nr
# elif [ "$command" = "logs" ]; then
#     cat /var/log/kern.log | head --lines=10 > ./logs/"logs - $ip".log
# elif [ "$command" = "read" ]; then
#     cat ./logs/"logs - $ip".log
# elif [ "$command" = "ls" ]; then
#     ls
# else
#     $command
# fi

ssh root@$ip bash -c "'
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
   fi
'"