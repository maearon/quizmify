# Quiz APP AI

A test app use AI with infinite loading, optimistic updates, authentication, DMs, notifications, file uploads, and much more.

npx prisma generate
npx prisma db push
node seed.js
npx prisma studio --> http://localhost:5555/
mongosh
use ec-test-dev
db.questions.findOne({ _id: "66c595640d63055697fd6a44" } )
npm i
npx next dev

Settings MongoDB run in replica set on local machine:

sudo systemctl stop mongod
mongod --replSet rs0 --dbpath /var/lib/mongodb --bind_ip localhost
/ect/mongod.conf
storage:
  dbPath: /var/lib/mongodb
replication:
  replSetName: rs0
sudo rm /tmp/mongodb-27017.sock
mongo
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "127.0.0.1:27017" }
  ]
})
rs.status()
sudo systemctl restart mongod
sudo tail -f /var/log/mongodb/mongod.log
npx prisma init
rm -rf node_modules
rm package-lock.json
On Win 10:
& "C:\Windows\System32\net.exe" stop MongoDB

"C:\Program Files\MongoDB\Server\7.0\bin"
Modify file mongod.conf
replication:
  replSetName: rs0

& "C:\Windows\System32\net.exe" start MongoDB

npm install -g mongosh
mongosh --version
mongosh

rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "127.0.0.1:27017" }
  ]
})
rs.status()
npm install -g npm
npx prisma init
This to pass proxy fpt dơnload prisma in admin power shell 
$env:NODE_TLS_REJECT_UNAUTHORIZED="0"
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npx prisma generate
Remove-Item -Recurse -Force node_modules

Quiz Type: mcq: "Multiple Choice Question" and open-ended: "Open-ended"

https://cloud.mongodb.com/v2/66c1ecd7e3a3c563d2f47aba#/overview?connectCluster=Cluster0

https://cloud.mongodb.com/v2/66c1ecd7e3a3c563d2f47aba#/security/network/accessList
