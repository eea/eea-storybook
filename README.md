# volto-kitkat-frontend

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto%2Fvolto-kitkat-frontend%2Fmaster&subject=pipeline)](https://ci.eionet.europa.eu/view/Github/job/volto/job/volto-kitkat-frontend/job/master/display/redirect)
[![Release](https://img.shields.io/github/v/release/eea/volto-kitkat-frontend?sort=semver)](https://github.com/eea/volto-kitkat-frontend/releases)

## Introduction

This repository bootstraps a Volto project with all the basic requirements to enable the use of the [volto-eea-kitkat](https://github.com/eea/volto-eea-kitkat) add-on, which introduces several core packages for EEA projects.

## Volto training

A training on how to create your own website using Volto is available as part of the Plone training at [https://training.plone.org/5/volto/index.html](https://training.plone.org/5/volto/index.html).

## Getting started

1.  Install `nvm`

        touch ~/.bash_profile
        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

        source ~/.bash_profile
        nvm version

2.  Install latest `NodeJS LTS 16.x`:

        nvm install 16
        nvm use 16
        node -v
        v16.13.1

3.  Install `yarn`

        curl -o- -L https://yarnpkg.com/install.sh | bash
        yarn -v

4.  Clone:

        git clone https://github.com/eea/volto-kitkat-frontend.git
        cd volto-kitkat-frontend

5.  Install the project packages

    yarn

6.  Build resources if you run frontend in production mode

        yarn build

7.  Start backend and check logs for application ready message

         docker-compose up -d backend
         docker-compose logs -f backend

    A new `data` folder will be created which will be mounted as a docker volume.

    Inside it, you will find the Plone database,
    the site changes are persisted inside it.

8.  Start frontend in develop mode without the need to build the JS resources

        yarn start

9.  Or start frontend in production mode

         yarn start:prod

10. See application at http://localhost:3000

11. Login with admin:admin

## Try it without developing

1.  Install [Docker](https://docs.docker.com/install/)
1.  Install [Docker Compose](https://docs.docker.com/compose/install/)
1.  Start the Plone backend and the Volto frontend:

        git clone https://github.com/eea/volto-kitkat-frontend.git
        cd volto-kitkat-frontend

        docker-compose pull
        docker-compose up -d

    optionally change `PORTS` via `.env`:

        FRONTEND=9000 BACKEND=9100 docker-compose up -d

1.  See application at http://localhost:4000

## Production

We use [Docker](https://www.docker.com/), [Rancher](https://rancher.com/) and [Jenkins](https://jenkins.io/) to deploy this application in production.

### Release

- Create a new release of this code via `git tag` command or [Draft new release](https://github.com/eea/volto-kitkat-frontend/releases/new) on Github.
  - A new Docker image is built and released automatically on [DockerHub](https://hub.docker.com/r/eeacms/volto-kitkat-frontend) based on this tag.

### Upgrade

- Within your Rancher environment click on the `Upgrade available` yellow button next to your stack.

- Confirm the upgrade

- Or roll-back if something went wrong and abort the upgrade procedure.
