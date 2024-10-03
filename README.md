# Metro Mayors Coalition Regional Housing Task Force

## Overview

The Metro Mayor's Coalition is a group of cities and towns in the urban core of Metro Boston whose leaders gather to exchange information and create solutions for common problems. In order to help encourage housing production to meet the needs of the region, MAPC helps to organize the Metro Mayors Housing Task Force. This product is the website for that effort. The goal is to help municipal leaders and housing advocates to see their shared housing agenda and production goals and to track progress toward those goals.

## Setup

First, set up your local environment variables by creating a `.env` file, using the values from Dashlane.

Use `nvm` to install/use the `Node.js` version in `.nvmrc`

Install the dependencies: `yarn install` (or just `yarn`)

Run locally with `yarn start`

## Deployment

Deploys for this project are simple: the bundle is built locally and copied up to the web server. You'll need to configure your SSH keys to be able to connect as the `metro-mayors-housing-task-force` user.

### Staging

`yarn staging`

### Production

`yarn production`

## Airtable

This project now uses Airtable as a Content Management System (CMS). The corresponding base is called CMS - MMHTF, and contains the following objects:

* Task Force Members: used on the homepage and 2018 Compact page
* Principles: used on the Principles page
