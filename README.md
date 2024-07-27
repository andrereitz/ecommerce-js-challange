# ecommerce-js-challange

## Run with docker
For convenience this projects uses docker to start the api service and the frontend.
To start both services, use the following command from the root directory:
```
docker compose build
```
```
docker compose up
```

You should be able to see the frontend running at `localhost:3000` and the server running at `localhost:3003`

## Dev mode without docker
If you want to run the project without docker, just execute in dev mode each of the folders:

/frontend
```
npm run dev
```

/api
```
npm run dev
```