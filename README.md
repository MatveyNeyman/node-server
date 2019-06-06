Client
=======
Build docker: docker build -t matveyneyman/node-server .  
Push to docker hub: docker push matveyneyman/node-server  

Server
=======
Connect: ssh -i '~/.ssh/mailserver.pem' ubuntu@matveyneyman.com   
Stop image: sudo docker stop node-server  
Fetch new image: sudo docker pull matveyneyman/node-server  
Run new image: sudo docker run -d --restart=always -p 3001:3001 --name=node-server matveyneyman/node-server    
Exit: exit  
Nginx config folder: /etc/nginx/sites-enabled  
