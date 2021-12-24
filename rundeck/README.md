# Rundeck

A rundeck app powered by docker-compose and MySQL.

<br />

## How to Run :

⚠️ Before running, please make sure you have Docker and docker-compose installed.

<br />

1. Create `.env` by copying `.env.example` :

```bash
cp .env .env.example
```

<br />

2. Fill `RUNDECK_GRAILS_URL` in `.env` :

This can be a remote IP address or a hostname.

```bash
RUNDECK_GRAILS_URL=http://43.133.23.165
```

or

```bash
RUNDECK_GRAILS_URL=https://mywebsite.com
```

<br />

3. Run docker-compose :

`-d` flag runs docker-compose in the background.

```bash
docker-compose up -d
```

If you want to run Rundeck in foreground, try this instead :

```bash
docker-compose up
```

<br />

4. Access either a remote IP address or hostname you set in `RUNDECK_GRAILS_URL` through a browser to access the app.

<br />

## How to Stop :

```bash
docker-compose down
```
