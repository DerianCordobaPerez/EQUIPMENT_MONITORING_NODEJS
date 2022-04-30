ip=$1
command=$2

# echo "ip: $ip" && echo "command: $command"

if [ "$command" = "memory" ]; then
    free
elif [ "$command" = "disk" ]; then
    df -h | awk '{print $4}'
elif [ "$command" = "ip" ]; then
    ifconfig
elif [ "$command" = "ports" ]; then
    netstat -lt && netstat -lu
elif [ "$command" = "process" ]; then
    ps -aux | head --lines=10
elif [ "$command" = "users" ]; then
    last | head --lines=10
elif [ "$command" = "table" ]; then
    netstat -nr
elif [ "$command" = "logs" ]; then
    cat /var/log/kern.log | head --lines=10 > ./logs/"logs - $ip".log
elif [ "$command" = "read" ]; then
    cat ./logs/"logs - $ip".log
elif [ "$command" = "ls" ]; then
    ls
else
    $command
fi

# cat /var/log/alternatives.log | head --lines=5
# shh root@$ip bash -c "'
#    if [ "$command" = "memory" ]; then
#        free -m | awk '{print $2}'
#    elif [ "$command" = "disk" ]; then
#        df -h | awk '{print $4}'
#    elif [ "$command" = "ip" ]; then
#        ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '
#    elif [ "$command" = "ports" ]; then
#       netstat -an | grep -E 'tcp|udp'
#    elif [ "$command" = "process" ]; then
#       ps -aux
#    elif [ "$command" = "users" ]; then
#       last | grep logged
#    elif [ "$command" = "table" ]; then
#       netstat -nr
#    fi
#'"