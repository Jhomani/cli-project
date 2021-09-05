#curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -;
#sudo apt-get install -y nodejs;
sudo apt install nginx -y
#sudo useradd -g gitlap
#sudo apt install mariadb-server -y
sudo npm -g install pm2
sudo npm install -g yarn
#sudo mysql_secure_installation
sudo mkdir -p signs/{backend/{development,production},frontend/{development,production}}
sudo mkdir -p impuestos/{development/{backend,frontend},production/{backend,frontend}}
sudo mkdir -p abogados/{development/{backend,frontend},production/{backend,frontend}}
sudo mkdir -p subastasbot/{development/{backend,frontend},production/{backend,frontend}}
