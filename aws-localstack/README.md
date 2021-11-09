<p align="center">
  <img src="https://raw.githubusercontent.com/localstack/localstack/master/doc/localstack-readme-header.png" alt="LocalStack - A fully functional local cloud stack">
</p>
<!--
<p align="center">
  <a href="https://circleci.com/gh/localstack/localstack"><img alt="CircleCI" src="https://img.shields.io/circleci/build/gh/localstack/localstack/master?logo=circleci"></a>
  <a href="https://coveralls.io/github/localstack/localstack?branch=master"><img alt="Coverage Status" src="https://coveralls.io/repos/github/localstack/localstack/badge.svg?branch=master"></a>
  <a href="https://pypi.org/project/localstack/"><img alt="PyPI Version" src="https://img.shields.io/pypi/v/localstack?color=blue"></a>
  <a href="https://hub.docker.com/r/localstack/localstack"><img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/localstack/localstack"></a>
  <a href="#backers"><img alt="Backers on Open Collective" src="https://opencollective.com/localstack/backers/badge.svg"></a>
  <a href="#sponsors"><img alt="Sponsors on Open Collective" src="https://opencollective.com/localstack/sponsors/badge.svg"></a>
  <a href="https://img.shields.io/pypi/l/localstack.svg"><img alt="PyPI License" src="https://img.shields.io/pypi/l/localstack.svg"></a>
  <a href="https://github.com/psf/black"><img alt="Code style: black" src="https://img.shields.io/badge/code%20style-black-000000.svg"></a>
  <a href="https://twitter.com/_localstack"><img alt="Twitter" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
</p>
-->
<p align="center">
  <i>LocalStack</i> provides an easy-to-use test/mocking framework for developing Cloud applications.
</p>
<!--
<p align="center">
  <a href="">Overview</a> •
  <a href="https://github.com/localstack/localstack#installing">Install</a> •
  <a href="#running">Run</a> •
  <a href="#configuration">Configure</a> •
  <a href="#interact-with-localstack">Play</a>
  <br>–<br>
  <a href="https://docs.localstack.cloud" target="_blank">📖 Docs</a> •
  <a href="https://app.localstack.cloud" target="_blank">💻 Pro version</a> •
  <a href="https://github.com/localstack/localstack/blob/master/doc/feature_coverage.md" target="_blank">☑️ Feature coverage</a>
</p>
-->

# Overview

[LocalStack 💻](https://localstack.cloud) is a cloud service emulator that runs in a single container on your laptop or in your CI environment.
With LocalStack, you can run your AWS applications or Lambdas entirely on your local machine without connecting to a remote cloud provider!
Whether you are testing complex CDK applications or Terraform configurations, or just beginning to learn about AWS services,
LocalStack helps speed up and simplify your testing and development workflow.

LocalStack supports a growing number of AWS services, like AWS Lambda, S3, Dynamodb, Kinesis, SQS, SNS, and **many** more!
<!--
The [**Pro version** of LocalStack](https://localstack.cloud/pricing) supports additional APIs and advanced features.
You can find a comprehensive list of supported APIs on our [☑️ Feature Coverage](https://github.com/localstack/localstack/blob/master/doc/feature_coverage.md) page.

LocalStack also provides additional features to make your life as a cloud developer easier!
Check out LocalStack's [Cloud Developer Tools](#localstack-cloud-developer-tools).
-->

# How to Run using docker-compose :

Assuming you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed in you machine, please follow the steps below. Otherwise, you should install them first.

1. Copy the example of environment variables (`.env.example`) to environment variables (`.env`) file :
```bash
cp .env.example .env
```

2. Spin up the Localstack docker container :
```bash
docker-compose up
```

**Note**: if you get an error saying "...permission denied...", try running `sudo docker-compose up` instead.

3. Open another terminal window or tab, then run aws cli commands without termintating the docker-compose process.
