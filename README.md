Client
=======
docker build -t matveyneyman/node-server .  
docker push matveyneyman/node-server  


Server
=======
Connect: ssh -i '~/.ssh/mailserver.pem' ubuntu@matveyneyman.com  
sudo docker pull matveyneyman/node-server  
sudo docker run -d --restart=always -p 3001:3001 matveyneyman/node-server  

'/root/iRedMail-0.9.9/tools/create_mail_user_SQL.sh'  
'/home/ubuntu/create_mail_user_SQL.sh'  