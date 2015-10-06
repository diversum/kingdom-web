# Kingdom Finder

> A different take on search for rented apartments. Tell us about yourself,
> and we'll show you where the best neighborhood is you should live in.
> Based on places you visit often, communities, fashion trends, political
> alignment,.

## Run with Docker

When you run this as a Docker container, make sure
you add the environment variable `API_BASE` and expose the
port `8000`.

```bash
$ docker run -d -p 80:8000 -e API_BASE=http://api.kingdom.rent diversum/kingdom-web
```
