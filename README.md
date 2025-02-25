# DevOpsProject

# docker
- docker pull mongo
- docker run -p 27017:27017 -d --name devops-mongo mongo
- docker rm devops-mongo

- docker network create [network name]
- docker run -d --name devops-mongo --network [network name] mongo
    docker run [?-p_27017:27017?] -d --name devops-mongo --network [network name] [?mongo?]
- From project dir:
    - docker build . -t [image name] 
- docker run -p 3000:3000 --network [network name] [image name] 
    voor werkende nodemon:
        - docker run -p 3000:3000 --network [network name] --mount type=bind,source="$(pwd)",target=/app [image name]

# Extra docker commands
docker ps
docker image ls
docker network ls


# globaly installed npm packages:
npm install nodemon -g

npm install -g npx
npm install -g express-generator    