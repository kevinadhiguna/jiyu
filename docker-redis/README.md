# Redis - Docker

Redis, powered by docker compose

<br />

## How to run:

1. Copy the sample of environment variable:

```sh
cp .env.example redis.env
```

2. (Optional) Change the Redis password in `redis.env`

3. Run docker compose:

```sh
docker compose up -d
```

Note:
`-d` means detach, to run the docker compose in background.

4. Access the Redis service from host system:

```sh
redis-cli -p 6377
```

Note:

- `6377` here is the host port (used to connect to the Redis from external)
- The host port is not always `6377`. It can be configured in the docker-compose.yaml

<br />

## How to end the Redis service:

```sh
docker compose down
```

Optionally, if you would like to remove the docker volume:
Yu
```sh
docker compose down -v
```

<br />

### Rebuilding the docker image when running for second time:

If you previously have run the docker-compose.yaml and would like to run it again:

```sh
docker compose up -d --build
```
