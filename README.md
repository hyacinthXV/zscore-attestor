# zScore AVS Attestor

## Setting up as an Operator with the AVS

Docs to set yourself up as an operator and start the service are here - [zScore-AVS-Docs](https://docs.zeru.finance/zeru-tech-docs/zscore-avs/quickstart)

## ▶️ Run an Attestor Node

We provide a docker-compose configuration which sets up the Attestor Node

To set up the environment, create a `.env` file with the usual zScore
configurations (see the `.env.example`), then run:

```console
docker compose build --no-cache
docker compose up
```

## 🏗️ Architecture
