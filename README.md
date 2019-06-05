Client
=======
Push to docker hub: docker push matveyneyman/node-server  

Server
=======
Connect: ssh -i '~/.ssh/mailserver.pem' ubuntu@matveyneyman.com   
Get running container id: sudo docker ps -q  
Stop image: sudo docker stop <container_id>  
Fetch new image: sudo docker pull matveyneyman/node-server  
Run new image: sudo docker run -d --restart=always -p 3001:3001 matveyneyman/node-server  
Exit: exit  
Nginx config folder: /etc/nginx/sites-enabled  
